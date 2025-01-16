import * as THREE from "three";

export class SpriteAnimator {
  private currentTile = 0;
  private tilesHorizontal = 20;
  private tilesVertical = 10;

  private map: THREE.Texture;
  private sprite: THREE.Sprite;
  private maxDisplayTime = 0;
  private elapsedTime = 0;
  private runningTileArrayIndex = 0;
  private playSpriteIndices: number[] = [];

  constructor(
    spriteTexture: string,
    tilesHorizontal: number,
    tilesVertical: number,
    scene: THREE.Scene
  ) {
    this.tilesHorizontal = tilesHorizontal;
    this.tilesVertical = tilesVertical;

    this.map = new THREE.TextureLoader().load(spriteTexture);
    this.map.magFilter = THREE.NearestFilter;
    this.map.colorSpace = THREE.SRGBColorSpace;

    const tileWidth = 1000;
    const tileHeight = 800;
    const tileAspectRatio = tileWidth / tileHeight;

    this.map.repeat.set(1 / tilesHorizontal, 1 / tilesVertical);

    this.update(0);

    const material = new THREE.SpriteMaterial({ map: this.map });
    this.sprite = new THREE.Sprite(material);
    this.sprite.scale.set(tileAspectRatio, 1, 1);

    scene.add(this.sprite);
  }

  public loop(playSpriteIndices: number[], totalDuration: number) {
    this.playSpriteIndices = playSpriteIndices;
    this.runningTileArrayIndex = 0;
    this.currentTile = playSpriteIndices[this.runningTileArrayIndex];
    this.maxDisplayTime = totalDuration / this.playSpriteIndices.length;
    this.elapsedTime = this.maxDisplayTime;
  }

  public setPosition(x: number, y: number, z: number) {
    this.sprite.position.x = x;
    this.sprite.position.y = y;
    this.sprite.position.z = z;
  }

  public addPosition(x: number, y: number, z: number) {
    this.sprite.position.x += x;
    this.sprite.position.y += y;
    this.sprite.position.z += z;
  }

  public getPosition(): THREE.Vector3 {
    return this.sprite.position;
  }

  public update(delta: number) {
    this.elapsedTime += delta;

    if (this.maxDisplayTime > 0 && this.elapsedTime >= this.maxDisplayTime) {
      this.elapsedTime = 0;
      this.runningTileArrayIndex =
        (this.runningTileArrayIndex + 1) % this.playSpriteIndices.length;
      this.currentTile = this.playSpriteIndices[this.runningTileArrayIndex];

      const offsetX =
        (this.currentTile % this.tilesHorizontal) / this.tilesHorizontal;
      const offsetY =
        (this.tilesVertical -
          Math.floor(this.currentTile / this.tilesHorizontal) -
          1) /
        this.tilesVertical;

      this.map.offset.x = offsetX;
      this.map.offset.y = offsetY;
    }
  }
}

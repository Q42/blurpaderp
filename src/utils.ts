export class Utils {
  static between(min: number, max: number) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
  }

  static draw(arr: Array<string>) {
    var drawFromArr = arr;
    if (drawFromArr.length == 0)
      return null;
    var drawIndex = Utils.between(0, drawFromArr.length - 1);
    var value = drawFromArr[drawIndex];
    drawFromArr.splice(drawIndex, 1);
    return value;
  }
}
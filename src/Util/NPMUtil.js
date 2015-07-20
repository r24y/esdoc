import path from 'path';
import fs from 'fs-extra';

/**
 * Node Package Manager(npm) util class.
 */
export default class NPMUtil {

  /**
   * find ESDoc package.json object.
   * @returns {Object} package.json object.
   */
  static findPackage() {
    let packageObj = null;
    try {
      let packageFilePath = path.resolve(__dirname, '../../package.json');
      let json = fs.readFileSync(packageFilePath, {encode: 'utf8'});
      packageObj = JSON.parse(json);
    } catch (e) {
      let packageFilePath = path.resolve(__dirname, '../../../package.json');
      let json = fs.readFileSync(packageFilePath, {encode: 'utf8'});
      packageObj = JSON.parse(json);
    }

    return packageObj;
  }
}

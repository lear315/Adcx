/**
 * 游戏管理基类
 * lear
 */

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameManager {

    private static _gameManager: GameManager

    public static get Ins(): GameManager {
        if (!GameManager._gameManager) {
            GameManager._gameManager = new GameManager()
            GameManager._gameManager.init()
        }
        return GameManager._gameManager
    }

    public init() {

    }
}
export let Game: GameManager = GameManager.Ins
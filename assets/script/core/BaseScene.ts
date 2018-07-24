/**
 * 场景基类
 */
import BaseComponent from "./BaseComponent"

const { ccclass, property } = cc._decorator

@ccclass
export default abstract class BaseScene extends BaseComponent {
    constructor() {
        super()
        this.init()
    }

    public init() {

    }
}
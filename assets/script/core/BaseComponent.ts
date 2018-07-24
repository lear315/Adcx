/**
 * 组件基类
 * lear
 */
import { errlog } from "./Tools";
const { ccclass, property } = cc._decorator

@ccclass
export default abstract class BaseComponent extends cc.Component {
    constructor() {
        super()
        this.init()
    }

    public init() {

    }

    /**
     * 获取子节点
     * @param pathName 路径名
     */
    public getChild(pathName: string): cc.Node {
        if (pathName) {
            return cc.find(pathName, this.node)
        } else {
            errlog(`getChild ${pathName} not found`)
        }
    }

    /**
     * 获取子节点组件
     * @param pathName 路径名
     * @param type 组件名
     */
    public getComp<T extends cc.Component>(pathName: string, type: { prototype: T}): T {
        const node = this.getChild(pathName)
        if (!node) {
            return 
        }
        const comp = node.getComponent(type)
        if (!comp) {
            errlog(`getComp ${pathName} not found componment`)
            return
        }
        return comp
    }

    /**
     * 绑定监听
     * @param obj 绑定对象
     * @param callBack 回调事件
     * @param eventType 触控类型（默认点击抬起）
     */
    public bindTouch(obj: cc.Node | cc.Component, callBack: (event: cc.Event.EventCustom) => void, eventType: string = cc.Node.EventType.TOUCH_END) {
        let node = obj instanceof cc.Node ? obj : obj.node 
        if (node) {
            node.on(eventType, callBack, this)
            return node
        }
    }

}
    
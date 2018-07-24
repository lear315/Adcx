/**
 * 工具
 */

export let logState: boolean = true

export function log(content: any, ...subst: any[]){
    if (logState) {
        cc.log(content, ...subst)
    }
}

export function errlog(content: any, ...subst: any[]){
    if (logState) {
        cc.log("ERROR: " + content, ...subst)
    }
}


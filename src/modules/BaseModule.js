export class BaseModule {
    constructor(resizer) {
        this.overlay = resizer.overlay
        this.vid = resizer.vid
        this.options = resizer.options
        this.requestUpdate = resizer.onUpdate
    }
    onCreate = () => {}
    onDestroy = () => {}
    onUpdate = () => {}
}

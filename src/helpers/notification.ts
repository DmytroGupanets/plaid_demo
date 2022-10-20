import Notify from 'simple-notify'
import 'simple-notify/dist/simple-notify.min.css'
import { notifyStatus } from 'simple-notify/dist/types'

export function pushNotify(status: notifyStatus, title: string, text: string) {
    new Notify({
        status,  //'success' | 'warning' | 'error' | 'info'
        title,
        text,
        effect: 'fade',
        speed: 300,
        customClass: null,
        customIcon: null,
        showIcon: true,
        showCloseButton: true,
        autoclose: false,
        autotimeout: 3000,
        gap: 20,
        distance: 20,
        type: 1,
        position: 'right top'
    })
}
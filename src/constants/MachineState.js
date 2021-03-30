import { ThemeColors } from './ThemeColors'

export class MachineState {
    static RUN = { CODE: 10, LABEL: 'Run', COLOR: ThemeColors.run }
    static SETUP = { CODE: 11, LABEL: 'Setup', COLOR: ThemeColors.setup }
    static STOP = { CODE: 20, LABEL: 'Stop', COLOR: ThemeColors.stop }
    static MAN = { CODE: 40, LABEL: 'Man', COLOR: ThemeColors.man }
    static MATERIAL = { CODE: 41, LABEL: 'Material', COLOR: ThemeColors.material }
    static PACKAGE = { CODE: 50, LABEL: 'Package', COLOR: ThemeColors.package }
    static OTHER = { CODE: 30, LABEL: 'Other', COLOR: ThemeColors.other }
    static BREAK = { CODE: 1, LABEL: 'Break', COLOR: ThemeColors.break }
    static OFF = { CODE: 0, LABEL: 'Off', COLOR: ThemeColors.off }
}

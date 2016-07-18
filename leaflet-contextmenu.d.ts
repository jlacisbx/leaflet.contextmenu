declare namespace L {
    export interface contextmenuitem {
        text? :string,
        callback?: any
    }
}

declare namespace L.Map {
    export interface MapOptions {
        contextmenu: boolean,
        contextmenuWidth: number,
        contextmenuItems?: contextmenuitem[]
    }
}
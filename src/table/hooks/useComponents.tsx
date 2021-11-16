import { ComponentsProps } from "../types/ComponentProps.type";


export const defaultComponents: ComponentsProps = {
    table: 'table',
    header: {
        wrapper: 'div',
        thead: 'thead',
        row: 'tr',
        th: 'th',
        cell: 'div'
    },
    body: {
        wrapper: 'div',
        tbody: 'tbody',
        row: 'tr',
        td: 'td',
        cell: 'div'
    }
}

export function useComponent(components: ComponentsProps){
    const _components = defaultComponents;
    return {
        ComponentTable: _components.table,
        ComponentHeaderWrapper: _components.header?.wrapper,
        
    }
}
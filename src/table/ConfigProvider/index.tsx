import { ConfigProviderProps } from "../types/Config.type";
import { createContext } from 'react';


const defaultProps: ConfigProviderProps = {
    prefixCls: 'my'
}

export const ConfigContext = createContext<ConfigProviderProps>({
    ...defaultProps,
    getPrefixCls: (componentName: string, customPrefix: string) => {
        return `${customPrefix || 'my'}-${componentName}`;
    }
})
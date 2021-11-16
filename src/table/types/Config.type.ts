
/**
 * Context配置
 */
export interface ConfigProviderProps {
    /**
     * 生成className前缀
     * @param componentName 组件名称
     * @param customPrefix  自定义前缀
     */
    getPrefixCls?: (componentName: string, customPrefix: string) => string;

    prefixCls?: string;



}
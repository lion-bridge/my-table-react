import React, { ReactNode } from 'react';

type DomEle  = any;
export interface ComponentsProps {
    table?: DomEle;
    header?: {
        wrapper?: DomEle;
        thead?: DomEle;
        row?: DomEle;
        th?: DomEle;
        cell?: DomEle;
    },
    body?: {
        wrapper?: DomEle;
        tbody?: DomEle;
        row?: DomEle;
        td?: DomEle;
        cell?: DomEle;
    }
}
import React, { ReactNode } from 'react';
export interface ComponentsProps {
    table?: ReactNode;
    header?: {
        wrapper?: ReactNode;
        thead?: ReactNode;
        row?: ReactNode;
        th?: ReactNode;
        cell?: ReactNode;
    },
    body?: {
        wrapper?: ReactNode;
        tbody?: ReactNode;
        row?: ReactNode;
        td?: ReactNode;
        cell?: ReactNode;
    }
}
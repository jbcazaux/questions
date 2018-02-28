import * as React from 'react';

interface HelloProps {
    readonly name: string;
}

export const Hello = (props: HelloProps) => <h1>Hello {props.name}!</h1>;

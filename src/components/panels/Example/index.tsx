import * as React from "react";
import { Panel, PanelHeader, } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

import ExampleBlock from "@/components/blocks/Example";
import "./styles.scss";

interface IProps {
    id: string;
    text?: string;
    title?: string;
    buttonText?: string;
    onButtonClick: (...args) => any;
}

export default ({ id, ...props }: IProps) => (
    <Panel id={id}>
        <PanelHeader noShadow>HSE APP</PanelHeader>
        <ExampleBlock {...props}/>
    </Panel>
);

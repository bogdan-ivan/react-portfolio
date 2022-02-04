import React, { useState } from 'react'

interface Person {
    n1: string;
    n2: string;
}

interface Props {
    text: string;
    ok?: boolean;
    i?: number;
    fn?: (bob: string) => string;
    obj?: {
        f1: string
    }
    pers?: Person
}

interface TextNode {
    text: string
}

const TextField: React.FC<Props> = ({ text, ok }) => {
    const [count, setCount] = useState<number | null>(5);
    const [title, setTitle] = useState<TextNode>({ text: 'yes' });

    setCount(null);

    return (
        <div>

        </div>
    )
}

export default TextField

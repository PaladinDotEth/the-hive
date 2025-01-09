import React from 'react';


import ToolCard from '../../tool-card';

import StakeCallBody from './stake-call-body';
import StakeResult from './stake-result';

import type { StakeResultType, StakeArgumentsType } from '@/ai';
import type { ToolInvocation } from 'ai';

interface Props {
    tool: ToolInvocation,
    prevToolAgent?: string,
}

const Stake: React.FC<Props> = ({ tool, prevToolAgent }) => {
    return (
        <ToolCard 
            tool={tool}
            loadingText="Staking..."
            result={{
                heading: (result: StakeResultType) => result.body 
                    ? "Stake Complete"
                    : "Failed to Stake",
                body: (result: StakeResultType) => result.body 
                    ? <StakeResult amount={tool.args.amount} stakeResult={result.body} />
                    : result.message
            }}
            call={{
                heading: "Stake",
                body: (toolCallId: string, args: StakeArgumentsType) => (
                    <StakeCallBody toolCallId={toolCallId} args={args} />
                )
            }}
            defaultOpen={true}
            prevToolAgent={prevToolAgent}
        />
    );
};

export default Stake; 
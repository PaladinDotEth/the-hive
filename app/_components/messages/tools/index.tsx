'use client'

import React from 'react'

import {
    Balance,
    GetWalletAddress,
    GetDomain,
    RequestFunds,
    GetTrendingTokens,
    GetTokenData,
    Trade
} from './solana'

import { 
    SOLANA_BALANCE_NAME,
    SOLANA_GET_WALLET_ADDRESS_NAME,
    SOLANA_GET_DOMAIN_NAME,
    SOLANA_REQUEST_FUNDS_NAME,
    SOLANA_GET_TRENDING_TOKENS_NAME,
    SOLANA_GET_TOKEN_DATA_NAME,
    SOLANA_TRADE_NAME,
} from '@/agentkit/actions/solana/names'

import {
    TWITTER_SEARCH_RECENT_NAME
} from '@/agentkit/actions/twitter/names'

import type { ToolInvocation as ToolInvocationType } from 'ai'
import { SearchRecentTweets } from './twitter'

interface Props {
    tool: ToolInvocationType
}

const ToolInvocation: React.FC<Props> = ({ tool }) => {
    
    switch(tool.toolName) {
        case SOLANA_BALANCE_NAME:
            return <Balance tool={tool} />
        case SOLANA_GET_WALLET_ADDRESS_NAME:
            return <GetWalletAddress tool={tool} />
        case SOLANA_GET_DOMAIN_NAME:
            return <GetDomain tool={tool} />
        case SOLANA_REQUEST_FUNDS_NAME:
            return <RequestFunds tool={tool} />
        case SOLANA_GET_TRENDING_TOKENS_NAME:
            return <GetTrendingTokens tool={tool} />
        case SOLANA_GET_TOKEN_DATA_NAME:
            return <GetTokenData tool={tool} />
        case SOLANA_TRADE_NAME:
            return <Trade tool={tool} />
        case TWITTER_SEARCH_RECENT_NAME:
            return <SearchRecentTweets tool={tool} />
        default:
            return (
                <pre className="whitespace-pre-wrap">
                    {JSON.stringify(tool, null, 2)}
                </pre>
            );
    }
}

export default ToolInvocation
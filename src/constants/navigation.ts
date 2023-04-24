
export const NAV_LINKS = [
    {label: 'match', target: '/match'},
    {label: 'tour', target: '/tour'},
    {label: 'dating advice', target: '/advice'},
]

export const FOOTER_LINKS = [
    {title: 'overview', links: [
        {label: 'chatt', target: '/about'},
		{label: 'careers', target: '/'},
		{label: 'developers', target: '/docs' },
    ]},
    {title: 'support', links: [
        {label: 'contact', target: '/contact'},
        {label: 'security', target: '/'},
    ]},
    {title: 'resources', links: [
        {label: 'privacy policy', target: '/'},
        {label: 'terms & conditions', target: '/'},
        {label: 'cookies', target: '/'},
    ]},
]

export const DOCUMENTATION = [
    {title: 'guides', tabs: [
        {label: 'identity', description: 'how Chatt handles identity', target: '/docs'},
        {label: 'repos', description: 'a guide to Chatt repositories', target: '/docs'},
        {label: 'integrations', description: 'how you can use Chatt with other application', target: '/docs'},
        {label: 'faq', description: 'frequently asked questions about Chatt', target: '/docs'},
    ]},
    {title: 'specs', tabs: [
        {label: 'chatt', description: 'the specification for the Chatt app.', target: '/docs'},
    ]},
]
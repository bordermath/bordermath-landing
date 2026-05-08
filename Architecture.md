src/
├── auth/
│ ├── google.strategy.ts
│ ├── jwt.strategy.ts
│ └── auth.service.ts
│
├── user/
│ ├── user.model.ts
│ └── user.service.ts
│
├── itinerary/
│ ├── itinerary.model.ts
│ ├── itinerary.service.ts
│ └── itinerary.controller.ts
│
├── analysis/
│ ├── schengen-calculator.ts ← règle 90/180j
│ ├── visa-checker.ts ← règle visa par passeport
│ ├── bilateral-agreements.ts ← accords spéciaux
│ ├── context-mapper.ts ← contexte → documents requis
│ └── analysis.service.ts ← orchestre les 4 couches
│
├── chat/
│ ├── chat.service.ts ← gère le contexte de conversation
│ ├── llm.service.ts ← appels Claude/GPT-4
│ └── chat.controller.ts
│
├── alerts/
│ ├── alert.service.ts
│ ├── email.service.ts
│ └── push.service.ts
│
├── data/
│ ├── visa-rules.json ← base statique des règles
│ └── bilateral.json ← accords bilatéraux
│
└── common/
├── guards/ ← auth guards
├── middleware/
└── types/ ← interfaces TypeScript partagées

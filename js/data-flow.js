window.DATA = window.DATA || {};

DATA.flows = [
  {
    id: "general",
    title: "Case interview flow",
    note: "The generic path from problem to recommendation. Use it as a checklist: clarify, structure, segment, find the driver, quantify, then recommend.",
    code: `flowchart TD

A[Start: Understand Problem] --> B[Clarify Goal & Metric]
B --> C[Define Scope: Time, Segment, Geography]

C --> D[Break Problem Structure]
D --> E[Revenue = Price × Volume]
D --> F[Costs = Fixed + Variable]

E --> G[Volume = Customers × Usage]

G --> H[Segment the Problem]
H --> H1[Customer]
H --> H2[Product]
H --> H3[Channel]
H --> H4[Geography]
H --> H5[Time]

H --> I[Identify Key Driver]

I --> J{Driver Type?}

J --> K[Revenue Issue]
J --> L[Cost Issue]
J --> M[Capacity Issue]

K --> N[Price vs Volume Analysis]
L --> O[Fixed vs Variable Cost]
M --> P[Capacity = Units × Cycles]

N --> Q[Quantify Impact]
O --> Q
P --> Q

Q --> R[Estimate Financial Impact]

R --> S[Develop Solutions]

S --> T1[Increase Revenue]
S --> T2[Reduce Costs]
S --> T3[Improve Efficiency]

T1 --> U[Pricing / Demand / Marketing]
T2 --> V[Cost Optimization]
T3 --> W[Operational Improvements]

U --> X[Final Recommendation]
V --> X
W --> X

X --> Y[Next Steps & Risks]
Y --> Z[End]

%% Color classes

classDef start fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;
classDef structure fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;
classDef segment fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#E65100;
classDef decision fill:#FCE4EC,stroke:#D81B60,stroke-width:2px,color:#000;
classDef calc fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;
classDef solution fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;
classDef endNode fill:#ECEFF1,stroke:#546E7A,stroke-width:2px,color:#000;

%% Apply classes

class A,B,C start;
class D,E,F,G structure;
class H,H1,H2,H3,H4,H5,I segment;
class J,K,L,M decision;
class N,O,P,Q,R calc;
class S,T1,T2,T3,U,V,W solution;
class X,Y,Z endNode;
`
  },
  {
    id: "example",
    title: "Case flow with a worked example",
    note: "The same logic applied to a profit decline. Illustrative numbers only.",
    code: `flowchart TD

A[Start: Profit Down] --> B[Clarify Metric]
B --> C[Profit = Revenue - Costs]

C --> D[Break Revenue]
D --> E[Revenue = Price × Volume]

E --> F[Old: $50 × 1000 = $50,000]
E --> G[New: $50 × 800 = $40,000]

F --> H[Revenue Drop = $10,000]
G --> H

H --> I[Check Volume Drop]

I --> J[Volume = Market × Share]

J --> K[Market = 10,000]
J --> L[Old Share = 10% → 1,000 customers]
J --> M[New Share = 8% → 800 customers]

L --> N[Lost Customers = 200]
M --> N

N --> O[Lost Revenue = 200 × $50 = $10,000]

O --> P{Driver?}

P --> Q[Demand Drop]
P --> R[Competition]
P --> S[Capacity Issue]

Q --> T[Marketing ↓ or Seasonality]
R --> U[Competitor Pricing Lower]
S --> V[Supply Constraints]

T --> W[Quantify Impact]
U --> W
V --> W

W --> X[Solution]

X --> Y1[Increase Marketing → +100 customers]
X --> Y2[Reduce Price to $48 → regain share]
X --> Y3[Add Capacity if constrained]

Y1 --> Z[+ $5,000 Revenue]
Y2 --> Z
Y3 --> Z

Z --> AA[Final Recommendation]

AA --> AB[Focus: regain 200 customers → +$10K revenue]

%% Color classes

classDef start fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;
classDef structure fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;
classDef calc fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;
classDef decision fill:#FCE4EC,stroke:#D81B60,stroke-width:2px,color:#000;
classDef solution fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;
classDef endNode fill:#ECEFF1,stroke:#546E7A,stroke-width:2px,color:#000;

%% Apply classes

class A,B start;
class C,D,E structure;
class F,G,H,J,K,L,M,N,O,W calc;
class P,Q,R,S decision;
class X,Y1,Y2,Y3 solution;
class AA,AB endNode;
`
  }
];

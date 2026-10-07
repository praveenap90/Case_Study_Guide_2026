window.DATA = window.DATA || {};

DATA.flows = [
  {
    id: "general",
    title: "Case interview flow",
    note: "The generic path from problem to recommendation. Use it as a checklist: clarify, structure, segment, find the driver, quantify, then recommend.",
    code: `flowchart TD
A["C: Clarify<br/>Understand the problem<br/>Goal and metric"]
A --> B["Define the scope<br/>Time, segment, geography"]
B --> D["L: Lay out the structure"]
D --> E["Revenue<br/>Price x Volume"]
D --> G["Volume<br/>Customers x Usage"]
D --> F["Costs<br/>Fixed + Variable"]
E --> EV
G --> EV
F --> EV
EV["E: Evaluate<br/>Segment the problem"]
EV --> H1["Customer"]
EV --> H2["Product"]
EV --> H3["Channel"]
EV --> H4["Geography"]
EV --> H5["Time"]
H1 --> I
H2 --> I
H3 --> I
H4 --> I
H5 --> I
I["Find the key driver<br/>Which segment explains most of the change?"]
I --> J["What type of driver?"]
J --> K["Revenue issue<br/>Price vs volume<br/>analysis"]
J --> L["Cost issue<br/>Fixed vs variable<br/>costs"]
J --> M["Capacity issue<br/>Capacity =<br/>Units x Cycles"]
K --> Q
L --> Q
M --> Q
Q["A: Assess<br/>Quantify the impact<br/>Estimate it in dollars"]
Q --> S["Develop solutions"]
S --> T1["Increase revenue<br/>Pricing, demand,<br/>marketing"]
S --> T2["Reduce costs<br/>Cost optimization"]
S --> T3["Improve efficiency<br/>Operational<br/>improvements"]
T1 --> X
T2 --> X
T3 --> X
X["R: Recommend<br/>Answer first, then reasons"]
X --> Y["Next steps and risks"]
classDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;
classDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;
classDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;
classDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;
classDef c5 fill:#FFFDE7,stroke:#F9A825,stroke-width:2px,color:#000;
classDef c6 fill:#FCE4EC,stroke:#D81B60,stroke-width:2px,color:#000;
classDef c7 fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;
class A,B,Y c1;
class D,E,G,F c2;
class EV c3;
class H1,H2,H3,H4,H5,I c5;
class J,K,L,M c6;
class Q c4;
class S,T1,T2,T3 c7;
class X c1;
`
  },
  {
    id: "example",
    title: "Case flow with a worked example",
    note: "The same logic applied to a profit decline. Illustrative numbers only.",
    code: `flowchart TD
A["C: Clarify<br/>Profit is down<br/>Profit = Revenue - Costs"]
A --> B["Start with revenue<br/>Revenue = Price x Volume"]
B --> E["E: Evaluate<br/>Compare old and new"]
E --> F["Old<br/>$50 x 1,000<br/>= <b>$50,000</b>"]
E --> G["New<br/>$50 x 800<br/>= <b>$40,000</b>"]
E --> H["Change<br/>Price is flat<br/>Revenue down <b>$10,000</b>"]
F --> I
G --> I
H --> I
I["Volume is the problem<br/>Volume = Market x Share"]
I --> K["Market<br/><b>10,000</b> customers<br/>(unchanged)"]
I --> L["Old share<br/>10% x 10,000<br/>= <b>1,000</b> customers"]
I --> M["New share<br/>8% x 10,000<br/>= <b>800</b> customers"]
K --> N
L --> N
M --> N
N["A: Assess<br/>Lost customers = <b>200</b><br/>200 x $50 = <b>$10,000</b>"]
N --> P["What is the driver?"]
P --> Q["Demand drop<br/>Less marketing<br/>or seasonality"]
P --> R["Competition<br/>A rival prices lower"]
P --> S["Capacity<br/>Supply constraints"]
Q --> X
R --> X
S --> X
X["Quantify each fix"]
X --> Y1["More marketing<br/>+100 customers x $50<br/>= <b>+$5,000</b>"]
X --> Y2["Cut price to $48<br/>1,000 x $48 - $40,000<br/>= <b>+$8,000</b>"]
X --> Y3["Add capacity<br/>If supply is the limit<br/>up to <b>+$10,000</b>"]
Y1 --> AA
Y2 --> AA
Y3 --> AA
AA["R: Recommend<br/>Focus on winning back the 200 customers<br/>Worth about <b>$10,000</b> of revenue"]
classDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;
classDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;
classDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;
classDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;
classDef c5 fill:#FFFDE7,stroke:#F9A825,stroke-width:2px,color:#000;
classDef c6 fill:#FCE4EC,stroke:#D81B60,stroke-width:2px,color:#000;
classDef c7 fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;
class A c1;
class B,I c2;
class E c3;
class F,G,H,K,L,M c5;
class N c4;
class P,Q,R,S c6;
class X,Y1,Y2,Y3 c7;
class AA c1;
`
  }
];

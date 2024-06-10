export interface Company {
  id: number;
  name: string;
}

export interface Message {
  id: number;
  subject: string;
  sender: string;
  company: Company;
  messageType: string;
  status: string;
  content: string;
  priority?: string;
  assignedTo?: string;
  conversation?: {
    sender: string;
    message: string;
    timestamp: string;
  }[];
}

const messages: Message[] = [
  {
    id: 1,
    subject: "Probléma az alkalmazásban",
    sender: "Kovács János",
    company: { id: 123, name: "ABC Company" },
    messageType: "technikai",
    status: "olvasatlan",
    content: "Ez egy technikai probléma az alkalmazásban...",
  },
  {
    id: 2,
    subject: "Kérdés a szolgáltatásról",
    sender: "Nagy Edit",
    company: { id: 456, name: "XYZ Corporation" },
    messageType: "kérdés",
    status: "olvasott",
    content: "Ez egy kérdés a szolgáltatásunkról...",
    conversation: [
      {
        sender: "Support Team",
        message: "Üdvözlöm! Miben segíthetünk?",
        timestamp: "2024-05-01 10:00",
      },
      {
        sender: "Nagy Edit",
        message:
          "Szeretném tudni, hogy mikor lesz elérhető a szolgáltatás új verziója?",
        timestamp: "2024-05-01 10:05",
      },
      {
        sender: "Support Team",
        message: "A következő verzió júniusban várható.",
        timestamp: "2024-05-01 10:10",
      },
    ],
  },
  {
    id: 3,
    subject: "Javaslat a felhasználói felületre",
    sender: "Tóth Péter",
    company: { id: 789, name: "DEF Ltd." },
    messageType: "fejlesztési igény",
    status: "olvasott",
    content: "Ez egy javaslat a felhasználói felület fejlesztésére...",
    conversation: [
      {
        sender: "Support Team",
        message: "Köszönjük a javaslatot! Milyen változtatásokat javasol?",
        timestamp: "2024-05-02 09:00",
      },
      {
        sender: "Tóth Péter",
        message:
          "A menü struktúráján lehetne javítani, hogy könnyebben lehessen navigálni.",
        timestamp: "2024-05-02 09:15",
      },
      {
        sender: "Support Team",
        message: "Megfontoljuk a javaslatát, köszönjük!",
        timestamp: "2024-05-02 09:30",
      },
    ],
  },
  {
    id: 4,
    subject: "Bejelentés rendszerhibáról",
    sender: "Szabó Anna",
    company: { id: 101, name: "GHI Inc." },
    messageType: "rendszermeghibásodás",
    status: "olvasatlan",
    content: "Ez egy bejelentés egy rendszerhibáról...",
  },
  {
    id: 5,
    subject: "Új funkciók igénylése",
    sender: "Kiss Gergő",
    company: { id: 112, name: "JKL Enterprises" },
    messageType: "fejlesztési igény",
    status: "olvasott",
    content: "Ez egy igénylés új funkciók bevezetésére...",
    conversation: [
      {
        sender: "Support Team",
        message:
          "Köszönjük, hogy felvette velünk a kapcsolatot! Milyen funkciókra lenne szüksége?",
        timestamp: "2024-05-03 11:00",
      },
      {
        sender: "Kiss Gergő",
        message: "Jó lenne, ha lenne egy sötét mód az alkalmazásban.",
        timestamp: "2024-05-03 11:15",
      },
      {
        sender: "Support Team",
        message: "Jelezzük a fejlesztő csapatnak. Köszönjük az ötletet!",
        timestamp: "2024-05-03 11:30",
      },
    ],
  },
  {
    id: 6,
    subject: "Nem működik a belépés",
    sender: "Horváth László",
    company: { id: 134, name: "MNOP Corp." },
    messageType: "technikai",
    status: "olvasatlan",
    content: "Nem tudok belépni az alkalmazásba...",
  },
  {
    id: 7,
    subject: "Kérésem van a szolgáltatással kapcsolatban",
    sender: "Szilágyi Éva",
    company: { id: 246, name: "QRS Ltd." },
    messageType: "kérdés",
    status: "olvasott",
    content: "Szeretnék egy kérdést feltenni a szolgáltatásról...",
    conversation: [
      {
        sender: "Support Team",
        message: "Szívesen válaszolunk a kérdésére. Miben segíthetünk?",
        timestamp: "2024-05-04 13:00",
      },
      {
        sender: "Szilágyi Éva",
        message:
          "Milyen új szolgáltatások várhatóak az elkövetkező hónapokban?",
        timestamp: "2024-05-04 13:05",
      },
      {
        sender: "Support Team",
        message:
          "Több új funkció is érkezik, részleteket hamarosan megosztunk.",
        timestamp: "2024-05-04 13:10",
      },
    ],
  },
  {
    id: 8,
    subject: "Fejlesztési ötlet",
    sender: "Varga Attila",
    company: { id: 357, name: "TUV Kft." },
    messageType: "fejlesztési igény",
    status: "olvasott",
    content: "Van egy fejlesztési ötletem az alkalmazáshoz...",
    conversation: [
      {
        sender: "Support Team",
        message: "Köszönjük az ötletét! Milyen fejlesztésre gondolt?",
        timestamp: "2024-05-05 14:00",
      },
      {
        sender: "Varga Attila",
        message: "Lehetne integrálni egy naptár funkciót az alkalmazásba.",
        timestamp: "2024-05-05 14:10",
      },
      {
        sender: "Support Team",
        message: "Nagyszerű ötlet! Továbbítjuk a fejlesztő csapatnak.",
        timestamp: "2024-05-05 14:20",
      },
    ],
  },
  {
    id: 9,
    subject: "Új funkció javaslat",
    sender: "Németh Zoltán",
    company: { id: 468, name: "WXYZ Inc." },
    messageType: "fejlesztési igény",
    status: "olvasott",
    content: "Javaslatom van egy új funkció bevezetésére...",
    conversation: [
      {
        sender: "Support Team",
        message: "Köszönjük a javaslatot! Milyen új funkciót szeretne látni?",
        timestamp: "2024-05-06 15:00",
      },
      {
        sender: "Németh Zoltán",
        message:
          "Jó lenne, ha lenne egy automatikus biztonsági mentés funkció.",
        timestamp: "2024-05-06 15:10",
      },
      {
        sender: "Support Team",
        message: "Kiváló ötlet! Értesítjük a fejlesztő csapatot.",
        timestamp: "2024-05-06 15:20",
      },
    ],
  },
  {
    id: 10,
    subject: "Probléma a fizetéssel",
    sender: "Török Zsuzsa",
    company: { id: 579, name: "123 Enterprises" },
    messageType: "technikai",
    status: "olvasatlan",
    content: "Problémám van a fizetéssel...",
  },
  {
    id: 11,
    subject: "Felhasználói élmény javítása",
    sender: "Kovács Dávid",
    company: { id: 681, name: "ABC Ltd." },
    messageType: "fejlesztési igény",
    status: "olvasott",
    content: "Szeretnék javaslatot tenni a felhasználói élmény javítására...",
    conversation: [
      {
        sender: "Support Team",
        message:
          "Köszönjük, hogy megosztja velünk a javaslatát! Mit javasolna?",
        timestamp: "2024-05-07 16:00",
      },
      {
        sender: "Kovács Dávid",
        message:
          "Jobb navigációs élményt és gyorsabb betöltési időt szeretnék.",
        timestamp: "2024-05-07 16:10",
      },
      {
        sender: "Support Team",
        message: "Köszönjük az észrevételét, dolgozni fogunk rajta!",
        timestamp: "2024-05-07 16:20",
      },
    ],
  },
  {
    id: 12,
    subject: "Szolgáltatás kérdés",
    sender: "Farkas Kata",
    company: { id: 792, name: "XYZ Company" },
    messageType: "kérdés",
    status: "olvasott",
    content: "Kérdésem van a szolgáltatással kapcsolatban...",
    conversation: [
      {
        sender: "Support Team",
        message: "Szívesen segítünk. Mi a kérdése?",
        timestamp: "2024-05-08 17:00",
      },
      {
        sender: "Farkas Kata",
        message: "Hogyan tudom lemondani az előfizetésemet?",
        timestamp: "2024-05-08 17:10",
      },
      {
        sender: "Support Team",
        message:
          "Az előfizetés lemondásához látogasson el a fiókbeállítások oldalra.",
        timestamp: "2024-05-08 17:20",
      },
    ],
  },
  {
    id: 13,
    subject: "Jelentés egy hibáról",
    sender: "Oláh Ferenc",
    company: { id: 903, name: "DEF Ltd." },
    messageType: "rendszermeghibásodás",
    status: "olvasatlan",
    content: "Jelenteni szeretnék egy hibát az alkalmazásban...",
  },
  {
    id: 14,
    subject: "Kérdés a funkcióról",
    sender: "Nagy Mária",
    company: { id: 104, name: "GHI Corporation" },
    messageType: "kérdés",
    status: "olvasott",
    content: "Kérdésem van egy konkrét funkcióval kapcsolatban...",
    conversation: [
      {
        sender: "Support Team",
        message: "Szívesen válaszolunk. Melyik funkció érdekli?",
        timestamp: "2024-05-09 18:00",
      },
      {
        sender: "Nagy Mária",
        message: "Az új export funkcióval kapcsolatban lenne kérdésem.",
        timestamp: "2024-05-09 18:10",
      },
      {
        sender: "Support Team",
        message:
          "Az export funkcióval kapcsolatos információkat a súgóban találja.",
        timestamp: "2024-05-09 18:20",
      },
    ],
  },
  {
    id: 15,
    subject: "Új javaslat a UI-hoz",
    sender: "Tóth István",
    company: { id: 215, name: "JKL Inc." },
    messageType: "fejlesztési igény",
    status: "olvasott",
    content: "Van egy javaslatom a felhasználói felülethez...",
    conversation: [
      {
        sender: "Support Team",
        message: "Köszönjük a javaslatot! Milyen módosításokat javasol?",
        timestamp: "2024-05-10 19:00",
      },
      {
        sender: "Tóth István",
        message:
          "A gombok elhelyezkedése lehetne logikusabb és könnyebben elérhető.",
        timestamp: "2024-05-10 19:10",
      },
      {
        sender: "Support Team",
        message: "Megvizsgáljuk a javaslatát, köszönjük!",
        timestamp: "2024-05-10 19:20",
      },
    ],
  },
  {
    id: 16,
    subject: "Technikai probléma jelentése",
    sender: "Kiss Julianna",
    company: { id: 326, name: "MNO Ltd." },
    messageType: "technikai",
    status: "olvasatlan",
    content: "Szeretnék jelenteni egy technikai problémát...",
  },
  {
    id: 17,
    subject: "Szolgáltatás értékelés",
    sender: "Balogh András",
    company: { id: 437, name: "PQR Enterprises" },
    messageType: "kérdés",
    status: "olvasott",
    content: "Értékelést szeretnék adni a szolgáltatásról...",
    conversation: [
      {
        sender: "Support Team",
        message:
          "Köszönjük, hogy értékelni szeretné szolgáltatásunkat. Hogyan segíthetünk?",
        timestamp: "2024-05-11 20:00",
      },
      {
        sender: "Balogh András",
        message: "Nagyon elégedett vagyok, de lenne pár javaslatom.",
        timestamp: "2024-05-11 20:10",
      },
      {
        sender: "Support Team",
        message: "Örömmel fogadjuk a javaslatait. Kérem, ossza meg velünk!",
        timestamp: "2024-05-11 20:20",
      },
    ],
  },
  {
    id: 18,
    subject: "Rendszerhiba bejelentése",
    sender: "Szabó Réka",
    company: { id: 548, name: "STU Corp." },
    messageType: "rendszermeghibásodás",
    status: "olvasatlan",
    content: "Be szeretném jelenteni a rendszerhibát...",
  },
  {
    id: 19,
    subject: "Új szolgáltatás javaslat",
    sender: "Takács Géza",
    company: { id: 659, name: "VWXYZ Ltd." },
    messageType: "fejlesztési igény",
    status: "olvasott",
    content: "Javaslatom van egy új szolgáltatás bevezetésére...",
    conversation: [
      {
        sender: "Support Team",
        message:
          "Köszönjük, hogy javaslatot küldött! Milyen új szolgáltatásra gondolt?",
        timestamp: "2024-05-12 21:00",
      },
      {
        sender: "Takács Géza",
        message: "Javaslom egy AI alapú ajánlórendszer bevezetését.",
        timestamp: "2024-05-12 21:10",
      },
      {
        sender: "Support Team",
        message: "Ez egy érdekes ötlet. Továbbítjuk a fejlesztő csapatnak.",
        timestamp: "2024-05-12 21:20",
      },
    ],
  },
  {
    id: 20,
    subject: "Probléma a bejelentkezéssel",
    sender: "Székely Zoltán",
    company: { id: 760, name: "123 Kft." },
    messageType: "technikai",
    status: "olvasatlan",
    content: "Nem tudok bejelentkezni az alkalmazásba...",
  },
  {
    id: 21,
    subject: "Felhasználói felület javaslat",
    sender: "Varga László",
    company: { id: 871, name: "ABC Corporation" },
    messageType: "fejlesztési igény",
    status: "olvasott",
    content: "Van egy javaslatom a felhasználói felület fejlesztésére...",
    conversation: [
      {
        sender: "Support Team",
        message: "Köszönjük a javaslatot! Milyen változtatásokat javasolna?",
        timestamp: "2024-05-13 22:00",
      },
      {
        sender: "Varga László",
        message:
          "A felhasználói felület színein és elrendezésén lehetne javítani.",
        timestamp: "2024-05-13 22:10",
      },
      {
        sender: "Support Team",
        message: "Továbbítjuk a javaslatát a fejlesztő csapatnak. Köszönjük!",
        timestamp: "2024-05-13 22:20",
      },
    ],
  },
  {
    id: 22,
    subject: "Kérdés a fizetéssel kapcsolatban",
    sender: "Kovács Tamás",
    company: { id: 982, name: "XYZ Ltd." },
    messageType: "kérdés",
    status: "olvasott",
    content: "Kérdésem van a fizetési folyamatról...",
    conversation: [
      {
        sender: "Support Team",
        message:
          "Szívesen segítünk a fizetési folyamattal kapcsolatban. Mi a kérdése?",
        timestamp: "2024-05-14 23:00",
      },
      {
        sender: "Kovács Tamás",
        message: "Hogyan tudok számlát kérni a fizetésről?",
        timestamp: "2024-05-14 23:10",
      },
      {
        sender: "Support Team",
        message:
          "A számlát a fiókjában az előfizetések résznél tudja letölteni.",
        timestamp: "2024-05-14 23:20",
      },
    ],
  },
  {
    id: 23,
    subject: "Technikai támogatás",
    sender: "Molnár Gábor",
    company: { id: 109, name: "DEF Company" },
    messageType: "technikai",
    status: "olvasatlan",
    content: "Technikai támogatást szeretnék kérni...",
  },
];

export default messages;

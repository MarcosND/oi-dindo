import { Ong } from "./ong";

import FiloBanner from "../images/ong_banner.png";
import FiloLogo from "../images/ong_image.png";
import FiloDourado from "../images/Dourado.png";
import FiloLiz from "../images/Liz.png";

import MundoBanner from "../images/MundoMarley.png";
import MarleyLogo from "../images/MarleyLogo.jpg";
import MundoPeludo from "../images/Peludo.png";
import MundoLuna from "../images/Luna.png";

export const Ongs: Ong[] = [
  {
    id: 1,
    name: "Cantinho da Filó",
    description:
      "Nosso trabalho consiste em acolher e abrigar temporariamente Cães e Gatos em situação de rua (abandonados). Esse trabalho só é possível com a ajuda de alguns parceiros que custeiam nossos hóspedes até que sejam adotados, por isso sua ajuda é muito importante para nós.",
    phone: "(81) 98649-1699",
    email: "contato@cantinhodafilo.com.br",
    facebook: "https://www.facebook.com/cantinhofiloong",
    instagram: "https://www.instagram.com/cantinhofilo/",
    address: "Rua Juarez Carvalho, 470, Imbiribeira, Recife - PE",
    logo: FiloLogo,
    banner: FiloBanner,
    current_goal: 1246.9,
    money_goal: 2000,
    faq: [
      {
        question: "Quantos animais vocês estão abrigando?",
        answer: "No momento estamos cuidando de 25 gatos e 10 cachorrinhos",
      },
      {
        question: "Há quanto tempo a ONG funciona?",
        answer: "Funcionamos desde 2016",
      },
      {
        question: "Vocês aceitam quais tipos de doação?",
        answer:
          "Qualquer ajuda é bem vinda, as doações mais comuns são de pacotes de ração e ajuda veterinária.",
      },
    ],
    pets: [
      {
        id: 11,
        name: "Dourado",
        weight: 7,
        age: 5,
        description: `Meu nome é Dourado e fui encontrado no lixo, desde então tenho lutado para sobreviver nas ruas.
        Não é fácil ser um gatinho de rua, especialmente quando você é sério e desconfiado como eu. 
        Mas, mesmo com todas as dificuldades que enfrento, mantenho minha determinação e força. 
        Sou um gatinho forte e corajoso, e não desisto facilmente. 
        Apesar da minha aparência séria, eu tenho um coração muito carinhoso e carente de amor. 
        Eu adoro receber carinho na barriga e nos ouvidos, e quando me sinto seguro, gosto de brincar com bolinhas e brinquedos.`,
        totalValue: 186.7,
        valueEarned: 30.92,
        photo: FiloDourado,
        sex: "Masculino",
      },
      {
        id: 12,
        name: "Liz",
        weight: 6,
        age: 7,
        description:
          "Meu nome é Liz e eu sou uma gatinha de rua que teve uma vida muito difícil. Eu fui abandonada e, além disso, sou cega de um olho, o que torna tudo ainda mais difícil para mim. Por causa das coisas que passei, eu sou uma gatinha muito assustada e desconfiada. Mas, quando ganho confiança, sou uma gatinha muito meiga e adoro receber carinho na cabeça e na barriga. Além disso, eu sou muito tranquila e gosto de ficar em lugares calmos e aconchegantes.",
        totalValue: 192.7,
        valueEarned: 110.2,
        photo: FiloLiz,
        sex: "Feminino",
      },
    ],
  },
  {
    id: 2,
    name: "Abrigo Mundo do Marley",
    description:
      "O Mundo do Marley é um abrigo de animais retirados das ruas, vítimas de maus tratos e abandono. O abrigo tem uma equipe dedicada com oferece um atendimento acolhedor, com responsabilidade e muito cuidado. Além de muito amor e carinho, os peludos são bem alimentados, vacinados, vermifugados, e castrados quando as condições financeiras permitem.",
    phone: "(81) 98995-0128",
    email: "",
    facebook: "",
    instagram: "https://www.instagram.com/mundo.domarley/",
    address:
      "Av. Batalha do Tuiuti, Águas compridas, 1228 - Bloco A, Imbiribeira, Olinda - PE",
    logo: MarleyLogo,
    banner: MundoBanner,
    current_goal: 1710.2,
    money_goal: 3000,
    faq: [
      {
        question:
          "Vocês aceitam doações de alimentos e outros suprimentos para os animais?",
        answer:
          "Sim! Qualquer ajuda é bem-vinda, desde pacotes de ração até consultas vetererinárias por um baixo custo. Pode entrar em contato com a gente pelo instagram pra mais informações. ",
      },
      {
        question: "Como são escolhidos os voluntários que trabalham com vocês?",
        answer:
          "Os voluntários do nosso abrigo passam por uma entrevista e, se tiver um perfil que se encaixe nas nossas necessidades, passa por um treinamento básico para que possa trabalhar com os outros voluntários.",
      },
      {
        question: "Quantos animais vocês estão abrigando?",
        answer: "No momento estamos cuidadando de 40 cachorrinhos e 20 gatos.",
      },
      {
        question: "Há quanto tempo a ONG funciona?",
        answer: "Estamos ajudando animais há 4 anos.",
      },
      {
        question:
          "Por onde posso acompanhar a prestação de contas do dinheiro arrecadado?",
        answer:
          "Toda a prestação de contas é feita nos posts e storys do nosso instagram.",
      },
    ],
    pets: [
      {
        id: 21,
        name: "Peludo",
        weight: 11,
        age: 4,
        description: `Olá, eu sou o Peludo, um cachorro de rua velhinho. Eu passei muitos anos perambulando pelas ruas, enfrentando desafios e buscando abrigo e comida onde podia.
        Apesar de já ter vivido muitas coisas, ainda sou um cachorro amoroso e fiel, e adoro receber carinho e atenção. Eu posso não ser tão ágil como antes, e às vezes sinto dores no corpo, mas isso não me impede de continuar amando e acreditando nas pessoas.`,
        totalValue: 271.0,
        valueEarned: 48.5,
        photo: MundoPeludo,
        sex: "Masculino",
      },
      {
        id: 22,
        name: "Luna",
        weight: 2,
        age: 2,
        description: `Olá, eu sou a Luna! Sou uma cachorrinha muito ativa e curiosa, gosto de explorar tudo ao meu redor e brincar com tudo o que vejo pela frente. Quando estou animada, adoro correr de um lado para o outro e pular, e às vezes acabo quebrando algumas coisas.
          Eu sei que posso ser um pouco desajeitada e bagunceira, mas prometo que vou compensar tudo isso com meu amor e alegria. Se você está procurando uma cachorrinha cheia de energia e amor para dar, eu sou a escolha certa!`,
        totalValue: 189.9,
        valueEarned: 153.18,
        photo: MundoLuna,
        sex: "Feminino",
      },
    ],
  },
];

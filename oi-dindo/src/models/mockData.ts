import { Ong } from "./ong";

import FiloBanner from "../images/ong_banner.png";
import FiloLogo from "../images/ong_image.png";
import FiloDourado from "../images/Dourado.png";
import FiloLiz from "../images/Liz.png";

import MundoBanner from "../images/MundoMarley.png";
import MarleyLogo from "../images/MarleyLogo.jpg";
import MundoPeludo from "../images/Peludo.png";
import MundoLuna from "../images/Luna.png";

import AnjosLogo from "../images/Anjos.png";
import AnjosBanner from "../images/AnjosBanner.png";
import AnjosCacau from "../images/Cacau.png";
import AnjosCanela from "../images/Canela.png";

import HelpLogo from "../images/PetHelpLogo.png";
import HelpBanner from "../images/PetHelpBanner.png";
import HelpNina from "../images/Nina.png";
import HelpPipoca from "../images/Pipoca.png";

export const Ongs: Ong[] = [
  {
    id: 1,
    name: "Cantinho da Filó",
    description:
      "Nosso trabalho consiste em acolher e abrigar temporariamente Cães e Gatos em situação de rua (abandonados). \n\nEsse trabalho só é possível com a ajuda de alguns parceiros que custeiam nossos hóspedes até que sejam adotados, por isso sua ajuda é muito importante para nós.",
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
        description: `Meu nome é Dourado e fui encontrado no lixo, desde então tenho lutado para sobreviver nas ruas. Não é fácil ser um gatinho de rua, especialmente quando você é sério e desconfiado como eu. Mas, mesmo com todas as dificuldades que enfrento, mantenho minha determinação e força. 
        \nSou um gatinho forte e corajoso, e não desisto facilmente. Apesar da minha aparência séria, eu tenho um coração muito carinhoso e carente de amor. Eu adoro receber carinho na barriga e nos ouvidos, e quando me sinto seguro, gosto de brincar com bolinhas e brinquedos.`,
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
          "Meu nome é Liz e eu sou uma gatinha de rua que teve uma vida muito difícil. Eu fui abandonada e, além disso, sou cega de um olho, o que torna tudo ainda mais difícil para mim. Por causa das coisas que passei, eu sou uma gatinha muito assustada e desconfiada. \n\nMas, quando ganho confiança, sou uma gatinha muito meiga e adoro receber carinho na cabeça e na barriga. Além disso, eu sou muito tranquila e gosto de ficar em lugares calmos e aconchegantes.",
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
    description: `O Mundo do Marley é um abrigo de animais retirados das ruas, vítimas de maus tratos e abandono. O abrigo tem uma equipe dedicada com oferece um atendimento acolhedor, com responsabilidade e muito cuidado. \n\nAlém de muito amor e carinho, os peludos são bem alimentados, vacinados, vermifugados, e castrados quando as condições financeiras permitem.`,
    phone: "(81) 98995-0128",
    email: "",
    facebook: "",
    instagram: "https://www.instagram.com/mundo.domarley/",
    address:
      "Av. Batalha do Tuiuti, 1228 - Bloco A, Águas compridas, Olinda - PE",
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
        \nApesar de já ter vivido muitas coisas, ainda sou um cachorro amoroso e fiel, e adoro receber carinho e atenção. Eu posso não ser tão ágil como antes, e às vezes sinto dores no corpo, mas isso não me impede de continuar amando e acreditando nas pessoas.`,
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
          \nEu sei que posso ser um pouco desajeitada e bagunceira, mas prometo que vou compensar tudo isso com meu amor e alegria. Se você está procurando uma cachorrinha cheia de energia e amor para dar, eu sou a escolha certa!`,
        totalValue: 189.9,
        valueEarned: 153.18,
        photo: MundoLuna,
        sex: "Feminino",
      },
    ],
  },
  {
    id: 3,
    name: "Anjos do Poço",
    description:
      "A Anjos do Poço atua na defesa dos animais (resgate, castração, exames, vermifugação, vacinas e adoção), oferecendo suporte a protetores credenciados e tutores em geral. \n\nAlém disso, a ONG desenvolve ações de conscientização voltadas para a defesa do meio ambiente.",
    phone: "(81) 98103-5333",
    email: "anjosdopoco@gmail.com",
    facebook: "https://www.facebook.com/anjosdopocoperfil",
    instagram: "https://www.instagram.com/anjosdopoco/",
    address: "R. Virgílio de Oliveira, 255, Poço da Panela, Recife - PE",
    logo: AnjosLogo,
    banner: AnjosBanner,
    current_goal: 901.2,
    money_goal: 1232,
    faq: [
      {
        question: "Quantos animais vocês estão abrigando?",
        answer:
          "No momento estamos abrigando 15 gatos, 24 cachorros e 1 papagaio.",
      },
      {
        question: "Posso virar voluntário?",
        answer:
          "Sim! Qualquer pessoa está elegível para se voluntariar, nos siga no instagram para mais instruções.",
      },
      {
        question: "Há quanto tempo a ONG funciona?",
        answer: "Desde 2018.",
      },
    ],
    pets: [
      {
        id: 31,
        name: "Cacau",
        weight: 2,
        age: 2,
        description: `Olá, meu nome é Cacau e sou uma gatinha muito especial! Fui abandonada nas ruas, mas isso não me impediu de manter minha personalidade carinhosa e brincalhona. Sou uma gatinha curiosa e adoro explorar tudo ao meu redor, mas o que mais gosto é de receber carinho e atenção das pessoas.
        \nApesar das dificuldades que já passei, mantenho meu coração cheio de amor e esperança de encontrar uma família que me adote e me dê um lar definitivo. Enquanto não encontro, que tal me dar uma chance e apadrinhar uma gatinha tão especial como eu?`,
        totalValue: 187.6,
        valueEarned: 60.9,
        photo: AnjosCacau,
        sex: "Feminino",
      },

      {
        id: 32,
        name: "Canela",
        weight: 9,
        age: 11,
        description: `Meu nome é Canela, tenho pelo curto e em tons de marrom, cor de canela, o que me rendeu esse nome. Apesar de ter passado por muitas dificuldades na rua, eu sou uma cachorrinha muito carinhosa e afetuosa. Adoro ficar perto das pessoas, receber carinho na barriga e brincar de pegar a bolinha.
        \nSou uma cachorrinha muito sociável e adoro fazer novos amigos, tanto cães como humanos. Gosto de correr e brincar, mas também adoro tirar um cochilo no sol. Sou muito fiel e leal, e estou sempre disposta a proteger aqueles que amo.`,
        totalValue: 308.9,
        valueEarned: 134.19,
        photo: AnjosCanela,
        sex: "Feminino",
      },
    ],
  },
  {
    id: 4,
    name: "Pet Help",
    description: `Somos uma ONG cujo objetivo principal é proporcionar uma vida digna à animais abandonados. Atuamos em Recife e região metropolitana. Resgatamos, recuperamos a saúde e o bem-estar do animal com base em protocolo médico traçado pelo nosso veterinário responsável.
      \nApós garantia de que o animal está saudável (vermifugado, castrado e vacinado), damos início a sua campanha de adoção. Buscamos que cada um deles tenha o seu final feliz com amor, carinho e dignidade.`,
    phone: "(81) 99251-1182",
    email: "",
    facebook: "https://www.facebook.com/profile.php?id=100064803275182",
    instagram: "https://www.instagram.com/pethelprecife/",
    address: "Av. Guararapes, 86, Santo Antônio, Recife - PE",
    logo: HelpLogo,
    banner: HelpBanner,
    current_goal: 230.21,
    money_goal: 1890,
    faq: [
      {
        question: "Como posso me voluntariar?",
        answer:
          "A partir do nosso instagram é possível encontrar todas as informações.",
      },
      {
        question: "Há quanto tempo a ONG funciona?",
        answer: "Estamos em funcionamento desde 2011",
      },
      {
        question:
          "Vocês aceitam doações de alimentos e outros suprimentos para os animais?",
        answer: "Sim, aceitamos qualquer tipo de ajuda.",
      },
      {
        question: "Quantos animais vocês estão abrigando?",
        answer: "Estamos abrigando atualmente 15 cachorros e 2 gatos.",
      },
    ],
    pets: [
      {
        id: 41,
        name: "Nina",
        weight: 4,
        age: 8,
        description: `Meu nome é Nina, e eu sou uma gatinha de rua que foi abandonada. Eu sou um pouco tímida e assustada, por isso acabo sendo muito preguiçosa e fico sempre procurando um lugarzinho aconchegante e seguro para dormir.
        \nDesde que fui abandonada, tenho tido dificuldades para sobreviver sozinha nas ruas. Estou aprendendo a confiar nas pessoas novamente e aos poucos estou me acostumando com a nova rotina.`,
        totalValue: 238.1,
        valueEarned: 201.0,
        photo: HelpNina,
        sex: "Feminino",
      },

      {
        id: 42,
        name: "Pipoca",
        weight: 10,
        age: 3,
        description: `Meu nome é Pipoca e tenho uma carinha muito fofa, se eu posso dizer! Acho que tenho por volta de 3 anos, mas não tenho certeza, já que ninguém sabe minha história antes de eu ter sido encontrado abandonado na rua.
        \nGosto muito de brincar, correr, pular e, é claro, comer! Estou me acostumando com a nova rotina, aprendendo a fazer minhas necessidades no lugar certo e também a conviver com outros cachorrinhos.`,
        totalValue: 238.9,
        valueEarned: 210.87,
        photo: HelpPipoca,
        sex: "Masculino",
      },
    ],
  },
];

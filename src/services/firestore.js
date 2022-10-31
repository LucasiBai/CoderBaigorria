// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
	collection,
	doc,
	getFirestore,
	query,
	where,
	getDocs,
	getDoc,
	addDoc,
	updateDoc,
} from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDLibewxZ5hu0-M612Co7DCzj4Ov-koyNE",
	authDomain: "lacandelacoder.firebaseapp.com",
	projectId: "lacandelacoder",
	storageBucket: "lacandelacoder.appspot.com",
	messagingSenderId: "88998223804",
	appId: "1:88998223804:web:27422599056a8d0b8155b9",
};

const products = [
	{
		id: 1,
		title: "Lámpara led de pared Ferrolux AP-102 color negro 220V por 1 unidad",
		description:
			"Desde sus inicios en el año 1975, Ferrolux se ha dedicado especialmente al diseño, desarrollo, fabricación y comercialización de artefactos de iluminación. Trabajando en función de la calidad y la innovación e incorporando las últimas tecnologías y optimizando los procesos de producción, se fue forjando como marca líder en el mercado argentino. Así, con el paso del tiempo, fue convirtiéndose en una de las empresas fabricantes más confiables y seguras.",
		price: 3126,
		img: [
			"https://http2.mlstatic.com/D_NQ_NP_925167-MLA32706766600_102019-O.webp",
		],
		stock: 5,
		category: "jardin",
		selled: 50,
		rate: 0,
		opinions: [],
	},
	{
		id: 2,
		title: "Lámpara led de pared Faroluz 4314 color negro 220V por 1 unidad",
		description: `La combinación perfecta entre iluminación y diseño. Esta lámpara le dará vida a tus espacios para que puedas aprovecharlos al máximo. Además, podrás personalizar tus lugares preferidos y darles un detalle distintivo.

      Iluminá tus espacios
      Este modelo es apto para focos con tecnología led, que además de contribuir al cuidado del ambiente, duran más tiempo y te permiten ahorrar hasta un 90 % más que las fuentes de luz convencionales.`,
		price: 1764,
		img: [
			"https://http2.mlstatic.com/D_NQ_NP_630469-MLA32706739127_102019-O.webp",
		],
		stock: 15,
		category: "jardin",
		selled: 25,
		rate: 0,
		opinions: [],
	},
	{
		id: 3,
		title: "Farol Solar Exterior Led Fuego Calida Aplique Pared Jardin",
		description: `FAROL ANTORCHA LUZ LED CÁLIDA ESTACA CARGA SOLAR EFECTO LLAMA FUEGO 50CM

    Antorcha con 12 luces LED que vienen dentro de un tubo en color amarillo que simulan ser llamas de fuego. Esta diseñada con una estaca para que se pueda colocar en jardines o en macetas.`,
		price: 2490,
		img: [
			"https://http2.mlstatic.com/D_NQ_NP_927060-MLA51505360223_092022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_790317-MLA52003048493_102022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_821874-MLA51505337287_092022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_821082-MLA51505337289_092022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_985694-MLA51505370192_092022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_950271-MLA52003151856_102022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_627576-MLA52003227097_102022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_790317-MLA52003048493_102022-O.webp",
		],
		stock: 20,
		category: "jardin",
		selled: 12,
		rate: 0,
		opinions: [],
	},
	{
		id: 4,
		title: "Lampara Solar Exterior Jardin Led Adorno Colgante Decoracion",
		description: `LAMPARA JARRO DE VIDRIO COLGANTE LUZ SOLAR


    Alambre 3m 30 LED con energía Solar, lámpara de alambre de cobre plateado, bola de grieta, tarro de vidrio con cuerda, lámpara de decoración de césped y jardín de pared al aire libre.`,
		price: 3594,
		img: [
			"https://http2.mlstatic.com/D_NQ_NP_958228-MLA49207146796_022022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_638683-MLA49235807144_022022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_861470-MLA49235785242_022022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_857954-MLA49235667842_022022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_792487-MLA49235667843_022022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_810559-MLA49235773338_022022-O.webp",
		],
		stock: 12,
		category: "jardin",
		selled: 50,
		rate: 0,
		opinions: [],
	},
	{
		id: 5,
		title: "Set Jardin Completo 2 Farol + 2 Poste 2,5mts + 2 Led 10w 831",
		description: `SET x 2 farol mod 831 + poste 2,5 mts + 2 led 10w

    Especificaciones
    dimension: H=55cm A=31cm
    portalampara:ceramico e27 apto led
    vidrio: 3 mm transparente
    `,
		price: 24000,
		img: [
			"https://http2.mlstatic.com/D_NQ_NP_797061-MLA31056605455_062019-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_934298-MLA46594348328_072021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_884823-MLA46594390617_072021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_949108-MLA46594144791_072021-O.webp",
		],
		stock: 5,
		category: "jardin",
		selled: 10,
		rate: 0,
		opinions: [],
	},
	{
		id: 6,
		title: "Luz Solar Exterior Jardín Cálida Color Estaca Flores Árbol",
		description: `ARBOL CON FLORES LUCES LED CALIDO O MULTICOLOR RGB ENERGÍA SOLAR EXTERIOR CÁLIDA 70 CM 20 LUCES 8 EFECTOS

    Árbol con luces LED con forma de flores de silicona que vienen en dos variantes de color: cálido o multicolor. Posee 8 efectos lumínicos que se pueden cambiar gracias al botón que encuentran en el panel solar.
    
    Se recarga mediante energía solar con el panel que esta incluido en el producto. Necesita de 8 horas de sol para poseer una carga completa de 8 horas de duración. En días nublados o lluviosos, necesitara mas horas o la duración de la batería será menor.`,
		price: 3890,
		img: [
			"https://http2.mlstatic.com/D_NQ_NP_912136-MLA51485498183_092022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_806019-MLA52002863730_102022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_881922-MLA52002896415_102022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_980609-MLA52002896416_102022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_924417-MLA51485385554_092022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_652211-MLA52002863736_102022-O.webp",
		],
		stock: 32,
		category: "jardin",
		selled: 12,
		rate: 0,
		opinions: [],
	},
	{
		id: 7,
		title: "Estaca Luz Solar Alambre Cobre Jardin Fuego Artificial X 2u",
		description: `Estaca solar LED
    50 cables con 3 leds en cada uno: total de 150 leds
    Battery: 1.2V 800 mah
    Solar Panel: 2v
    Material: ABS + acero inoxidable + cables de cobre
    Color luz: CALIDA
    Opiones de luz: Fija o Intermitente
    Nivel impermeabilidad: IP44
    Tiempo de carga - descarga: 6 a 8hs
    Medidas: ver imagenes con detalle
    
    ESTA PUBLICACION es por 2 UNIDADES en caja`,
		price: 7349,
		img: [
			"https://http2.mlstatic.com/D_NQ_NP_990888-MLA49283295003_032022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_898862-MLA49283249201_032022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_955299-MLA49283269064_032022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_828584-MLA49283108631_032022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_702716-MLA49283258192_032022-O.webp",
		],
		stock: 43,
		category: "jardin",
		selled: 10,
		rate: 0,
		opinions: [],
	},
	{
		id: 8,
		title: "Estaca 96 Leds Luz Fotocelda Solar Antorcha Efecto Flama X 2",
		description: `Estaca solar LED
    96 leds
    Battery: 3.7V 1200 mah de litio
    Solar Panel: 2v
    Material: ABS + PVC
    Color luz: CALIDA flama
    Nivel impermeabilidad: IP44
    Tiempo de carga - descarga: 6 a 8hs
    Medidas: 12 cm x 12 cm x 80 cm`,
		price: 8856,
		img: [
			"https://http2.mlstatic.com/D_NQ_NP_617432-MLA51526194707_092022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_781608-MLA49283418329_032022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_969920-MLA49283387573_032022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_884048-MLA49283342950_032022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_958102-MLA49283445037_032022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_623270-MLA49283357885_032022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_710994-MLA49283418386_032022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_2X_773325-MLA49283404585_032022-F.webp",
			"https://http2.mlstatic.com/D_NQ_NP_636949-MLA49283371809_032022-O.webp",
		],
		stock: 23,
		category: "jardin",
		selled: 12,
		rate: 0,
		opinions: [],
	},
	{
		id: 9,
		title: "Estaca Solar Luz 10 Leds Farol Efecto Fuego Calido X 2",
		description: `Estaca solar LED
    10 leds internos SMD
    Battery: 1.2V 600mah
    Solar Panel: 2v 40mah
    Material: ABS + PVC
    Color luz: Efecto Flama
    Nivel impermeabilidad: IP44
    Tiempo de carga: 6 a 8hs
    Descarga: 3 a 5hs
    Medidas: 8 cm × 8 cm × 37 cm
    `,
		price: 2799,
		img: [
			"https://http2.mlstatic.com/D_NQ_NP_749354-MLA49221984537_022022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_810714-MLA49221998290_022022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_939031-MLA49221984522_022022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_759767-MLA49221994416_022022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_949906-MLA49221983551_022022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_701709-MLA49221998305_022022-O.webp",
		],
		stock: 65,
		category: "jardin",
		selled: 21,
		rate: 0,
		opinions: [],
	},
	{
		id: 10,
		title: "Estaca Solar Farol De Jardín Acero Inox. Vidrio Luz Premiun",
		description: `###### ESTACA SOLAR LED FAROL DE ACERO INOXIDABLE GRANDE ######
    ----------------------------------------------------------------------------------------------------------------------
    
    # IDEAL PARA DECORAR JARDÍN, PARQUES, PATIOS Y EXTERIORES
    
    # DURACIÓN: UNA VEZ CON CARGA COMPLETA DURA 8 HS.
    
    # MEDIDAS: 42,5 cm.
    
    # DIÁMETRO: 12 cm.`,
		price: 2990,
		img: [
			"https://http2.mlstatic.com/D_NQ_NP_969235-MLA44253296597_122020-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_638262-MLA44253323049_122020-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_972858-MLA44253331903_122020-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_721030-MLA44253322018_122020-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_751662-MLA44253288934_122020-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_627871-MLA44253296719_122020-O.webp",
		],
		stock: 54,
		category: "jardin",
		selled: 3,
		rate: 0,
		opinions: [],
	},
	{
		id: 11,
		title: "Guirnalda Luz Led Solar Bolita 50 Led Transparente Exterior",
		description: `GUIRNALDA BOLITA TRANSPARENTE LUZ LED SOLAR 5M + 2M DE CABLE.
 
    La guirnalda de luz led solar está diseñada para resistir lluvia o derrames de agua. Por lo que es excelente para exteriores como patio trasero, balcón, escaleras, áreas de comedor, etc. 
    
    Especificaciones:
    Panel Solar: 2V 100mA
    Efectos de iluminación: 8
    Cantidad de LED: 50
    Color de luz: blanco cálido
    Material: plástico + pvc
    Horas de carga: 4-8 horas
    Horas de trabajo: 8-12 horas`,
		price: 4280,
		img: [
			"https://http2.mlstatic.com/D_NQ_NP_894829-MLA44737350658_012021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_623729-MLA45282361274_032021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_623316-MLA44678984033_012021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_982717-MLA44678981038_012021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_984396-MLA44737291466_012021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_998992-MLA44678967296_012021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_796593-MLA44737256899_012021-O.webp",
		],
		stock: 15,
		category: "jardin",
		selled: 25,
		rate: 0,
		opinions: [],
	},
	{
		id: 12,
		title: "Spot Luz Panel Solar Jardin Exterior Embutir Piso Estaca",
		description: `Farol - Estaca - Luz led - Ideal para jardín, exteriores, patios, parque - Decoración para tu exterior. Somos Hub Integral Solutions.
    Luz cálida, para un toque increíble.
    
    Novedoso Spot Solar - Estaca Solar. Disfruta de darle un toque único a tus espacios.`,
		price: 1964,
		img: [
			"https://http2.mlstatic.com/D_NQ_NP_947733-MLA49773610859_042022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_681568-MLA49773650729_042022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_773738-MLA49773601920_042022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_882451-MLA49773786131_042022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_847069-MLA49773663696_042022-O.webp",
		],
		stock: 23,
		category: "jardin",
		selled: 12,
		rate: 0,
		opinions: [],
	},
	{
		id: 13,
		title: "Farol Doble Exterior Jardín Con Columna De 2.5 Mts Apto Led",
		description: `La combinación perfecta entre iluminación y diseño. Esta lámpara le dará vida a tus espacios para que puedas aprovecharlos al máximo. Además, podrás personalizar tus lugares preferidos y darles un detalle distintivo.

      Iluminá tus espacios
      Este modelo es apto para focos con tecnología led, que además de contribuir al cuidado del ambiente, duran más tiempo y te permiten ahorrar hasta un 90 % más que las fuentes de luz convencionales.`,
		price: 19179,
		img: [
			"https://http2.mlstatic.com/D_NQ_NP_960744-MLA31015526589_062019-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_786198-MLA25608227960_052017-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_636889-MLA25929977295_082017-O.webp",
		],
		stock: 63,
		category: "jardin",
		selled: 4,
		rate: 0,
		opinions: [],
	},
	{
		id: 14,
		title: "Luz Led Solar De Calle O Jardin 40 Smd Iluminacion Lampara",
		description: `SK DISTRIBUTORS, IMPORTAMOS CALIDAD
    DISTRIBUIDORES OFICIALES DE PRODUCTOS DITRON
    
    Hacemos Facturas de Tipo " A " y " B"
    ===============
    DESCRIPCIÓN:
    
    Lampara Solar Led Interior/Exterior
    
    Cantidad de led: 40 smd
    Tipo de material: ABS Plastico + Acrilico
    Panel solar: 5.5v/1.5w
    Voltaje de uso: 5v
    Sensor de movimiento
    Tiempo de carga: 6-8H
    Tiempo de uso continuo: 3H
    Tiempo de uso con sensor de movimiento: 6-8H`,
		price: 3999,
		img: [
			"https://http2.mlstatic.com/D_NQ_NP_683847-MLA50303092441_062022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_772837-MLA50303105393_062022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_907635-MLA50303003720_062022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_990427-MLA50302958996_062022-O.webp",
		],
		stock: 18,
		category: "jardin",
		selled: 20,
		rate: 0,
		opinions: [],
	},
	{
		id: 15,
		title: "Farol Marca Sendero Iluminacion Jardin 40cm Ferrolux + Led",
		description: `Farol de pie, marca sendero metálico, con 4 caras de vidrio satinado + Foco LED 9w!

    Decora e ilumina tus jardines, parques y senderos!
    Acepta lámparas de led y bajo consumo
    
    ESPECIFICACIONES:
    
    - Material: Metal y vidrio satinado
    - Medida: 40cm x 14cm
    - Color: Negro
    - Portalámpara: rosca común E27
    - Tension: 230V
    - Frecuencia: 50hz
    `,
		price: 4999,
		img: [
			"https://http2.mlstatic.com/D_NQ_NP_914263-MLA46856599791_072021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_709364-MLA40161709674_122019-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_742911-MLA40161751028_122019-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_686024-MLA46542844083_062021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_672156-MLA46542763642_062021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_739179-MLA46542770587_062021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_880509-MLA46542835185_062021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_703277-MLA46542828197_062021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_901897-MLA46542833185_062021-O.webp",
		],
		stock: 88,
		category: "jardin",
		selled: 24,
		rate: 0,
		opinions: [],
	},
	{
		id: 16,
		title: "Estaca De Jardín Led Solar 5w (luz Cálida)aplique De Pared",
		description: `--------------CENTRAL SOLAR-----------------

    Estaca Solar LED 5W (Luz cálida)
    
    -INSTALACION FÁCIL E INMEDIATA
    -SIN CABLEADO
    -SIN COSTOS DE CONSUMO
    -ENERGIA LIMPIA Y RENOVABLE
    -RESISTENTES A LA INTEMPERIE IP65
    -FOTOCÉLULA CON ENCENDIDO AUTOMÁTICO
    `,
		price: 7391,
		img: [
			"https://http2.mlstatic.com/D_NQ_NP_757932-MLA44282959768_122020-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_670723-MLA44282997020_122020-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_603369-MLA44282993167_122020-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_834951-MLA46785807216_072021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_708037-MLA44282959769_122020-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_767388-MLA44367478592_122020-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_933507-MLA44342428245_122020-O.webp",
		],
		stock: 45,
		category: "jardin",
		selled: 19,
		rate: 0,
		opinions: [],
	},
	{
		id: 17,
		title: "Spot Con Jabalina Estaca Pvc Jardín C/ Lampara Led 7w = 70w",
		description: `» Tipo de lámpara: Estaca Jabalina
    » Zócalo: Dicro Gu10
    » Potencia máxima: 7w ( INCLUIDA )
    » Conexión: 220v-240V 50Hz
    » Material: Pvc
    » Color: Negro
    » Medidas: 79 mm ancho y 395 mm altura
    » Clase II / IP54
    `,
		price: 3895,
		img: [
			"https://http2.mlstatic.com/D_NQ_NP_630469-MLA32706739127_102019-O.webp",
		],
		stock: 15,
		category: "jardin",
		selled: 25,
		rate: 0,
		opinions: [],
	},
	{
		id: 18,
		title: "Faroles Colgantes De Pared Para Exteriores Set X 2",
		description: `Características y propiedades
    Marca: DELFI Plast, Industria Argentina
    Modelo 4: COLONIAL COLGANTE de PARED
    
    Material: POLICARBONATO con protección UV resistente al impacto, a la luz solar directa y a la intemperie. Con 6 caras curvas transparentes que también son de POLICARBONATO, no tiene vidrios que podrían romperse (granizo por ejemplo) y causar accidentes. Obviamente no se oxidan porque no tienen metal en su estructura.
    Muy fáciles de limpiar y no requieren de mantenimiento.`,
		price: 7690,
		img: [
			"https://http2.mlstatic.com/D_NQ_NP_710278-MLA31644896224_072019-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_950054-MLA31644896297_072019-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_749979-MLA31644897245_072019-O.webp",
		],
		stock: 88,
		category: "jardin",
		selled: 24,
		rate: 0,
		opinions: [],
	},
	{
		id: 19,
		title: "Kit Spot X4 Luz Panel Solar Jardin Exterior Embutir Estaca",
		description: `Faroles Estacas enterrables con luz led y panel Solar Auto-recargables y con sensor de luz. Completamente portatiles (Sin cables, sin enchufes, sin conecciones). Se clavan, se cargan solas durante el día con el sol (incluyen una batería recargable) y al anochecer se encienden solas
    Ideal para decorar el jardín, el patio, el balcón, terraza etc.
    Con Panel solar en la parte superior de la estaca
    Encendido automático al anochecer. Además tiene botón ON/Off.
    Duración aproximada con carga completa 2hs`,
		price: 5049,
		img: [
			"https://http2.mlstatic.com/D_NQ_NP_672876-MLA43654099683_102020-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_826523-MLA43654107399_102020-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_711320-MLA43654110276_102020-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_725648-MLA43654106447_102020-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_925047-MLA43654110271_102020-O.webp",
		],
		stock: 76,
		category: "jardin",
		selled: 44,
		rate: 0,
		opinions: [],
	},
	{
		id: 20,
		title: "Guirnalda Cadena De Luz Led Cálida Recargable Solar 10 Mts",
		description: `La combinación perfecta entre iluminación y diseño. Esta lámpara le dará vida a tus espacios para que puedas aprovecharlos al máximo. Además, podrás personalizar tus lugares preferidos y darles un detalle distintivo.

      Iluminá tus espacios
      Este modelo es apto para focos con tecnología led, que además de contribuir al cuidado del ambiente, duran más tiempo y te permiten ahorrar hasta un 90 % más que las fuentes de luz convencionales.`,
		price: 2611,
		img: [
			"https://http2.mlstatic.com/D_NQ_NP_971840-MLA48417441620_122021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_955153-MLA48417417775_122021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_709672-MLA48417464349_122021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_792353-MLA48417392958_122021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_921724-MLA48417464350_122021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_902980-MLA48417495042_122021-O.webp",
		],
		stock: 88,
		category: "jardin",
		selled: 26,
		rate: 0,
		opinions: [],
	},
	{
		id: 21,
		title: "Panel Plafon Led 18w Aplicar Cuadrado Pack X 10 U",
		description: `PANEL LED 18W 220V APLICAR CUADRADO ( Pack x 10 Unidades)

    En esta publicación puede elegir el color de la luz:
    -Cálido ( 3100°K)
    -Neutro (4100°K)
    -Frio (6500°K)`,
		price: 19800,
		img: [
			"https://http2.mlstatic.com/D_NQ_NP_766097-MLA43362712842_092020-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_856930-MLA42808574109_072020-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_908963-MLA45308541308_032021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_994874-MLA42808559263_072020-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_615932-MLA42808468823_072020-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_771741-MLA42808572197_072020-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_913629-MLA42808540441_072020-O.webp",
		],
		stock: 99,
		category: "hogar",
		selled: 34,
		rate: 0,
		opinions: [],
	},
	{
		id: 22,
		title: "Panel Plafón Led Spot Embutir 6w Redondo Marco Blanco",
		description: `La combinación perfecta entre iluminación y diseño. Esta lámpara le dará vida a tus espacios para que puedas aprovecharlos al máximo. Además, podrás personalizar tus lugares preferidos y darles un detalle distintivo.

      Iluminá tus espacios
      Este modelo es apto para focos con tecnología led, que además de contribuir al cuidado del ambiente, duran más tiempo y te permiten ahorrar hasta un 90 % más que las fuentes de luz convencionales.`,
		price: 1250,
		img: [
			"https://http2.mlstatic.com/D_NQ_NP_990553-MLA43020902184_082020-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_894734-MLA43156341133_082020-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_622690-MLA43156346064_082020-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_691624-MLA43176570787_082020-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_817495-MLA43176576596_082020-O.webp",
		],
		stock: 64,
		category: "hogar",
		selled: 253,
		rate: 0,
		opinions: [],
	},
	{
		id: 23,
		title: "Spot Embutir Dicroica Led Movil B + Lampara + Zocalo Pack 20",
		description: `SPOT DE EMBUTIR MÓVIL
    • Material: Chapa de Acero & Pintura Epoxi
    • Color: Blanco
    • Aro móvil: Sí
    • Medidas: Ø100 mm x 35 mm
    `,
		price: 17600,
		img: [
			"https://http2.mlstatic.com/D_NQ_NP_991131-MLA46504719560_062021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_620076-MLA46466751692_062021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_863025-MLA46466751694_062021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_923960-MLA46466746684_062021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_996545-MLA46466746688_062021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_719606-MLA46466842210_062021-O.webp",
		],
		stock: 233,
		category: "hogar",
		selled: 245,
		rate: 0,
		opinions: [],
	},
	{
		id: 24,
		title: "Spot Embutir Dicroica Antideslumbrante E4111a Acero+ Lampara",
		description: `Características

    • Aplicación: Techo
    • Capacidad de lámparas: 1
    • Tipo de lámpara: Dicroica
    • Zócalo: Gu10
    • Apertura: 120°
    • Conexión: 220V
    • Frecuencia: 50Hz
    • Material: Chapa de acero
    • Colores disponibles: Acero, Blanco, Negro
    • Dimensiones: A: 100 mm - L: 100 mm - H: 45 mm
    • Diámetro del hueco: 78 mm
    • Protección: IP20
    • Uso: Interior
    • Origen: China`,
		price: 1908,
		img: [
			"https://http2.mlstatic.com/D_NQ_NP_686516-MLA49199357632_022022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_654046-MLA49186270978_022022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_815050-MLA49186294919_022022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_883141-MLA49186270981_022022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_807814-MLA49186294923_022022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_889105-MLA49199268889_022022-O.webp",
		],
		stock: 63,
		category: "hogar",
		selled: 25,
		rate: 0,
		opinions: [],
	},
	{
		id: 25,
		title: "Plafon Panel Led Gadnic Redondo 18w Luz Techo Calido/frio",
		description: `Plafon Lampara de techo Led Gadnic PNL18 Calido/Frio Redondo 18W

    ACERCA DE ÉSTE PRODUCTO:
    
    ¡Plafon Aplicar Led 18 W redondo Calido / Frio!
    
    El cuerpo es íntegramente de aluminio con tratamiento antioxidante.
    
    Brinda una máxima luminosidad y la iluminación es uniforme en todo el ambiente.
    
    El producto viene con el driver cableado para conectar directo a 220v e incluye los tornillos y tarugos para amurar al techo o pared. Es de fácil instalación`,
		price: 2375,
		img: [
			"https://http2.mlstatic.com/D_NQ_NP_873120-MLA50531282974_062022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_878074-MLA50531282969_062022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_638708-MLA50531282975_062022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_684235-MLA50531282977_062022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_637986-MLA50531282971_062022-O.webp",

			"https://http2.mlstatic.com/D_NQ_NP_923188-MLA50531282973_062022-O.webp",
		],
		stock: 75,
		category: "hogar",
		selled: 95,
		rate: 0,
		opinions: [],
	},
	{
		id: 26,
		title: "Colgante 3 Luces Vidrio Cromo 9003 Apto Led E-27 Luz Desing",
		description: `- MEDIDAS: BASE ACERO INOXIDABLE CROMADO 60 X 10CM

    - TULIPAS DE VIDRIO CON BORDES ACERO CROMO: 8X8X25CM.
    
    - CABLE: 1 METRO REGULABLE
    
    - LÁMPARA: 3 X E-27 LAMPARAS (NO INCLUIDAS)
    
    - MATERIAL: ACERO INOXIDABLE Y VIDRIO BORDE CROMO
    `,
		price: 21745,
		img: [
			"https://http2.mlstatic.com/D_NQ_NP_969309-MLA42964968634_072020-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_657613-MLA31050054356_062019-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_877206-MLA43438470268_092020-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_978131-MLA46480529029_062021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_968289-MLA43438471253_092020-O.webp",
		],
		stock: 14,
		category: "hogar",
		selled: 64,
		rate: 0,
		opinions: [],
	},
	{
		id: 27,
		title: "Aplique Pared Led Tortuga Ovalado Moderno 4273 Exterior 220v",
		description: `Características

    • Aplicación: Pared
    • Cantidad de lámparas: 1
    • Tipo de lámpara: Halógena, Bajo Consumo o LED
    • Zócalo: E27
    • Conexión: 220V
    • Material: Polipropileno
    • Color: Blanco, Negro
    • Dimensiones: 300 x 180 x 120 mm
    • Uso: Exterior
    • Protección: IP24
    • Origen: China`,
		price: 1764,
		img: [
			"https://http2.mlstatic.com/D_NQ_NP_853721-MLA46857208887_072021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_934466-MLA46857266342_072021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_832402-MLA48248245634_112021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_626807-MLA46857208892_072021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_768851-MLA48248245376_112021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_794191-MLA48197738257_112021-O.webp",
		],
		stock: 15,
		category: "hogar",
		selled: 77,
		rate: 0,
		opinions: [],
	},
	{
		id: 28,
		title: "Aplique Pared Led Tortuga Rectangulo Foco E27-4267",
		description: `La combinación perfecta entre iluminación y diseño. Esta lámpara le dará vida a tus espacios para que puedas aprovecharlos al máximo. Además, podrás personalizar tus lugares preferidos y darles un detalle distintivo.

      Iluminá tus espacios
      Este modelo es apto para focos con tecnología led, que además de contribuir al cuidado del ambiente, duran más tiempo y te permiten ahorrar hasta un 90 % más que las fuentes de luz convencionales.`,
		price: 1564,
		img: [
			"https://http2.mlstatic.com/D_NQ_NP_938542-MLA46857329422_072021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_661681-MLA46857353334_072021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_703445-MLA46857266911_072021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_696436-MLA46857329427_072021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_937765-MLA46857329431_072021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_824046-MLA46857353342_072021-O.webp",
		],
		stock: 165,
		category: "hogar",
		selled: 422,
		rate: 0,
		opinions: [],
	},
	{
		id: 29,
		title: "Panel Embutir 6w Led Redondo Cuadrado Acero Platil Pack X2u",
		description: `PANEL LED6W 220V APLICAR REDONDO o CUADRADO ACERO PLATIL PACK X 2U.

    En esta publicación puede elegir color de la luz:
    -Calido
    -Neutro
    -Frío
    
    REEMPLAZO DE LUMINARIAS DE TECHO, PLAFONES Y APLIQUES`,
		price: 2754,
		img: [
			"https://http2.mlstatic.com/D_NQ_NP_975406-MLA43645665829_102020-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_746955-MLA43645655830_102020-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_691302-MLA42514857656_072020-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_805984-MLA43645662696_102020-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_664257-MLA43645665654_102020-O.webp",
		],
		stock: 36,
		category: "hogar",
		selled: 14,
		rate: 0,
		opinions: [],
	},
	{
		id: 30,
		title: "Panel Plafon Aplicar 6w Led Redondo - Cuadrado Acero Platil",
		description: `PANEL LED 18W 220V APLICAR REDONDO ACERO
    En esta publicación puede elegir color de la luz:
    -Calido
    -Neutro
    -Frío
    REEMPLAZO DE LUMINARIAS DE TECHO, PLAFONES Y APLIQUES
    `,
		price: 1164,
		img: [
			"https://http2.mlstatic.com/D_NQ_NP_600099-MLA43645820851_102020-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_713684-MLA41939873654_052020-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_851890-MLA41939868327_052020-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_687381-MLA41939863499_052020-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_629307-MLA41939872215_052020-O.webp",
		],
		stock: 33,
		category: "hogar",
		selled: 25,
		rate: 0,
		opinions: [],
	},
	{
		id: 30,
		title: "Guirnalda Cadena De Luz Led Cálida Recargable Solar 10 Mts",
		description: `La combinación perfecta entre iluminación y diseño. Esta lámpara le dará vida a tus espacios para que puedas aprovecharlos al máximo. Además, podrás personalizar tus lugares preferidos y darles un detalle distintivo.

      Iluminá tus espacios
      Este modelo es apto para focos con tecnología led, que además de contribuir al cuidado del ambiente, duran más tiempo y te permiten ahorrar hasta un 90 % más que las fuentes de luz convencionales.`,
		price: 2611,
		img: [
			"https://http2.mlstatic.com/D_NQ_NP_971840-MLA48417441620_122021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_955153-MLA48417417775_122021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_709672-MLA48417464349_122021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_792353-MLA48417392958_122021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_921724-MLA48417464350_122021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_902980-MLA48417495042_122021-O.webp",
		],
		stock: 88,
		category: "jardin",
		selled: 26,
		rate: 0,
		opinions: [],
	},
	{
		id: 31,
		title: "Panel Plafon Led 18w Aplicar Cuadrado Pack X 10 U",
		description: `PANEL LED 18W 220V APLICAR CUADRADO ( Pack x 10 Unidades)

    En esta publicación puede elegir el color de la luz:
    -Cálido ( 3100°K)
    -Neutro (4100°K)
    -Frio (6500°K)`,
		price: 19800,
		img: [
			"https://http2.mlstatic.com/D_NQ_NP_766097-MLA43362712842_092020-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_856930-MLA42808574109_072020-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_908963-MLA45308541308_032021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_994874-MLA42808559263_072020-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_615932-MLA42808468823_072020-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_771741-MLA42808572197_072020-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_913629-MLA42808540441_072020-O.webp",
		],
		stock: 99,
		category: "hogar",
		selled: 34,
		rate: 0,
		opinions: [],
	},
	{
		id: 32,
		title: "Panel Plafón Led Spot Embutir 6w Redondo Marco Blanco",
		description: `La combinación perfecta entre iluminación y diseño. Esta lámpara le dará vida a tus espacios para que puedas aprovecharlos al máximo. Además, podrás personalizar tus lugares preferidos y darles un detalle distintivo.

      Iluminá tus espacios
      Este modelo es apto para focos con tecnología led, que además de contribuir al cuidado del ambiente, duran más tiempo y te permiten ahorrar hasta un 90 % más que las fuentes de luz convencionales.`,
		price: 1250,
		img: [
			"https://http2.mlstatic.com/D_NQ_NP_990553-MLA43020902184_082020-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_894734-MLA43156341133_082020-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_622690-MLA43156346064_082020-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_691624-MLA43176570787_082020-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_817495-MLA43176576596_082020-O.webp",
		],
		stock: 64,
		category: "hogar",
		selled: 253,
		rate: 0,
		opinions: [],
	},
	{
		id: 33,
		title: "Spot Embutir Dicroica Led Movil B + Lampara + Zocalo Pack 20",
		description: `SPOT DE EMBUTIR MÓVIL
    • Material: Chapa de Acero & Pintura Epoxi
    • Color: Blanco
    • Aro móvil: Sí
    • Medidas: Ø100 mm x 35 mm
    `,
		price: 17600,
		img: [
			"https://http2.mlstatic.com/D_NQ_NP_991131-MLA46504719560_062021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_620076-MLA46466751692_062021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_863025-MLA46466751694_062021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_923960-MLA46466746684_062021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_996545-MLA46466746688_062021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_719606-MLA46466842210_062021-O.webp",
		],
		stock: 233,
		category: "hogar",
		selled: 245,
		rate: 0,
		opinions: [],
	},
	{
		id: 34,
		title: "Spot Embutir Dicroica Antideslumbrante E4111a Acero+ Lampara",
		description: `Características

    • Aplicación: Techo
    • Capacidad de lámparas: 1
    • Tipo de lámpara: Dicroica
    • Zócalo: Gu10
    • Apertura: 120°
    • Conexión: 220V
    • Frecuencia: 50Hz
    • Material: Chapa de acero
    • Colores disponibles: Acero, Blanco, Negro
    • Dimensiones: A: 100 mm - L: 100 mm - H: 45 mm
    • Diámetro del hueco: 78 mm
    • Protección: IP20
    • Uso: Interior
    • Origen: China`,
		price: 1908,
		img: [
			"https://http2.mlstatic.com/D_NQ_NP_686516-MLA49199357632_022022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_654046-MLA49186270978_022022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_815050-MLA49186294919_022022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_883141-MLA49186270981_022022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_807814-MLA49186294923_022022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_889105-MLA49199268889_022022-O.webp",
		],
		stock: 63,
		category: "hogar",
		selled: 25,
		rate: 0,
		opinions: [],
	},
	{
		id: 35,
		title: "Plafon Panel Led Gadnic Redondo 18w Luz Techo Calido/frio",
		description: `Plafon Lampara de techo Led Gadnic PNL18 Calido/Frio Redondo 18W

    ACERCA DE ÉSTE PRODUCTO:
    
    ¡Plafon Aplicar Led 18 W redondo Calido / Frio!
    
    El cuerpo es íntegramente de aluminio con tratamiento antioxidante.
    
    Brinda una máxima luminosidad y la iluminación es uniforme en todo el ambiente.
    
    El producto viene con el driver cableado para conectar directo a 220v e incluye los tornillos y tarugos para amurar al techo o pared. Es de fácil instalación`,
		price: 2375,
		img: [
			"https://http2.mlstatic.com/D_NQ_NP_873120-MLA50531282974_062022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_878074-MLA50531282969_062022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_638708-MLA50531282975_062022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_684235-MLA50531282977_062022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_637986-MLA50531282971_062022-O.webp",

			"https://http2.mlstatic.com/D_NQ_NP_923188-MLA50531282973_062022-O.webp",
		],
		stock: 75,
		category: "hogar",
		selled: 95,
		rate: 0,
		opinions: [],
	},
	{
		id: 36,
		title: "Colgante 3 Luces Vidrio Cromo 9003 Apto Led E-27 Luz Desing",
		description: `- MEDIDAS: BASE ACERO INOXIDABLE CROMADO 60 X 10CM

    - TULIPAS DE VIDRIO CON BORDES ACERO CROMO: 8X8X25CM.
    
    - CABLE: 1 METRO REGULABLE
    
    - LÁMPARA: 3 X E-27 LAMPARAS (NO INCLUIDAS)
    
    - MATERIAL: ACERO INOXIDABLE Y VIDRIO BORDE CROMO
    `,
		price: 21745,
		img: [
			"https://http2.mlstatic.com/D_NQ_NP_969309-MLA42964968634_072020-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_657613-MLA31050054356_062019-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_877206-MLA43438470268_092020-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_978131-MLA46480529029_062021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_968289-MLA43438471253_092020-O.webp",
		],
		stock: 14,
		category: "hogar",
		selled: 64,
		rate: 0,
		opinions: [],
	},
	{
		id: 37,
		title: "Aplique Pared Led Tortuga Ovalado Moderno 4273 Exterior 220v",
		description: `Características

    • Aplicación: Pared
    • Cantidad de lámparas: 1
    • Tipo de lámpara: Halógena, Bajo Consumo o LED
    • Zócalo: E27
    • Conexión: 220V
    • Material: Polipropileno
    • Color: Blanco, Negro
    • Dimensiones: 300 x 180 x 120 mm
    • Uso: Exterior
    • Protección: IP24
    • Origen: China`,
		price: 1764,
		img: [
			"https://http2.mlstatic.com/D_NQ_NP_853721-MLA46857208887_072021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_934466-MLA46857266342_072021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_832402-MLA48248245634_112021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_626807-MLA46857208892_072021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_768851-MLA48248245376_112021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_794191-MLA48197738257_112021-O.webp",
		],
		stock: 15,
		category: "hogar",
		selled: 77,
		rate: 0,
		opinions: [],
	},
	{
		id: 38,
		title: "Aplique Pared Led Tortuga Rectangulo Foco E27-4267",
		description: `La combinación perfecta entre iluminación y diseño. Esta lámpara le dará vida a tus espacios para que puedas aprovecharlos al máximo. Además, podrás personalizar tus lugares preferidos y darles un detalle distintivo.

      Iluminá tus espacios
      Este modelo es apto para focos con tecnología led, que además de contribuir al cuidado del ambiente, duran más tiempo y te permiten ahorrar hasta un 90 % más que las fuentes de luz convencionales.`,
		price: 1564,
		img: [
			"https://http2.mlstatic.com/D_NQ_NP_938542-MLA46857329422_072021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_661681-MLA46857353334_072021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_703445-MLA46857266911_072021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_696436-MLA46857329427_072021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_937765-MLA46857329431_072021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_824046-MLA46857353342_072021-O.webp",
		],
		stock: 165,
		category: "hogar",
		selled: 422,
		rate: 0,
		opinions: [],
	},
	{
		id: 39,
		title: "Panel Embutir 6w Led Redondo Cuadrado Acero Platil Pack X2u",
		description: `PANEL LED6W 220V APLICAR REDONDO o CUADRADO ACERO PLATIL PACK X 2U.

    En esta publicación puede elegir color de la luz:
    -Calido
    -Neutro
    -Frío
    
    REEMPLAZO DE LUMINARIAS DE TECHO, PLAFONES Y APLIQUES`,
		price: 2754,
		img: [
			"https://http2.mlstatic.com/D_NQ_NP_975406-MLA43645665829_102020-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_746955-MLA43645655830_102020-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_691302-MLA42514857656_072020-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_805984-MLA43645662696_102020-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_664257-MLA43645665654_102020-O.webp",
		],
		stock: 36,
		category: "hogar",
		selled: 14,
		rate: 0,
		opinions: [],
	},
	{
		id: 40,
		title: "Panel Plafon Aplicar 6w Led Redondo - Cuadrado Acero Platil",
		description: `PANEL LED 18W 220V APLICAR REDONDO ACERO
    En esta publicación puede elegir color de la luz:
    -Calido
    -Neutro
    -Frío
    REEMPLAZO DE LUMINARIAS DE TECHO, PLAFONES Y APLIQUES
    `,
		price: 1164,
		img: [
			"https://http2.mlstatic.com/D_NQ_NP_600099-MLA43645820851_102020-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_713684-MLA41939873654_052020-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_851890-MLA41939868327_052020-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_687381-MLA41939863499_052020-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_629307-MLA41939872215_052020-O.webp",
		],
		stock: 33,
		category: "hogar",
		selled: 25,
		rate: 0,
		opinions: [],
	},
	{
		id: 41,
		title:
			"Lámpara de techo Ferrolux C-1003 color negro texturado 220V4 unidades",
		description: `Desde sus inicios en el año 1975, Ferrolux se ha dedicado especialmente al diseño, desarrollo, fabricación y comercialización de artefactos de iluminación. Trabajando en función de la calidad y la innovación e incorporando las últimas tecnologías y optimizando los procesos de producción, se fue forjando como marca líder en el mercado argentino. Así, con el paso del tiempo, fue convirtiéndose en una de las empresas fabricantes más confiables y seguras.`,
		price: 1664,
		img: [
			"https://http2.mlstatic.com/D_NQ_NP_931663-MLA41764395663_052020-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_950662-MLA41764733461_052020-O.webp",
		],
		stock: 144,
		category: "habitacion",
		selled: 32,
		rate: 0,
		opinions: [],
	},
	{
		id: 42,
		title: "Lampara Aplique Spot Pared 1 Luz Minimalista Apto Led",
		description: `La combinación perfecta entre iluminación y diseño. Esta lámpara le dará vida a tus espacios para que puedas aprovecharlos al máximo. Además, podrás personalizar tus lugares preferidos y darles un detalle distintivo.

      Iluminá tus espacios
      Este modelo es apto para focos con tecnología led, que además de contribuir al cuidado del ambiente, duran más tiempo y te permiten ahorrar hasta un 90 % más que las fuentes de luz convencionales.`,
		price: 2064,
		img: [
			"https://http2.mlstatic.com/D_NQ_NP_826483-MLA52163149321_102022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_972304-MLA52163128395_102022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_834763-MLA52163092517_102022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_978812-MLA50709555574_072022-O.webp",
		],
		stock: 63,
		category: "habitacion",
		selled: 13,
		rate: 0,
		opinions: [],
	},
	{
		id: 43,
		title: "Lampara Aplique Spot Metalico 1 Luz Tulipa Vidrio Apto Led",
		description: `La combinación perfecta entre iluminación y diseño. Esta lámpara le dará vida a tus espacios para que puedas aprovecharlos al máximo. Además, podrás personalizar tus lugares preferidos y darles un detalle distintivo.

      Iluminá tus espacios
      Este modelo es apto para focos con tecnología led, que además de contribuir al cuidado del ambiente, duran más tiempo y te permiten ahorrar hasta un 90 % más que las fuentes de luz convencionales.`,
		price: 1564,
		img: [
			"https://http2.mlstatic.com/D_NQ_NP_611264-MLA52185026351_102022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_799015-MLA52183588984_102022-O.webp",
		],
		stock: 61,
		category: "habitacion",
		selled: 22,
		rate: 0,
		opinions: [],
	},
	{
		id: 44,
		title: "Lampara Aplique Pared Minimalista Apto Led",
		description: `LAMPARA APLIQUE PARED ESTILO MINIMALISTA

    *NO INCLUYE FOCO*
    
    Características:
    Material: Chapa galvanizada
    Medidas: 23cm x 12cm
    Colores: Negro / Blanco / Cobre
    Alimentación: 220v
    Portalámparas: 1xE27 Apto Led
    Tipo de Soporte: Pared
    Modelo: AP-08`,
		price: 2069,
		img: [
			"https://http2.mlstatic.com/D_NQ_NP_717477-MLA51920235205_102022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_686749-MLA52069640051_102022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_952198-MLA51920134726_102022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_889992-MLA51920206314_102022-O.webp",
		],
		stock: 27,
		category: "habitacion",
		selled: 46,
		rate: 0,
		opinions: [],
	},
	{
		id: 45,
		title: "Colgante De 3 Luces Con Pantallas De Arpillera Led",
		description: `La combinación perfecta entre iluminación y diseño. Esta lámpara le dará vida a tus espacios para que puedas aprovecharlos al máximo. Además, podrás personalizar tus lugares preferidos y darles un detalle distintivo.

      Iluminá tus espacios
      Este modelo es apto para focos con tecnología led, que además de contribuir al cuidado del ambiente, duran más tiempo y te permiten ahorrar hasta un 90 % más que las fuentes de luz convencionales.`,
		price: 8190,
		img: [
			"https://http2.mlstatic.com/D_NQ_NP_955500-MLA32482243372_102019-O.webp",
		],
		stock: 63,
		category: "habitacion",
		selled: 93,
		rate: 0,
		opinions: [],
	},
	{
		id: 46,
		title: "Colgante 4 Luces Araña Pantallas Colores",
		description: `La combinación perfecta entre iluminación y diseño. Esta lámpara le dará vida a tus espacios para que puedas aprovecharlos al máximo. Además, podrás personalizar tus lugares preferidos y darles un detalle distintivo.

      Iluminá tus espacios
      Este modelo es apto para focos con tecnología led, que además de contribuir al cuidado del ambiente, duran más tiempo y te permiten ahorrar hasta un 90 % más que las fuentes de luz convencionales.`,
		price: 9199,
		img: [
			"https://http2.mlstatic.com/D_NQ_NP_809593-MLA47398190965_092021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_662173-MLA47398331189_092021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_792643-MLA47398372070_092021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_663277-MLA47398225731_092021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_631164-MLA47398195964_092021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_887688-MLA47398352145_092021-O.webp",
		],
		stock: 77,
		category: "habitacion",
		selled: 18,
		rate: 0,
		opinions: [],
	},
	{
		id: 47,
		title: "Aplique Barral 4 Luces Con Lamparas",
		description: `La combinación perfecta entre iluminación y diseño. Esta lámpara le dará vida a tus espacios para que puedas aprovecharlos al máximo. Además, podrás personalizar tus lugares preferidos y darles un detalle distintivo.

      Iluminá tus espacios
      Este modelo es apto para focos con tecnología led, que además de contribuir al cuidado del ambiente, duran más tiempo y te permiten ahorrar hasta un 90 % más que las fuentes de luz convencionales.`,
		price: 8199,
		img: [
			"https://http2.mlstatic.com/D_NQ_NP_635770-MLA49774577947_042022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_915931-MLA49774708235_042022-O.webp",
		],
		stock: 89,
		category: "habitacion",
		selled: 14,
		rate: 0,
		opinions: [],
	},
	{
		id: 48,
		title: "Velador Luna Llena Impreso 3d Eco Sustentable Led 16 Colores",
		description: `Lámpara Gadnic Luna 13cm 16 Colores RGB + Blanco Luz Cálida y Fría

    ACERCA DE ÉSTE PRODUCTO:
    
    ¡Descubrí las nuevas lámparas lunares impresas en 3D con PLA Biodegradable Gadnic!
    
    ¿Está buscando algo para agregar al estilo y la decoración de su hogar? ¿Algo que sea verdaderamente único y perfecto como punto focal? Nada encaja mejor que esta lámpara de luna 3D.`,
		price: 6479,
		img: [
			"https://http2.mlstatic.com/D_NQ_NP_720693-MLA50184297436_062022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_784618-MLA50184297440_062022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_638838-MLA50184297438_062022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_735465-MLA50184297431_062022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_997285-MLA50184297432_062022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_754833-MLA50184297435_062022-O.webp",
		],
		stock: 15,
		category: "habitacion",
		selled: 215,
		rate: 0,
		opinions: [],
	},
	{
		id: 49,
		title: "Velador Pinza Escritorio Pixar Flexible Broche Clip Oficina",
		description: `CARACTERÍSTICAS:

    -Directo 220V.
    -Interruptor de on/off
    -Altura aproximada: 30cm
    -Totalmente metálica, esmaltadas y horneadas
    -Portalámpara de porcelana rosca común (A27)
    -Apta para lámparas comunes, led y bajo consumo.
    -El Broche posee fácil adaptación en cualquier superficie lo cual permite colocarlo donde quieras
    -CABEZAL CON GIRO DE 360º`,
		price: 1559,
		img: [
			"https://http2.mlstatic.com/D_NQ_NP_729694-MLA49284686655_032022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_844047-MLA47796537501_102021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_908198-MLA49170266764_022022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_623760-MLA49170287719_022022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_640299-MLA49170310558_022022-O.webp",
		],
		stock: 83,
		category: "habitacion",
		selled: 16,
		rate: 0,
		opinions: [],
	},
	{
		id: 50,
		title: "Lampara Escritorio Dibujo Técnico Classic Doble Brazo Negra",
		description: `La combinación perfecta entre iluminación y diseño. Esta lámpara le dará vida a tus espacios para que puedas aprovecharlos al máximo. Además, podrás personalizar tus lugares preferidos y darles un detalle distintivo.

      Iluminá tus espacios
      Este modelo es apto para focos con tecnología led, que además de contribuir al cuidado del ambiente, duran más tiempo y te permiten ahorrar hasta un 90 % más que las fuentes de luz convencionales.`,
		price: 9850,
		img: [
			"https://http2.mlstatic.com/D_NQ_NP_721791-MLA49610586321_042022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_730460-MLA47789457804_102021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_881537-MLA49610708467_042022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_606742-MLA47789487630_102021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_875864-MLA50874314602_072022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_831215-MLA50874373557_072022-O.webp",
		],
		stock: 15,
		category: "habitacion",
		selled: 125,
		rate: 0,
		opinions: [],
	},
	{
		id: 51,
		title:
			"Lámpara de techo Ferrolux C-1003 color negro texturado 220V4 unidades",
		description: `Desde sus inicios en el año 1975, Ferrolux se ha dedicado especialmente al diseño, desarrollo, fabricación y comercialización de artefactos de iluminación. Trabajando en función de la calidad y la innovación e incorporando las últimas tecnologías y optimizando los procesos de producción, se fue forjando como marca líder en el mercado argentino. Así, con el paso del tiempo, fue convirtiéndose en una de las empresas fabricantes más confiables y seguras.`,
		price: 1664,
		img: [
			"https://http2.mlstatic.com/D_NQ_NP_931663-MLA41764395663_052020-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_950662-MLA41764733461_052020-O.webp",
		],
		stock: 144,
		category: "habitacion",
		selled: 32,
		rate: 0,
		opinions: [],
	},
	{
		id: 52,
		title: "Lampara Aplique Spot Pared 1 Luz Minimalista Apto Led",
		description: `La combinación perfecta entre iluminación y diseño. Esta lámpara le dará vida a tus espacios para que puedas aprovecharlos al máximo. Además, podrás personalizar tus lugares preferidos y darles un detalle distintivo.

      Iluminá tus espacios
      Este modelo es apto para focos con tecnología led, que además de contribuir al cuidado del ambiente, duran más tiempo y te permiten ahorrar hasta un 90 % más que las fuentes de luz convencionales.`,
		price: 2064,
		img: [
			"https://http2.mlstatic.com/D_NQ_NP_826483-MLA52163149321_102022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_972304-MLA52163128395_102022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_834763-MLA52163092517_102022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_978812-MLA50709555574_072022-O.webp",
		],
		stock: 63,
		category: "habitacion",
		selled: 13,
		rate: 0,
		opinions: [],
	},
	{
		id: 53,
		title: "Lampara Aplique Spot Metalico 1 Luz Tulipa Vidrio Apto Led",
		description: `La combinación perfecta entre iluminación y diseño. Esta lámpara le dará vida a tus espacios para que puedas aprovecharlos al máximo. Además, podrás personalizar tus lugares preferidos y darles un detalle distintivo.

      Iluminá tus espacios
      Este modelo es apto para focos con tecnología led, que además de contribuir al cuidado del ambiente, duran más tiempo y te permiten ahorrar hasta un 90 % más que las fuentes de luz convencionales.`,
		price: 1564,
		img: [
			"https://http2.mlstatic.com/D_NQ_NP_611264-MLA52185026351_102022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_799015-MLA52183588984_102022-O.webp",
		],
		stock: 61,
		category: "habitacion",
		selled: 22,
		rate: 0,
		opinions: [],
	},
	{
		id: 54,
		title: "Lampara Aplique Pared Minimalista Apto Led",
		description: `LAMPARA APLIQUE PARED ESTILO MINIMALISTA

    *NO INCLUYE FOCO*
    
    Características:
    Material: Chapa galvanizada
    Medidas: 23cm x 12cm
    Colores: Negro / Blanco / Cobre
    Alimentación: 220v
    Portalámparas: 1xE27 Apto Led
    Tipo de Soporte: Pared
    Modelo: AP-08`,
		price: 2069,
		img: [
			"https://http2.mlstatic.com/D_NQ_NP_717477-MLA51920235205_102022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_686749-MLA52069640051_102022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_952198-MLA51920134726_102022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_889992-MLA51920206314_102022-O.webp",
		],
		stock: 27,
		category: "habitacion",
		selled: 46,
		rate: 0,
		opinions: [],
	},
	{
		id: 55,
		title: "Colgante De 3 Luces Con Pantallas De Arpillera Led",
		description: `La combinación perfecta entre iluminación y diseño. Esta lámpara le dará vida a tus espacios para que puedas aprovecharlos al máximo. Además, podrás personalizar tus lugares preferidos y darles un detalle distintivo.

      Iluminá tus espacios
      Este modelo es apto para focos con tecnología led, que además de contribuir al cuidado del ambiente, duran más tiempo y te permiten ahorrar hasta un 90 % más que las fuentes de luz convencionales.`,
		price: 8190,
		img: [
			"https://http2.mlstatic.com/D_NQ_NP_955500-MLA32482243372_102019-O.webp",
		],
		stock: 63,
		category: "habitacion",
		selled: 93,
		rate: 0,
		opinions: [],
	},
	{
		id: 56,
		title: "Colgante 4 Luces Araña Pantallas Colores",
		description: `La combinación perfecta entre iluminación y diseño. Esta lámpara le dará vida a tus espacios para que puedas aprovecharlos al máximo. Además, podrás personalizar tus lugares preferidos y darles un detalle distintivo.

      Iluminá tus espacios
      Este modelo es apto para focos con tecnología led, que además de contribuir al cuidado del ambiente, duran más tiempo y te permiten ahorrar hasta un 90 % más que las fuentes de luz convencionales.`,
		price: 9199,
		img: [
			"https://http2.mlstatic.com/D_NQ_NP_809593-MLA47398190965_092021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_662173-MLA47398331189_092021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_792643-MLA47398372070_092021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_663277-MLA47398225731_092021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_631164-MLA47398195964_092021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_887688-MLA47398352145_092021-O.webp",
		],
		stock: 77,
		category: "habitacion",
		selled: 18,
		rate: 0,
		opinions: [],
	},
	{
		id: 57,
		title: "Aplique Barral 4 Luces Con Lamparas",
		description: `La combinación perfecta entre iluminación y diseño. Esta lámpara le dará vida a tus espacios para que puedas aprovecharlos al máximo. Además, podrás personalizar tus lugares preferidos y darles un detalle distintivo.

      Iluminá tus espacios
      Este modelo es apto para focos con tecnología led, que además de contribuir al cuidado del ambiente, duran más tiempo y te permiten ahorrar hasta un 90 % más que las fuentes de luz convencionales.`,
		price: 8199,
		img: [
			"https://http2.mlstatic.com/D_NQ_NP_635770-MLA49774577947_042022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_915931-MLA49774708235_042022-O.webp",
		],
		stock: 89,
		category: "habitacion",
		selled: 14,
		rate: 0,
		opinions: [],
	},
	{
		id: 58,
		title: "Velador Luna Llena Impreso 3d Eco Sustentable Led 16 Colores",
		description: `Lámpara Gadnic Luna 13cm 16 Colores RGB + Blanco Luz Cálida y Fría

    ACERCA DE ÉSTE PRODUCTO:
    
    ¡Descubrí las nuevas lámparas lunares impresas en 3D con PLA Biodegradable Gadnic!
    
    ¿Está buscando algo para agregar al estilo y la decoración de su hogar? ¿Algo que sea verdaderamente único y perfecto como punto focal? Nada encaja mejor que esta lámpara de luna 3D.`,
		price: 6479,
		img: [
			"https://http2.mlstatic.com/D_NQ_NP_720693-MLA50184297436_062022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_784618-MLA50184297440_062022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_638838-MLA50184297438_062022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_735465-MLA50184297431_062022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_997285-MLA50184297432_062022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_754833-MLA50184297435_062022-O.webp",
		],
		stock: 15,
		category: "habitacion",
		selled: 215,
		rate: 0,
		opinions: [],
	},
	{
		id: 59,
		title: "Velador Pinza Escritorio Pixar Flexible Broche Clip Oficina",
		description: `CARACTERÍSTICAS:

    -Directo 220V.
    -Interruptor de on/off
    -Altura aproximada: 30cm
    -Totalmente metálica, esmaltadas y horneadas
    -Portalámpara de porcelana rosca común (A27)
    -Apta para lámparas comunes, led y bajo consumo.
    -El Broche posee fácil adaptación en cualquier superficie lo cual permite colocarlo donde quieras
    -CABEZAL CON GIRO DE 360º`,
		price: 1559,
		img: [
			"https://http2.mlstatic.com/D_NQ_NP_729694-MLA49284686655_032022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_844047-MLA47796537501_102021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_908198-MLA49170266764_022022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_623760-MLA49170287719_022022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_640299-MLA49170310558_022022-O.webp",
		],
		stock: 83,
		category: "habitacion",
		selled: 16,
		rate: 0,
		opinions: [],
	},
	{
		id: 60,
		title: "Lampara Escritorio Dibujo Técnico Classic Doble Brazo Negra",
		description: `La combinación perfecta entre iluminación y diseño. Esta lámpara le dará vida a tus espacios para que puedas aprovecharlos al máximo. Además, podrás personalizar tus lugares preferidos y darles un detalle distintivo.

      Iluminá tus espacios
      Este modelo es apto para focos con tecnología led, que además de contribuir al cuidado del ambiente, duran más tiempo y te permiten ahorrar hasta un 90 % más que las fuentes de luz convencionales.`,
		price: 9850,
		img: [
			"https://http2.mlstatic.com/D_NQ_NP_721791-MLA49610586321_042022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_730460-MLA47789457804_102021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_881537-MLA49610708467_042022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_606742-MLA47789487630_102021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_875864-MLA50874314602_072022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_831215-MLA50874373557_072022-O.webp",
		],
		stock: 15,
		category: "habitacion",
		selled: 125,
		rate: 0,
		opinions: [],
	},
];

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

// Métodos GET

const getProducts = async () => {
	const resQuery = collection(firestore, "products");
	const snapshot = await getDocs(resQuery);

	const data = snapshot.docs.map((item) => ({ id: item.id, ...item.data() }));
	return data;
};
const getFilterProducts = async (category) => {
	const resQuery = query(
		collection(firestore, "products"),
		where("category", "==", category),
	);
	const snapshot = await getDocs(resQuery);

	const data = snapshot.docs.map((item) => ({ id: item.id, ...item.data() }));
	return data;
};
const getProduct = async (productId) => {
	const resQuery = doc(firestore, "products", productId);
	const snapshot = await getDoc(resQuery);

	const data = { id: snapshot.id, ...snapshot.data() };
	if (!data.title) {
		return "El producto solicitado no existe.";
	}
	return data;
};

const getFavouriteProducts = async () => {
	const refQuery = doc(firestore, "favouriteItems", "8qHOZimOypDaaGtCkY6s");
	const itemListSnapshot = await getDoc(refQuery);

	const itemListData = [];

	for (const itemId of itemListSnapshot.data().itemsId) {
		const item = await getProduct(itemId);
		itemListData.push(item);
	}

	return itemListData;
};

const getOffers = async () => {
	const refQuery = doc(firestore, "offers", "uwNNETD5z3M4OJ9Jw20q");
	const itemListSnapshot = await getDoc(refQuery);

	return itemListSnapshot.data().list;
};

const getCarouselImgs = async () => {
	const resQuery = collection(firestore, "carouselImg");
	const snapshot = await getDocs(resQuery);

	const data = snapshot.docs.map((item) => ({ id: item.id, ...item.data() }));
	return data;
};

const getBgCategory = async (category) => {
	const imgs = await getCarouselImgs();
	const img = imgs.find((item) => item.name === category);
	return img.img;
};

// Métodos POST y PUT

const updateStock = (products) => {
	products.forEach(({ id, stock, count }) => {
		const query = doc(firestore, "products", id);
		updateDoc(query, { stock: stock - count });
	});
};

const sendOrder = async (orderData) => {
	const resQuery = collection(firestore, "orders");
	const response = await addDoc(resQuery, orderData);
	updateStock(orderData.items);
	return response.id;
};

const sendContactData = async (contactData) => {
	const resQuery = collection(firestore, "messages");
	const response = await addDoc(resQuery, contactData);

	return response.id;
};

const updateProductsList = async () => {
	const updatedData = products.map((item) => {
		delete item.id;
		return item;
	});
	const resQuery = collection(firestore, "products");

	for (const item of updatedData) {
		await addDoc(resQuery, item);
	}
	console.log("Productos subidos con éxito");
};

const deleteFavouriteProduct = async (itemId) => {
	const refQuery = doc(firestore, "favouriteItems", "8qHOZimOypDaaGtCkY6s");
	const snapshot = await getDoc(refQuery);

	const filterData = snapshot
		.data()
		.itemsId.filter((productoId) => productoId !== itemId);

	updateDoc(refQuery, { itemsId: filterData });
};

const addProductToFavourite = async (id) => {
	const refQuery = doc(firestore, "favouriteItems", "8qHOZimOypDaaGtCkY6s");
	const snapshot = await getDoc(refQuery);

	const updatedData = [...snapshot.data().itemsId, id];

	updateDoc(refQuery, { itemsId: updatedData });
};

const isInFavourite = async (id) => {
	const refQuery = doc(firestore, "favouriteItems", "8qHOZimOypDaaGtCkY6s");
	const snapshot = await getDoc(refQuery);

	return snapshot.data().itemsId.includes(id);
};

export {
	firestore,
	getProduct,
	getFilterProducts,
	getProducts,
	getFavouriteProducts,
	sendOrder,
	sendContactData,
	updateProductsList,
	deleteFavouriteProduct,
	addProductToFavourite,
	isInFavourite,
	getOffers,
	getCarouselImgs,
	getBgCategory,
};

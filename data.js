// Oxford 3000 - A1, A2, B1 seviyeleri
const WORD_LIST = [
  {
    "id": "a1_0001",
    "en": "a/an",
    "pos": "det.",
    "tr": "bir",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0002",
    "en": "about",
    "pos": "prep./adv.",
    "tr": "hakkında / yaklaşık",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0003",
    "en": "above",
    "pos": "prep./adv.",
    "tr": "üzerinde, yukarıda",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0004",
    "en": "across",
    "pos": "prep./adv.",
    "tr": "karşısında, karşıdan karşıya",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0005",
    "en": "action",
    "pos": "n.",
    "tr": "eylem, hareket",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0006",
    "en": "activity",
    "pos": "n.",
    "tr": "etkinlik",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0007",
    "en": "actor",
    "pos": "n.",
    "tr": "erkek oyuncu",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0008",
    "en": "actress",
    "pos": "n.",
    "tr": "kadın oyuncu",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0009",
    "en": "add",
    "pos": "v.",
    "tr": "eklemek",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0010",
    "en": "address",
    "pos": "n.",
    "tr": "adres",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0011",
    "en": "adult",
    "pos": "n.",
    "tr": "yetişkin",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0012",
    "en": "advice",
    "pos": "n.",
    "tr": "tavsiye",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0013",
    "en": "afraid",
    "pos": "adj.",
    "tr": "korkmuş",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0014",
    "en": "after",
    "pos": "prep.",
    "tr": "-den sonra",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0015",
    "en": "afternoon",
    "pos": "n.",
    "tr": "öğleden sonra",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0016",
    "en": "again",
    "pos": "adv.",
    "tr": "tekrar",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0017",
    "en": "age",
    "pos": "n.",
    "tr": "yaş",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0018",
    "en": "ago",
    "pos": "adv.",
    "tr": "önce",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0019",
    "en": "agree",
    "pos": "v.",
    "tr": "aynı fikirde olmak, kabul etmek",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0020",
    "en": "air",
    "pos": "n.",
    "tr": "hava",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0021",
    "en": "airport",
    "pos": "n.",
    "tr": "havalimanı",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0022",
    "en": "all",
    "pos": "det./pron.",
    "tr": "hepsi, tüm",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0023",
    "en": "also",
    "pos": "adv.",
    "tr": "ayrıca, de/da",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0024",
    "en": "always",
    "pos": "adv.",
    "tr": "her zaman",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0025",
    "en": "amazing",
    "pos": "adj.",
    "tr": "şaşırtıcı, harika",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0026",
    "en": "and",
    "pos": "conj.",
    "tr": "ve",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0027",
    "en": "angry",
    "pos": "adj.",
    "tr": "kızgın",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0028",
    "en": "animal",
    "pos": "n.",
    "tr": "hayvan",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0029",
    "en": "another",
    "pos": "det./pron.",
    "tr": "bir başka",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0030",
    "en": "answer",
    "pos": "n./v.",
    "tr": "cevap, cevaplamak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0031",
    "en": "any",
    "pos": "det./pron.",
    "tr": "hiç, herhangi",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0032",
    "en": "anyone",
    "pos": "pron.",
    "tr": "herhangi biri, kimse",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0033",
    "en": "anything",
    "pos": "pron.",
    "tr": "herhangi bir şey",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0034",
    "en": "apartment",
    "pos": "n.",
    "tr": "daire",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0035",
    "en": "apple",
    "pos": "n.",
    "tr": "elma",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0036",
    "en": "April",
    "pos": "n.",
    "tr": "Nisan",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0037",
    "en": "area",
    "pos": "n.",
    "tr": "alan, bölge",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0038",
    "en": "arm",
    "pos": "n.",
    "tr": "kol",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0039",
    "en": "around",
    "pos": "prep./adv.",
    "tr": "etrafında, yaklaşık",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0040",
    "en": "arrive",
    "pos": "v.",
    "tr": "varmak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0041",
    "en": "art",
    "pos": "n.",
    "tr": "sanat",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0042",
    "en": "article",
    "pos": "n.",
    "tr": "makale",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0043",
    "en": "artist",
    "pos": "n.",
    "tr": "sanatçı",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0044",
    "en": "as",
    "pos": "prep.",
    "tr": "olarak, gibi",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0045",
    "en": "ask",
    "pos": "v.",
    "tr": "sormak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0046",
    "en": "at",
    "pos": "prep.",
    "tr": "-de, -da",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0047",
    "en": "August",
    "pos": "n.",
    "tr": "Ağustos",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0048",
    "en": "aunt",
    "pos": "n.",
    "tr": "teyze, hala",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0049",
    "en": "autumn",
    "pos": "n.",
    "tr": "sonbahar",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0050",
    "en": "away",
    "pos": "adv.",
    "tr": "uzakta",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0051",
    "en": "baby",
    "pos": "n.",
    "tr": "bebek",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0052",
    "en": "back",
    "pos": "n./adv.",
    "tr": "sırt / geri",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0053",
    "en": "bad",
    "pos": "adj.",
    "tr": "kötü",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0054",
    "en": "bag",
    "pos": "n.",
    "tr": "çanta",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0055",
    "en": "ball",
    "pos": "n.",
    "tr": "top",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0056",
    "en": "banana",
    "pos": "n.",
    "tr": "muz",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0057",
    "en": "band",
    "pos": "n.",
    "tr": "müzik grubu",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0058",
    "en": "bank",
    "pos": "n.",
    "tr": "banka",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0059",
    "en": "bath",
    "pos": "n.",
    "tr": "banyo, küvet",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0060",
    "en": "bathroom",
    "pos": "n.",
    "tr": "banyo (oda)",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0061",
    "en": "be",
    "pos": "v.",
    "tr": "olmak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0062",
    "en": "beach",
    "pos": "n.",
    "tr": "plaj",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0063",
    "en": "beautiful",
    "pos": "adj.",
    "tr": "güzel",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0064",
    "en": "because",
    "pos": "conj.",
    "tr": "çünkü",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0065",
    "en": "become",
    "pos": "v.",
    "tr": "olmak, dönüşmek",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0066",
    "en": "bed",
    "pos": "n.",
    "tr": "yatak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0067",
    "en": "bedroom",
    "pos": "n.",
    "tr": "yatak odası",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0068",
    "en": "beer",
    "pos": "n.",
    "tr": "bira",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0069",
    "en": "before",
    "pos": "prep.",
    "tr": "önce",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0070",
    "en": "begin",
    "pos": "v.",
    "tr": "başlamak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0071",
    "en": "beginning",
    "pos": "n.",
    "tr": "başlangıç",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0072",
    "en": "behind",
    "pos": "prep.",
    "tr": "arkasında",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0073",
    "en": "believe",
    "pos": "v.",
    "tr": "inanmak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0074",
    "en": "below",
    "pos": "prep.",
    "tr": "altında",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0075",
    "en": "best",
    "pos": "adj.",
    "tr": "en iyi",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0076",
    "en": "better",
    "pos": "adj.",
    "tr": "daha iyi",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0077",
    "en": "between",
    "pos": "prep.",
    "tr": "arasında",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0078",
    "en": "bicycle",
    "pos": "n.",
    "tr": "bisiklet",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0079",
    "en": "big",
    "pos": "adj.",
    "tr": "büyük",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0080",
    "en": "bike",
    "pos": "n.",
    "tr": "bisiklet",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0081",
    "en": "bill",
    "pos": "n.",
    "tr": "fatura, hesap",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0082",
    "en": "bird",
    "pos": "n.",
    "tr": "kuş",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0083",
    "en": "birthday",
    "pos": "n.",
    "tr": "doğum günü",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0084",
    "en": "black",
    "pos": "adj./n.",
    "tr": "siyah",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0085",
    "en": "blog",
    "pos": "n.",
    "tr": "blog",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0086",
    "en": "blonde",
    "pos": "adj.",
    "tr": "sarışın",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0087",
    "en": "blue",
    "pos": "adj./n.",
    "tr": "mavi",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0088",
    "en": "boat",
    "pos": "n.",
    "tr": "tekne",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0089",
    "en": "body",
    "pos": "n.",
    "tr": "vücut",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0090",
    "en": "book",
    "pos": "n.",
    "tr": "kitap",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0091",
    "en": "boot",
    "pos": "n.",
    "tr": "bot, çizme",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0092",
    "en": "bored",
    "pos": "adj.",
    "tr": "sıkılmış",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0093",
    "en": "boring",
    "pos": "adj.",
    "tr": "sıkıcı",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0094",
    "en": "born",
    "pos": "v.",
    "tr": "doğmak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0095",
    "en": "both",
    "pos": "det./pron.",
    "tr": "her ikisi",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0096",
    "en": "bottle",
    "pos": "n.",
    "tr": "şişe",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0097",
    "en": "box",
    "pos": "n.",
    "tr": "kutu",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0098",
    "en": "boy",
    "pos": "n.",
    "tr": "erkek çocuk",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0099",
    "en": "boyfriend",
    "pos": "n.",
    "tr": "erkek arkadaş",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0100",
    "en": "bread",
    "pos": "n.",
    "tr": "ekmek",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0101",
    "en": "break",
    "pos": "v./n.",
    "tr": "kırmak / mola",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0102",
    "en": "breakfast",
    "pos": "n.",
    "tr": "kahvaltı",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0103",
    "en": "bring",
    "pos": "v.",
    "tr": "getirmek",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0104",
    "en": "brother",
    "pos": "n.",
    "tr": "erkek kardeş",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0105",
    "en": "brown",
    "pos": "adj./n.",
    "tr": "kahverengi",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0106",
    "en": "build",
    "pos": "v.",
    "tr": "inşa etmek",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0107",
    "en": "building",
    "pos": "n.",
    "tr": "bina",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0108",
    "en": "bus",
    "pos": "n.",
    "tr": "otobüs",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0109",
    "en": "business",
    "pos": "n.",
    "tr": "iş, ticaret",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0110",
    "en": "busy",
    "pos": "adj.",
    "tr": "meşgul",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0111",
    "en": "but",
    "pos": "conj.",
    "tr": "ama",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0112",
    "en": "butter",
    "pos": "n.",
    "tr": "tereyağı",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0113",
    "en": "buy",
    "pos": "v.",
    "tr": "satın almak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0114",
    "en": "by",
    "pos": "prep.",
    "tr": "ile, tarafından",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0115",
    "en": "bye",
    "pos": "exclam.",
    "tr": "hoşça kal",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0116",
    "en": "cafe",
    "pos": "n.",
    "tr": "kafe",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0117",
    "en": "cake",
    "pos": "n.",
    "tr": "pasta, kek",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0118",
    "en": "call",
    "pos": "v./n.",
    "tr": "aramak / arama",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0119",
    "en": "camera",
    "pos": "n.",
    "tr": "fotoğraf makinesi",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0120",
    "en": "can",
    "pos": "modal v.",
    "tr": "-ebilmek",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0121",
    "en": "cannot",
    "pos": "modal v.",
    "tr": "yapamamak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0122",
    "en": "capital",
    "pos": "n.",
    "tr": "başkent",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0123",
    "en": "car",
    "pos": "n.",
    "tr": "araba",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0124",
    "en": "card",
    "pos": "n.",
    "tr": "kart",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0125",
    "en": "career",
    "pos": "n.",
    "tr": "kariyer",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0126",
    "en": "carrot",
    "pos": "n.",
    "tr": "havuç",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0127",
    "en": "carry",
    "pos": "v.",
    "tr": "taşımak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0128",
    "en": "cat",
    "pos": "n.",
    "tr": "kedi",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0129",
    "en": "CD",
    "pos": "n.",
    "tr": "CD",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0130",
    "en": "cent",
    "pos": "n.",
    "tr": "sent",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0131",
    "en": "centre",
    "pos": "n.",
    "tr": "merkez",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0132",
    "en": "century",
    "pos": "n.",
    "tr": "yüzyıl",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0133",
    "en": "chair",
    "pos": "n.",
    "tr": "sandalye",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0134",
    "en": "change",
    "pos": "v./n.",
    "tr": "değişmek / değişiklik",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0135",
    "en": "chart",
    "pos": "n.",
    "tr": "grafik, çizelge",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0136",
    "en": "cheap",
    "pos": "adj.",
    "tr": "ucuz",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0137",
    "en": "check",
    "pos": "v.",
    "tr": "kontrol etmek",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0138",
    "en": "cheese",
    "pos": "n.",
    "tr": "peynir",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0139",
    "en": "chicken",
    "pos": "n.",
    "tr": "tavuk",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0140",
    "en": "child",
    "pos": "n.",
    "tr": "çocuk",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0141",
    "en": "chocolate",
    "pos": "n.",
    "tr": "çikolata",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0142",
    "en": "choose",
    "pos": "v.",
    "tr": "seçmek",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0143",
    "en": "cinema",
    "pos": "n.",
    "tr": "sinema",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0144",
    "en": "city",
    "pos": "n.",
    "tr": "şehir",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0145",
    "en": "class",
    "pos": "n.",
    "tr": "sınıf, ders",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0146",
    "en": "classroom",
    "pos": "n.",
    "tr": "sınıf (mekân)",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0147",
    "en": "clean",
    "pos": "adj./v.",
    "tr": "temiz / temizlemek",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0148",
    "en": "climb",
    "pos": "v.",
    "tr": "tırmanmak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0149",
    "en": "clock",
    "pos": "n.",
    "tr": "saat (duvar)",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0150",
    "en": "close",
    "pos": "v.",
    "tr": "kapatmak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0151",
    "en": "clothes",
    "pos": "n.",
    "tr": "kıyafetler",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0152",
    "en": "club",
    "pos": "n.",
    "tr": "kulüp",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0153",
    "en": "coat",
    "pos": "n.",
    "tr": "palto",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0154",
    "en": "coffee",
    "pos": "n.",
    "tr": "kahve",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0155",
    "en": "cold",
    "pos": "adj./n.",
    "tr": "soğuk",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0156",
    "en": "college",
    "pos": "n.",
    "tr": "üniversite, kolej",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0157",
    "en": "colour",
    "pos": "n.",
    "tr": "renk",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0158",
    "en": "come",
    "pos": "v.",
    "tr": "gelmek",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0159",
    "en": "common",
    "pos": "adj.",
    "tr": "yaygın, ortak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0160",
    "en": "company",
    "pos": "n.",
    "tr": "şirket",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0161",
    "en": "compare",
    "pos": "v.",
    "tr": "karşılaştırmak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0162",
    "en": "complete",
    "pos": "adj./v.",
    "tr": "tam / tamamlamak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0163",
    "en": "computer",
    "pos": "n.",
    "tr": "bilgisayar",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0164",
    "en": "concert",
    "pos": "n.",
    "tr": "konser",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0165",
    "en": "conversation",
    "pos": "n.",
    "tr": "sohbet",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0166",
    "en": "cook",
    "pos": "v.",
    "tr": "pişirmek",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0167",
    "en": "cooking",
    "pos": "n.",
    "tr": "yemek pişirme",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0168",
    "en": "cool",
    "pos": "adj.",
    "tr": "serin, havalı",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0169",
    "en": "correct",
    "pos": "adj./v.",
    "tr": "doğru / düzeltmek",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0170",
    "en": "cost",
    "pos": "n./v.",
    "tr": "maliyet / mal olmak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0171",
    "en": "could",
    "pos": "modal v.",
    "tr": "-ebilirdi",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0172",
    "en": "country",
    "pos": "n.",
    "tr": "ülke",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0173",
    "en": "course",
    "pos": "n.",
    "tr": "kurs, ders",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0174",
    "en": "cousin",
    "pos": "n.",
    "tr": "kuzen",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0175",
    "en": "cow",
    "pos": "n.",
    "tr": "inek",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0176",
    "en": "cream",
    "pos": "n.",
    "tr": "krema",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0177",
    "en": "create",
    "pos": "v.",
    "tr": "yaratmak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0178",
    "en": "culture",
    "pos": "n.",
    "tr": "kültür",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0179",
    "en": "cup",
    "pos": "n.",
    "tr": "fincan",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0180",
    "en": "customer",
    "pos": "n.",
    "tr": "müşteri",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0181",
    "en": "cut",
    "pos": "v.",
    "tr": "kesmek",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0182",
    "en": "dad",
    "pos": "n.",
    "tr": "baba",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0183",
    "en": "dance",
    "pos": "v./n.",
    "tr": "dans etmek / dans",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0184",
    "en": "dancer",
    "pos": "n.",
    "tr": "dansçı",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0185",
    "en": "dancing",
    "pos": "n.",
    "tr": "dans etme",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0186",
    "en": "dangerous",
    "pos": "adj.",
    "tr": "tehlikeli",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0187",
    "en": "dark",
    "pos": "adj.",
    "tr": "karanlık",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0188",
    "en": "date",
    "pos": "n.",
    "tr": "tarih",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0189",
    "en": "daughter",
    "pos": "n.",
    "tr": "kız evlat",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0190",
    "en": "day",
    "pos": "n.",
    "tr": "gün",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0191",
    "en": "dear",
    "pos": "adj.",
    "tr": "sevgili",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0192",
    "en": "December",
    "pos": "n.",
    "tr": "Aralık",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0193",
    "en": "decide",
    "pos": "v.",
    "tr": "karar vermek",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0194",
    "en": "delicious",
    "pos": "adj.",
    "tr": "lezzetli",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0195",
    "en": "describe",
    "pos": "v.",
    "tr": "tarif etmek",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0196",
    "en": "description",
    "pos": "n.",
    "tr": "tanım, betimleme",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0197",
    "en": "design",
    "pos": "n./v.",
    "tr": "tasarım / tasarlamak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0198",
    "en": "desk",
    "pos": "n.",
    "tr": "masa (çalışma)",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0199",
    "en": "detail",
    "pos": "n.",
    "tr": "detay",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0200",
    "en": "dialogue",
    "pos": "n.",
    "tr": "diyalog",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0201",
    "en": "dictionary",
    "pos": "n.",
    "tr": "sözlük",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0202",
    "en": "die",
    "pos": "v.",
    "tr": "ölmek",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0203",
    "en": "diet",
    "pos": "n.",
    "tr": "diyet, beslenme",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0204",
    "en": "difference",
    "pos": "n.",
    "tr": "fark",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0205",
    "en": "different",
    "pos": "adj.",
    "tr": "farklı",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0206",
    "en": "difficult",
    "pos": "adj.",
    "tr": "zor",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0207",
    "en": "dinner",
    "pos": "n.",
    "tr": "akşam yemeği",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0208",
    "en": "dirty",
    "pos": "adj.",
    "tr": "kirli",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0209",
    "en": "discuss",
    "pos": "v.",
    "tr": "tartışmak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0210",
    "en": "dish",
    "pos": "n.",
    "tr": "yemek, tabak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0211",
    "en": "do",
    "pos": "v.",
    "tr": "yapmak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0212",
    "en": "doctor",
    "pos": "n.",
    "tr": "doktor",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0213",
    "en": "dog",
    "pos": "n.",
    "tr": "köpek",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0214",
    "en": "dollar",
    "pos": "n.",
    "tr": "dolar",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0215",
    "en": "door",
    "pos": "n.",
    "tr": "kapı",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0216",
    "en": "down",
    "pos": "adv./prep.",
    "tr": "aşağı",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0217",
    "en": "downstairs",
    "pos": "adv.",
    "tr": "alt katta",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0218",
    "en": "draw",
    "pos": "v.",
    "tr": "çizmek",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0219",
    "en": "dress",
    "pos": "n./v.",
    "tr": "elbise / giydirmek",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0220",
    "en": "drink",
    "pos": "n./v.",
    "tr": "içecek / içmek",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0221",
    "en": "drive",
    "pos": "v.",
    "tr": "araç kullanmak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0222",
    "en": "driver",
    "pos": "n.",
    "tr": "sürücü",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0223",
    "en": "during",
    "pos": "prep.",
    "tr": "süresince",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0224",
    "en": "DVD",
    "pos": "n.",
    "tr": "DVD",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0225",
    "en": "each",
    "pos": "det./pron.",
    "tr": "her biri",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0226",
    "en": "ear",
    "pos": "n.",
    "tr": "kulak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0227",
    "en": "early",
    "pos": "adj./adv.",
    "tr": "erken",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0228",
    "en": "east",
    "pos": "n./adj./adv.",
    "tr": "doğu",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0229",
    "en": "easy",
    "pos": "adj.",
    "tr": "kolay",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0230",
    "en": "eat",
    "pos": "v.",
    "tr": "yemek yemek",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0231",
    "en": "egg",
    "pos": "n.",
    "tr": "yumurta",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0232",
    "en": "eight",
    "pos": "number",
    "tr": "sekiz",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0233",
    "en": "eighteen",
    "pos": "number",
    "tr": "on sekiz",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0234",
    "en": "eighty",
    "pos": "number",
    "tr": "seksen",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0235",
    "en": "elephant",
    "pos": "n.",
    "tr": "fil",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0236",
    "en": "eleven",
    "pos": "number",
    "tr": "on bir",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0237",
    "en": "else",
    "pos": "adv.",
    "tr": "başka",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0238",
    "en": "email",
    "pos": "n./v.",
    "tr": "e-posta / e-posta göndermek",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0239",
    "en": "end",
    "pos": "n./v.",
    "tr": "son / bitirmek",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0240",
    "en": "enjoy",
    "pos": "v.",
    "tr": "keyif almak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0241",
    "en": "enough",
    "pos": "det./pron./adv.",
    "tr": "yeterli",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0242",
    "en": "euro",
    "pos": "n.",
    "tr": "euro",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0243",
    "en": "even",
    "pos": "adv.",
    "tr": "hatta",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0244",
    "en": "evening",
    "pos": "n.",
    "tr": "akşam",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0245",
    "en": "event",
    "pos": "n.",
    "tr": "etkinlik, olay",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0246",
    "en": "ever",
    "pos": "adv.",
    "tr": "hiç",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0247",
    "en": "every",
    "pos": "det.",
    "tr": "her",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0248",
    "en": "everybody",
    "pos": "pron.",
    "tr": "herkes",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0249",
    "en": "everyone",
    "pos": "pron.",
    "tr": "herkes",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0250",
    "en": "everything",
    "pos": "pron.",
    "tr": "her şey",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0251",
    "en": "exam",
    "pos": "n.",
    "tr": "sınav",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0252",
    "en": "example",
    "pos": "n.",
    "tr": "örnek",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0253",
    "en": "excited",
    "pos": "adj.",
    "tr": "heyecanlı",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0254",
    "en": "exciting",
    "pos": "adj.",
    "tr": "heyecan verici",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0255",
    "en": "exercise",
    "pos": "n./v.",
    "tr": "egzersiz / egzersiz yapmak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0256",
    "en": "expensive",
    "pos": "adj.",
    "tr": "pahalı",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0257",
    "en": "explain",
    "pos": "v.",
    "tr": "açıklamak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0258",
    "en": "extra",
    "pos": "adj.",
    "tr": "ekstra",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0259",
    "en": "eye",
    "pos": "n.",
    "tr": "göz",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0260",
    "en": "face",
    "pos": "n.",
    "tr": "yüz",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0261",
    "en": "fact",
    "pos": "n.",
    "tr": "gerçek, olgu",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0262",
    "en": "fall",
    "pos": "v.",
    "tr": "düşmek",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0263",
    "en": "false",
    "pos": "adj.",
    "tr": "yanlış, sahte",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0264",
    "en": "family",
    "pos": "n.",
    "tr": "aile",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0265",
    "en": "famous",
    "pos": "adj.",
    "tr": "ünlü",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0266",
    "en": "fantastic",
    "pos": "adj.",
    "tr": "harika",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0267",
    "en": "far",
    "pos": "adv.",
    "tr": "uzak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0268",
    "en": "farm",
    "pos": "n.",
    "tr": "çiftlik",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0269",
    "en": "farmer",
    "pos": "n.",
    "tr": "çiftçi",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0270",
    "en": "fast",
    "pos": "adj./adv.",
    "tr": "hızlı",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0271",
    "en": "fat",
    "pos": "adj.",
    "tr": "şişman, yağlı",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0272",
    "en": "father",
    "pos": "n.",
    "tr": "baba",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0273",
    "en": "favourite",
    "pos": "adj./n.",
    "tr": "en sevilen",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0274",
    "en": "February",
    "pos": "n.",
    "tr": "Şubat",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0275",
    "en": "feel",
    "pos": "v.",
    "tr": "hissetmek",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0276",
    "en": "feeling",
    "pos": "n.",
    "tr": "his, duygu",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0277",
    "en": "festival",
    "pos": "n.",
    "tr": "festival",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0278",
    "en": "few",
    "pos": "det./pron.",
    "tr": "birkaç, az",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0279",
    "en": "fifteen",
    "pos": "number",
    "tr": "on beş",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0280",
    "en": "fifth",
    "pos": "number",
    "tr": "beşinci",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0281",
    "en": "fifty",
    "pos": "number",
    "tr": "elli",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0282",
    "en": "fill",
    "pos": "v.",
    "tr": "doldurmak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0283",
    "en": "film",
    "pos": "n.",
    "tr": "film",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0284",
    "en": "final",
    "pos": "adj.",
    "tr": "son",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0285",
    "en": "find",
    "pos": "v.",
    "tr": "bulmak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0286",
    "en": "fine",
    "pos": "adj.",
    "tr": "iyi",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0287",
    "en": "finish",
    "pos": "v.",
    "tr": "bitirmek",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0288",
    "en": "fire",
    "pos": "n.",
    "tr": "ateş",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0289",
    "en": "first",
    "pos": "det./number/adv.",
    "tr": "ilk, birinci",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0290",
    "en": "fish",
    "pos": "n.",
    "tr": "balık",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0291",
    "en": "five",
    "pos": "number",
    "tr": "beş",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0292",
    "en": "flat",
    "pos": "n.",
    "tr": "daire",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0293",
    "en": "flight",
    "pos": "n.",
    "tr": "uçuş",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0294",
    "en": "floor",
    "pos": "n.",
    "tr": "zemin, kat",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0295",
    "en": "flower",
    "pos": "n.",
    "tr": "çiçek",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0296",
    "en": "fly",
    "pos": "v.",
    "tr": "uçmak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0297",
    "en": "follow",
    "pos": "v.",
    "tr": "takip etmek",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0298",
    "en": "food",
    "pos": "n.",
    "tr": "yiyecek",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0299",
    "en": "foot",
    "pos": "n.",
    "tr": "ayak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0300",
    "en": "football",
    "pos": "n.",
    "tr": "futbol",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0301",
    "en": "for",
    "pos": "prep.",
    "tr": "için",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0302",
    "en": "forget",
    "pos": "v.",
    "tr": "unutmak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0303",
    "en": "form",
    "pos": "n./v.",
    "tr": "form / oluşturmak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0304",
    "en": "forty",
    "pos": "number",
    "tr": "kırk",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0305",
    "en": "four",
    "pos": "number",
    "tr": "dört",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0306",
    "en": "fourteen",
    "pos": "number",
    "tr": "on dört",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0307",
    "en": "fourth",
    "pos": "number",
    "tr": "dördüncü",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0308",
    "en": "free",
    "pos": "adj.",
    "tr": "özgür, ücretsiz",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0309",
    "en": "Friday",
    "pos": "n.",
    "tr": "Cuma",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0310",
    "en": "friend",
    "pos": "n.",
    "tr": "arkadaş",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0311",
    "en": "friendly",
    "pos": "adj.",
    "tr": "arkadaşça",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0312",
    "en": "from",
    "pos": "prep.",
    "tr": "-den",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0313",
    "en": "front",
    "pos": "n./adj.",
    "tr": "ön",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0314",
    "en": "fruit",
    "pos": "n.",
    "tr": "meyve",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0315",
    "en": "full",
    "pos": "adj.",
    "tr": "dolu",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0316",
    "en": "fun",
    "pos": "n.",
    "tr": "eğlence",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0317",
    "en": "funny",
    "pos": "adj.",
    "tr": "komik",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0318",
    "en": "future",
    "pos": "n.",
    "tr": "gelecek",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0319",
    "en": "game",
    "pos": "n.",
    "tr": "oyun",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0320",
    "en": "garden",
    "pos": "n.",
    "tr": "bahçe",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0321",
    "en": "geography",
    "pos": "n.",
    "tr": "coğrafya",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0322",
    "en": "get",
    "pos": "v.",
    "tr": "almak, edinmek",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0323",
    "en": "girl",
    "pos": "n.",
    "tr": "kız",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0324",
    "en": "girlfriend",
    "pos": "n.",
    "tr": "kız arkadaş",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0325",
    "en": "give",
    "pos": "v.",
    "tr": "vermek",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0326",
    "en": "glass",
    "pos": "n.",
    "tr": "bardak, cam",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0327",
    "en": "go",
    "pos": "v.",
    "tr": "gitmek",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0328",
    "en": "good",
    "pos": "adj.",
    "tr": "iyi",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0329",
    "en": "goodbye",
    "pos": "exclam./n.",
    "tr": "hoşça kal",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0330",
    "en": "grandfather",
    "pos": "n.",
    "tr": "büyükbaba",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0331",
    "en": "grandmother",
    "pos": "n.",
    "tr": "büyükanne",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0332",
    "en": "grandparent",
    "pos": "n.",
    "tr": "büyükanne/büyükbaba",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0333",
    "en": "great",
    "pos": "adj.",
    "tr": "harika",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0334",
    "en": "green",
    "pos": "adj./n.",
    "tr": "yeşil",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0335",
    "en": "grey",
    "pos": "adj./n.",
    "tr": "gri",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0336",
    "en": "group",
    "pos": "n.",
    "tr": "grup",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0337",
    "en": "grow",
    "pos": "v.",
    "tr": "büyümek",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0338",
    "en": "guess",
    "pos": "v./n.",
    "tr": "tahmin etmek / tahmin",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0339",
    "en": "guitar",
    "pos": "n.",
    "tr": "gitar",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0340",
    "en": "gym",
    "pos": "n.",
    "tr": "spor salonu",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0341",
    "en": "hair",
    "pos": "n.",
    "tr": "saç",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0342",
    "en": "half",
    "pos": "n./det./pron.",
    "tr": "yarım",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0343",
    "en": "hand",
    "pos": "n.",
    "tr": "el",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0344",
    "en": "happen",
    "pos": "v.",
    "tr": "olmak, meydana gelmek",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0345",
    "en": "happy",
    "pos": "adj.",
    "tr": "mutlu",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0346",
    "en": "hard",
    "pos": "adj./adv.",
    "tr": "zor, sert",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0347",
    "en": "hat",
    "pos": "n.",
    "tr": "şapka",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0348",
    "en": "hate",
    "pos": "v.",
    "tr": "nefret etmek",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0349",
    "en": "have",
    "pos": "v.",
    "tr": "sahip olmak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0350",
    "en": "have to",
    "pos": "modal v.",
    "tr": "zorunda olmak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0351",
    "en": "he",
    "pos": "pron.",
    "tr": "o (erkek)",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0352",
    "en": "head",
    "pos": "n.",
    "tr": "kafa",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0353",
    "en": "health",
    "pos": "n.",
    "tr": "sağlık",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0354",
    "en": "healthy",
    "pos": "adj.",
    "tr": "sağlıklı",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0355",
    "en": "hear",
    "pos": "v.",
    "tr": "duymak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0356",
    "en": "hello",
    "pos": "exclam.",
    "tr": "merhaba",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0357",
    "en": "help",
    "pos": "v./n.",
    "tr": "yardım etmek / yardım",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0358",
    "en": "her",
    "pos": "pron./det.",
    "tr": "onun (kadın)",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0359",
    "en": "here",
    "pos": "adv.",
    "tr": "burada",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0360",
    "en": "hey",
    "pos": "exclam.",
    "tr": "hey",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0361",
    "en": "hi",
    "pos": "exclam.",
    "tr": "merhaba",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0362",
    "en": "high",
    "pos": "adj.",
    "tr": "yüksek",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0363",
    "en": "him",
    "pos": "pron.",
    "tr": "onu (erkek)",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0364",
    "en": "his",
    "pos": "det.",
    "tr": "onun (erkek)",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0365",
    "en": "history",
    "pos": "n.",
    "tr": "tarih",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0366",
    "en": "hobby",
    "pos": "n.",
    "tr": "hobi",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0367",
    "en": "holiday",
    "pos": "n.",
    "tr": "tatil",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0368",
    "en": "home",
    "pos": "n./adv.",
    "tr": "ev / eve",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0369",
    "en": "homework",
    "pos": "n.",
    "tr": "ev ödevi",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0370",
    "en": "hope",
    "pos": "v.",
    "tr": "ummak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0371",
    "en": "horse",
    "pos": "n.",
    "tr": "at",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0372",
    "en": "hospital",
    "pos": "n.",
    "tr": "hastane",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0373",
    "en": "hot",
    "pos": "adj.",
    "tr": "sıcak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0374",
    "en": "hotel",
    "pos": "n.",
    "tr": "otel",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0375",
    "en": "hour",
    "pos": "n.",
    "tr": "saat (süre)",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0376",
    "en": "house",
    "pos": "n.",
    "tr": "ev",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0377",
    "en": "how",
    "pos": "adv.",
    "tr": "nasıl",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0378",
    "en": "however",
    "pos": "adv.",
    "tr": "ancak, yine de",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0379",
    "en": "hundred",
    "pos": "number",
    "tr": "yüz (100)",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0380",
    "en": "hungry",
    "pos": "adj.",
    "tr": "aç",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0381",
    "en": "husband",
    "pos": "n.",
    "tr": "koca",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0382",
    "en": "I",
    "pos": "pron.",
    "tr": "ben",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0383",
    "en": "ice",
    "pos": "n.",
    "tr": "buz",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0384",
    "en": "ice cream",
    "pos": "n.",
    "tr": "dondurma",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0385",
    "en": "idea",
    "pos": "n.",
    "tr": "fikir",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0386",
    "en": "if",
    "pos": "conj.",
    "tr": "eğer",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0387",
    "en": "imagine",
    "pos": "v.",
    "tr": "hayal etmek",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0388",
    "en": "important",
    "pos": "adj.",
    "tr": "önemli",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0389",
    "en": "improve",
    "pos": "v.",
    "tr": "geliştirmek",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0390",
    "en": "in",
    "pos": "prep./adv.",
    "tr": "içinde",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0391",
    "en": "include",
    "pos": "v.",
    "tr": "içermek",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0392",
    "en": "information",
    "pos": "n.",
    "tr": "bilgi",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0393",
    "en": "interest",
    "pos": "n./v.",
    "tr": "ilgi / ilgilendirmek",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0394",
    "en": "interested",
    "pos": "adj.",
    "tr": "ilgilenen",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0395",
    "en": "interesting",
    "pos": "adj.",
    "tr": "ilginç",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0396",
    "en": "internet",
    "pos": "n.",
    "tr": "internet",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0397",
    "en": "interview",
    "pos": "n./v.",
    "tr": "mülakat / mülakat yapmak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0398",
    "en": "into",
    "pos": "prep.",
    "tr": "içine",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0399",
    "en": "introduce",
    "pos": "v.",
    "tr": "tanıştırmak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0400",
    "en": "island",
    "pos": "n.",
    "tr": "ada",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0401",
    "en": "it",
    "pos": "pron.",
    "tr": "o (nesne)",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0402",
    "en": "its",
    "pos": "det.",
    "tr": "onun (nesne)",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0403",
    "en": "jacket",
    "pos": "n.",
    "tr": "ceket",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0404",
    "en": "January",
    "pos": "n.",
    "tr": "Ocak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0405",
    "en": "jeans",
    "pos": "n.",
    "tr": "kot pantolon",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0406",
    "en": "job",
    "pos": "n.",
    "tr": "iş",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0407",
    "en": "join",
    "pos": "v.",
    "tr": "katılmak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0408",
    "en": "journey",
    "pos": "n.",
    "tr": "yolculuk",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0409",
    "en": "juice",
    "pos": "n.",
    "tr": "meyve suyu",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0410",
    "en": "July",
    "pos": "n.",
    "tr": "Temmuz",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0411",
    "en": "June",
    "pos": "n.",
    "tr": "Haziran",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0412",
    "en": "just",
    "pos": "adv.",
    "tr": "sadece, az önce",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0413",
    "en": "keep",
    "pos": "v.",
    "tr": "tutmak, saklamak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0414",
    "en": "key",
    "pos": "n.",
    "tr": "anahtar",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0415",
    "en": "kilometre",
    "pos": "n.",
    "tr": "kilometre",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0416",
    "en": "kind",
    "pos": "n.",
    "tr": "tür, çeşit",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0417",
    "en": "kitchen",
    "pos": "n.",
    "tr": "mutfak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0418",
    "en": "know",
    "pos": "v.",
    "tr": "bilmek",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0419",
    "en": "land",
    "pos": "n.",
    "tr": "kara, arazi",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0420",
    "en": "language",
    "pos": "n.",
    "tr": "dil",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0421",
    "en": "large",
    "pos": "adj.",
    "tr": "büyük, geniş",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0422",
    "en": "last",
    "pos": "det.",
    "tr": "son, geçen",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0423",
    "en": "late",
    "pos": "adj./adv.",
    "tr": "geç",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0424",
    "en": "later",
    "pos": "adv.",
    "tr": "daha sonra",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0425",
    "en": "laugh",
    "pos": "v.",
    "tr": "gülmek",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0426",
    "en": "learn",
    "pos": "v.",
    "tr": "öğrenmek",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0427",
    "en": "leave",
    "pos": "v.",
    "tr": "ayrılmak, bırakmak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0428",
    "en": "left",
    "pos": "adj./adv./n.",
    "tr": "sol",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0429",
    "en": "leg",
    "pos": "n.",
    "tr": "bacak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0430",
    "en": "lesson",
    "pos": "n.",
    "tr": "ders",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0431",
    "en": "let",
    "pos": "v.",
    "tr": "izin vermek, bırakmak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0432",
    "en": "letter",
    "pos": "n.",
    "tr": "mektup",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0433",
    "en": "library",
    "pos": "n.",
    "tr": "kütüphane",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0434",
    "en": "lie",
    "pos": "v.",
    "tr": "yalan söylemek, uzanmak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0435",
    "en": "life",
    "pos": "n.",
    "tr": "hayat",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0436",
    "en": "light",
    "pos": "n./adj.",
    "tr": "ışık / hafif",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0437",
    "en": "like",
    "pos": "prep./v.",
    "tr": "gibi / sevmek, hoşlanmak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0438",
    "en": "line",
    "pos": "n.",
    "tr": "çizgi, sıra",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0439",
    "en": "lion",
    "pos": "n.",
    "tr": "aslan",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0440",
    "en": "list",
    "pos": "n./v.",
    "tr": "liste / listelemek",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0441",
    "en": "listen",
    "pos": "v.",
    "tr": "dinlemek",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0442",
    "en": "little",
    "pos": "adj./det./pron.",
    "tr": "küçük, az",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0443",
    "en": "live",
    "pos": "v.",
    "tr": "yaşamak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0444",
    "en": "local",
    "pos": "adj.",
    "tr": "yerel",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0445",
    "en": "long",
    "pos": "adj./adv.",
    "tr": "uzun",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0446",
    "en": "look",
    "pos": "v.",
    "tr": "bakmak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0447",
    "en": "lose",
    "pos": "v.",
    "tr": "kaybetmek",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0448",
    "en": "lot",
    "pos": "pron./det./adv.",
    "tr": "çok",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0449",
    "en": "love",
    "pos": "n./v.",
    "tr": "aşk / sevmek",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0450",
    "en": "lunch",
    "pos": "n.",
    "tr": "öğle yemeği",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0451",
    "en": "machine",
    "pos": "n.",
    "tr": "makine",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0452",
    "en": "magazine",
    "pos": "n.",
    "tr": "dergi",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0453",
    "en": "main",
    "pos": "adj.",
    "tr": "ana, esas",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0454",
    "en": "make",
    "pos": "v.",
    "tr": "yapmak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0455",
    "en": "man",
    "pos": "n.",
    "tr": "adam",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0456",
    "en": "many",
    "pos": "det./pron.",
    "tr": "çok (sayılabilir)",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0457",
    "en": "map",
    "pos": "n.",
    "tr": "harita",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0458",
    "en": "March",
    "pos": "n.",
    "tr": "Mart",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0459",
    "en": "market",
    "pos": "n.",
    "tr": "pazar, market",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0460",
    "en": "married",
    "pos": "adj.",
    "tr": "evli",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0461",
    "en": "match",
    "pos": "n./v.",
    "tr": "maç / eşleşmek",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0462",
    "en": "May",
    "pos": "n.",
    "tr": "Mayıs",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0463",
    "en": "maybe",
    "pos": "adv.",
    "tr": "belki",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0464",
    "en": "me",
    "pos": "pron.",
    "tr": "beni, bana",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0465",
    "en": "meal",
    "pos": "n.",
    "tr": "öğün",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0466",
    "en": "mean",
    "pos": "v.",
    "tr": "anlamına gelmek",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0467",
    "en": "meaning",
    "pos": "n.",
    "tr": "anlam",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0468",
    "en": "meat",
    "pos": "n.",
    "tr": "et",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0469",
    "en": "meet",
    "pos": "v.",
    "tr": "buluşmak, tanışmak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0470",
    "en": "meeting",
    "pos": "n.",
    "tr": "toplantı",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0471",
    "en": "member",
    "pos": "n.",
    "tr": "üye",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0472",
    "en": "menu",
    "pos": "n.",
    "tr": "menü",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0473",
    "en": "message",
    "pos": "n.",
    "tr": "mesaj",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0474",
    "en": "metre",
    "pos": "n.",
    "tr": "metre",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0475",
    "en": "midnight",
    "pos": "n.",
    "tr": "gece yarısı",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0476",
    "en": "mile",
    "pos": "n.",
    "tr": "mil",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0477",
    "en": "milk",
    "pos": "n.",
    "tr": "süt",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0478",
    "en": "million",
    "pos": "number",
    "tr": "milyon",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0479",
    "en": "minute",
    "pos": "n.",
    "tr": "dakika",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0480",
    "en": "miss",
    "pos": "v.",
    "tr": "özlemek, kaçırmak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0481",
    "en": "mistake",
    "pos": "n.",
    "tr": "hata",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0482",
    "en": "model",
    "pos": "n.",
    "tr": "model",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0483",
    "en": "modern",
    "pos": "adj.",
    "tr": "modern",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0484",
    "en": "moment",
    "pos": "n.",
    "tr": "an",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0485",
    "en": "Monday",
    "pos": "n.",
    "tr": "Pazartesi",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0486",
    "en": "money",
    "pos": "n.",
    "tr": "para",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0487",
    "en": "month",
    "pos": "n.",
    "tr": "ay (zaman)",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0488",
    "en": "more",
    "pos": "det./pron./adv.",
    "tr": "daha fazla",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0489",
    "en": "morning",
    "pos": "n.",
    "tr": "sabah",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0490",
    "en": "most",
    "pos": "det./pron./adv.",
    "tr": "en çok",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0491",
    "en": "mother",
    "pos": "n.",
    "tr": "anne",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0492",
    "en": "mountain",
    "pos": "n.",
    "tr": "dağ",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0493",
    "en": "mouse",
    "pos": "n.",
    "tr": "fare",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0494",
    "en": "mouth",
    "pos": "n.",
    "tr": "ağız",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0495",
    "en": "move",
    "pos": "v.",
    "tr": "hareket etmek, taşınmak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0496",
    "en": "movie",
    "pos": "n.",
    "tr": "film",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0497",
    "en": "much",
    "pos": "det./pron./adv.",
    "tr": "çok (miktar)",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0498",
    "en": "mum",
    "pos": "n.",
    "tr": "anne",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0499",
    "en": "museum",
    "pos": "n.",
    "tr": "müze",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0500",
    "en": "music",
    "pos": "n.",
    "tr": "müzik",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0501",
    "en": "must",
    "pos": "modal v.",
    "tr": "-meli",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0502",
    "en": "my",
    "pos": "det.",
    "tr": "benim",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0503",
    "en": "name",
    "pos": "n.",
    "tr": "isim",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0504",
    "en": "natural",
    "pos": "adj.",
    "tr": "doğal",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0505",
    "en": "near",
    "pos": "prep./adj./adv.",
    "tr": "yakın",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0506",
    "en": "need",
    "pos": "v.",
    "tr": "ihtiyacı olmak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0507",
    "en": "negative",
    "pos": "adj.",
    "tr": "olumsuz",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0508",
    "en": "neighbour",
    "pos": "n.",
    "tr": "komşu",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0509",
    "en": "never",
    "pos": "adv.",
    "tr": "asla",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0510",
    "en": "new",
    "pos": "adj.",
    "tr": "yeni",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0511",
    "en": "news",
    "pos": "n.",
    "tr": "haber",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0512",
    "en": "newspaper",
    "pos": "n.",
    "tr": "gazete",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0513",
    "en": "next",
    "pos": "adj./adv.",
    "tr": "sonraki",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0514",
    "en": "next to",
    "pos": "prep.",
    "tr": "yanında",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0515",
    "en": "nice",
    "pos": "adj.",
    "tr": "güzel, hoş",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0516",
    "en": "night",
    "pos": "n.",
    "tr": "gece",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0517",
    "en": "nine",
    "pos": "number",
    "tr": "dokuz",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0518",
    "en": "nineteen",
    "pos": "number",
    "tr": "on dokuz",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0519",
    "en": "ninety",
    "pos": "number",
    "tr": "doksan",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0520",
    "en": "no",
    "pos": "exclam./det.",
    "tr": "hayır",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0521",
    "en": "no one",
    "pos": "pron.",
    "tr": "hiç kimse",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0522",
    "en": "nobody",
    "pos": "pron.",
    "tr": "hiç kimse",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0523",
    "en": "north",
    "pos": "n./adj./adv.",
    "tr": "kuzey",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0524",
    "en": "nose",
    "pos": "n.",
    "tr": "burun",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0525",
    "en": "not",
    "pos": "adv.",
    "tr": "değil",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0526",
    "en": "note",
    "pos": "n.",
    "tr": "not",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0527",
    "en": "nothing",
    "pos": "pron.",
    "tr": "hiçbir şey",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0528",
    "en": "November",
    "pos": "n.",
    "tr": "Kasım",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0529",
    "en": "now",
    "pos": "adv.",
    "tr": "şimdi",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0530",
    "en": "number",
    "pos": "n.",
    "tr": "sayı",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0531",
    "en": "nurse",
    "pos": "n.",
    "tr": "hemşire",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0532",
    "en": "object",
    "pos": "n.",
    "tr": "nesne",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0533",
    "en": "o'clock",
    "pos": "adv.",
    "tr": "saat (tam)",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0534",
    "en": "October",
    "pos": "n.",
    "tr": "Ekim",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0535",
    "en": "of",
    "pos": "prep.",
    "tr": "-in, -nin",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0536",
    "en": "off",
    "pos": "adv./prep.",
    "tr": "kapalı, uzağa",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0537",
    "en": "office",
    "pos": "n.",
    "tr": "ofis",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0538",
    "en": "often",
    "pos": "adv.",
    "tr": "sık sık",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0539",
    "en": "oh",
    "pos": "exclam.",
    "tr": "ay, oh",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0540",
    "en": "OK",
    "pos": "exclam./adj.",
    "tr": "tamam",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0541",
    "en": "old",
    "pos": "adj.",
    "tr": "yaşlı, eski",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0542",
    "en": "on",
    "pos": "prep./adv.",
    "tr": "üzerinde",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0543",
    "en": "once",
    "pos": "adv.",
    "tr": "bir kez",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0544",
    "en": "one",
    "pos": "number/det./pron.",
    "tr": "bir",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0545",
    "en": "onion",
    "pos": "n.",
    "tr": "soğan",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0546",
    "en": "online",
    "pos": "adj./adv.",
    "tr": "çevrimiçi",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0547",
    "en": "only",
    "pos": "adj./adv.",
    "tr": "sadece",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0548",
    "en": "open",
    "pos": "adj./v.",
    "tr": "açık / açmak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0549",
    "en": "opinion",
    "pos": "n.",
    "tr": "fikir, görüş",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0550",
    "en": "opposite",
    "pos": "adj./n./prep./adv.",
    "tr": "karşı",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0551",
    "en": "or",
    "pos": "conj.",
    "tr": "veya",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0552",
    "en": "orange",
    "pos": "n./adj.",
    "tr": "portakal / turuncu",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0553",
    "en": "order",
    "pos": "n./v.",
    "tr": "sipariş / emretmek",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0554",
    "en": "other",
    "pos": "adj./pron.",
    "tr": "diğer",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0555",
    "en": "our",
    "pos": "det.",
    "tr": "bizim",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0556",
    "en": "out",
    "pos": "adv./prep.",
    "tr": "dışarı",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0557",
    "en": "outside",
    "pos": "adv.",
    "tr": "dışarıda",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0558",
    "en": "over",
    "pos": "prep./adv.",
    "tr": "üzerinden, bitmiş",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0559",
    "en": "own",
    "pos": "adj./pron.",
    "tr": "kendi",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0560",
    "en": "page",
    "pos": "n.",
    "tr": "sayfa",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0561",
    "en": "paint",
    "pos": "v./n.",
    "tr": "boyamak / boya",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0562",
    "en": "painting",
    "pos": "n.",
    "tr": "tablo",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0563",
    "en": "pair",
    "pos": "n.",
    "tr": "çift",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0564",
    "en": "paper",
    "pos": "n.",
    "tr": "kağıt",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0565",
    "en": "paragraph",
    "pos": "n.",
    "tr": "paragraf",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0566",
    "en": "parent",
    "pos": "n.",
    "tr": "ebeveyn",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0567",
    "en": "park",
    "pos": "n./v.",
    "tr": "park / park etmek",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0568",
    "en": "part",
    "pos": "n.",
    "tr": "parça, bölüm",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0569",
    "en": "partner",
    "pos": "n.",
    "tr": "ortak, eş",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0570",
    "en": "party",
    "pos": "n.",
    "tr": "parti",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0571",
    "en": "passport",
    "pos": "n.",
    "tr": "pasaport",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0572",
    "en": "past",
    "pos": "adj./n./prep.",
    "tr": "geçmiş",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0573",
    "en": "pay",
    "pos": "v.",
    "tr": "ödemek",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0574",
    "en": "pen",
    "pos": "n.",
    "tr": "kalem (tükenmez)",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0575",
    "en": "pencil",
    "pos": "n.",
    "tr": "kurşun kalem",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0576",
    "en": "people",
    "pos": "n.",
    "tr": "insanlar",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0577",
    "en": "pepper",
    "pos": "n.",
    "tr": "biber",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0578",
    "en": "perfect",
    "pos": "adj.",
    "tr": "mükemmel",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0579",
    "en": "period",
    "pos": "n.",
    "tr": "dönem, süre",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0580",
    "en": "person",
    "pos": "n.",
    "tr": "kişi",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0581",
    "en": "personal",
    "pos": "adj.",
    "tr": "kişisel",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0582",
    "en": "phone",
    "pos": "n./v.",
    "tr": "telefon / telefon etmek",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0583",
    "en": "photo",
    "pos": "n.",
    "tr": "fotoğraf",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0584",
    "en": "photograph",
    "pos": "n.",
    "tr": "fotoğraf",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0585",
    "en": "phrase",
    "pos": "n.",
    "tr": "ifade, deyim",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0586",
    "en": "piano",
    "pos": "n.",
    "tr": "piyano",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0587",
    "en": "picture",
    "pos": "n.",
    "tr": "resim",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0588",
    "en": "piece",
    "pos": "n.",
    "tr": "parça",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0589",
    "en": "pig",
    "pos": "n.",
    "tr": "domuz",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0590",
    "en": "pink",
    "pos": "adj./n.",
    "tr": "pembe",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0591",
    "en": "place",
    "pos": "n.",
    "tr": "yer",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0592",
    "en": "plan",
    "pos": "n./v.",
    "tr": "plan / planlamak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0593",
    "en": "plane",
    "pos": "n.",
    "tr": "uçak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0594",
    "en": "plant",
    "pos": "n.",
    "tr": "bitki",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0595",
    "en": "play",
    "pos": "v./n.",
    "tr": "oynamak / oyun",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0596",
    "en": "player",
    "pos": "n.",
    "tr": "oyuncu",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0597",
    "en": "please",
    "pos": "exclam.",
    "tr": "lütfen",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0598",
    "en": "point",
    "pos": "n.",
    "tr": "nokta, puan",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0599",
    "en": "police",
    "pos": "n.",
    "tr": "polis",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0600",
    "en": "policeman",
    "pos": "n.",
    "tr": "polis memuru",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0601",
    "en": "pool",
    "pos": "n.",
    "tr": "havuz",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0602",
    "en": "poor",
    "pos": "adj.",
    "tr": "fakir",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0603",
    "en": "popular",
    "pos": "adj.",
    "tr": "popüler",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0604",
    "en": "positive",
    "pos": "adj.",
    "tr": "olumlu",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0605",
    "en": "possible",
    "pos": "adj.",
    "tr": "mümkün",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0606",
    "en": "post",
    "pos": "n./v.",
    "tr": "posta / postalamak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0607",
    "en": "potato",
    "pos": "n.",
    "tr": "patates",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0608",
    "en": "pound",
    "pos": "n.",
    "tr": "sterlin",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0609",
    "en": "practice",
    "pos": "n.",
    "tr": "pratik, alıştırma",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0610",
    "en": "practise",
    "pos": "v.",
    "tr": "pratik yapmak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0611",
    "en": "prefer",
    "pos": "v.",
    "tr": "tercih etmek",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0612",
    "en": "prepare",
    "pos": "v.",
    "tr": "hazırlamak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0613",
    "en": "present",
    "pos": "adj./n.",
    "tr": "mevcut / hediye",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0614",
    "en": "pretty",
    "pos": "adj./adv.",
    "tr": "güzel / oldukça",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0615",
    "en": "price",
    "pos": "n.",
    "tr": "fiyat",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0616",
    "en": "probably",
    "pos": "adv.",
    "tr": "muhtemelen",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0617",
    "en": "problem",
    "pos": "n.",
    "tr": "sorun",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0618",
    "en": "product",
    "pos": "n.",
    "tr": "ürün",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0619",
    "en": "programme",
    "pos": "n.",
    "tr": "program",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0620",
    "en": "project",
    "pos": "n.",
    "tr": "proje",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0621",
    "en": "purple",
    "pos": "adj./n.",
    "tr": "mor",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0622",
    "en": "put",
    "pos": "v.",
    "tr": "koymak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0623",
    "en": "quarter",
    "pos": "n.",
    "tr": "çeyrek",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0624",
    "en": "question",
    "pos": "n.",
    "tr": "soru",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0625",
    "en": "quick",
    "pos": "adj.",
    "tr": "hızlı",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0626",
    "en": "quickly",
    "pos": "adv.",
    "tr": "hızlıca",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0627",
    "en": "quiet",
    "pos": "adj.",
    "tr": "sessiz",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0628",
    "en": "quite",
    "pos": "adv.",
    "tr": "oldukça",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0629",
    "en": "radio",
    "pos": "n.",
    "tr": "radyo",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0630",
    "en": "rain",
    "pos": "n./v.",
    "tr": "yağmur / yağmur yağmak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0631",
    "en": "read",
    "pos": "v.",
    "tr": "okumak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0632",
    "en": "reader",
    "pos": "n.",
    "tr": "okuyucu",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0633",
    "en": "reading",
    "pos": "n.",
    "tr": "okuma",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0634",
    "en": "ready",
    "pos": "adj.",
    "tr": "hazır",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0635",
    "en": "real",
    "pos": "adj.",
    "tr": "gerçek",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0636",
    "en": "really",
    "pos": "adv.",
    "tr": "gerçekten",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0637",
    "en": "reason",
    "pos": "n.",
    "tr": "sebep",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0638",
    "en": "red",
    "pos": "adj./n.",
    "tr": "kırmızı",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0639",
    "en": "relax",
    "pos": "v.",
    "tr": "rahatlamak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0640",
    "en": "remember",
    "pos": "v.",
    "tr": "hatırlamak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0641",
    "en": "repeat",
    "pos": "v.",
    "tr": "tekrarlamak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0642",
    "en": "report",
    "pos": "n.",
    "tr": "rapor",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0643",
    "en": "restaurant",
    "pos": "n.",
    "tr": "restoran",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0644",
    "en": "result",
    "pos": "n.",
    "tr": "sonuç",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0645",
    "en": "return",
    "pos": "v.",
    "tr": "geri dönmek",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0646",
    "en": "rice",
    "pos": "n.",
    "tr": "pirinç",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0647",
    "en": "rich",
    "pos": "adj.",
    "tr": "zengin",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0648",
    "en": "ride",
    "pos": "v.",
    "tr": "binmek (bisiklet vb.)",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0649",
    "en": "right",
    "pos": "adj./n.",
    "tr": "doğru / sağ",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0650",
    "en": "river",
    "pos": "n.",
    "tr": "nehir",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0651",
    "en": "road",
    "pos": "n.",
    "tr": "yol",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0652",
    "en": "room",
    "pos": "n.",
    "tr": "oda",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0653",
    "en": "routine",
    "pos": "n.",
    "tr": "rutin",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0654",
    "en": "rule",
    "pos": "n.",
    "tr": "kural",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0655",
    "en": "run",
    "pos": "v.",
    "tr": "koşmak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0656",
    "en": "sad",
    "pos": "adj.",
    "tr": "üzgün",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0657",
    "en": "salad",
    "pos": "n.",
    "tr": "salata",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0658",
    "en": "salt",
    "pos": "n.",
    "tr": "tuz",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0659",
    "en": "same",
    "pos": "adj./pron.",
    "tr": "aynı",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0660",
    "en": "sandwich",
    "pos": "n.",
    "tr": "sandviç",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0661",
    "en": "Saturday",
    "pos": "n.",
    "tr": "Cumartesi",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0662",
    "en": "say",
    "pos": "v.",
    "tr": "söylemek",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0663",
    "en": "school",
    "pos": "n.",
    "tr": "okul",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0664",
    "en": "science",
    "pos": "n.",
    "tr": "bilim",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0665",
    "en": "scientist",
    "pos": "n.",
    "tr": "bilim insanı",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0666",
    "en": "sea",
    "pos": "n.",
    "tr": "deniz",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0667",
    "en": "second",
    "pos": "n./number",
    "tr": "saniye / ikinci",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0668",
    "en": "section",
    "pos": "n.",
    "tr": "bölüm",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0669",
    "en": "see",
    "pos": "v.",
    "tr": "görmek",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0670",
    "en": "sell",
    "pos": "v.",
    "tr": "satmak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0671",
    "en": "send",
    "pos": "v.",
    "tr": "göndermek",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0672",
    "en": "sentence",
    "pos": "n.",
    "tr": "cümle",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0673",
    "en": "September",
    "pos": "n.",
    "tr": "Eylül",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0674",
    "en": "seven",
    "pos": "number",
    "tr": "yedi",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0675",
    "en": "seventeen",
    "pos": "number",
    "tr": "on yedi",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0676",
    "en": "seventy",
    "pos": "number",
    "tr": "yetmiş",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0677",
    "en": "share",
    "pos": "v.",
    "tr": "paylaşmak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0678",
    "en": "she",
    "pos": "pron.",
    "tr": "o (kadın)",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0679",
    "en": "sheep",
    "pos": "n.",
    "tr": "koyun",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0680",
    "en": "shirt",
    "pos": "n.",
    "tr": "gömlek",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0681",
    "en": "shoe",
    "pos": "n.",
    "tr": "ayakkabı",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0682",
    "en": "shop",
    "pos": "n./v.",
    "tr": "dükkan / alışveriş yapmak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0683",
    "en": "shopping",
    "pos": "n.",
    "tr": "alışveriş",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0684",
    "en": "short",
    "pos": "adj.",
    "tr": "kısa",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0685",
    "en": "should",
    "pos": "modal v.",
    "tr": "-meli",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0686",
    "en": "show",
    "pos": "v./n.",
    "tr": "göstermek / gösteri",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0687",
    "en": "shower",
    "pos": "n.",
    "tr": "duş",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0688",
    "en": "sick",
    "pos": "adj.",
    "tr": "hasta",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0689",
    "en": "similar",
    "pos": "adj.",
    "tr": "benzer",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0690",
    "en": "sing",
    "pos": "v.",
    "tr": "şarkı söylemek",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0691",
    "en": "singer",
    "pos": "n.",
    "tr": "şarkıcı",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0692",
    "en": "sister",
    "pos": "n.",
    "tr": "kız kardeş",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0693",
    "en": "sit",
    "pos": "v.",
    "tr": "oturmak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0694",
    "en": "situation",
    "pos": "n.",
    "tr": "durum",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0695",
    "en": "six",
    "pos": "number",
    "tr": "altı",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0696",
    "en": "sixteen",
    "pos": "number",
    "tr": "on altı",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0697",
    "en": "sixty",
    "pos": "number",
    "tr": "altmış",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0698",
    "en": "skill",
    "pos": "n.",
    "tr": "beceri",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0699",
    "en": "skirt",
    "pos": "n.",
    "tr": "etek",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0700",
    "en": "sleep",
    "pos": "v.",
    "tr": "uyumak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0701",
    "en": "slow",
    "pos": "adj.",
    "tr": "yavaş",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0702",
    "en": "small",
    "pos": "adj.",
    "tr": "küçük",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0703",
    "en": "snake",
    "pos": "n.",
    "tr": "yılan",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0704",
    "en": "snow",
    "pos": "n./v.",
    "tr": "kar / kar yağmak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0705",
    "en": "so",
    "pos": "adv./conj.",
    "tr": "bu yüzden, çok",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0706",
    "en": "some",
    "pos": "det./pron.",
    "tr": "biraz, bazı",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0707",
    "en": "somebody",
    "pos": "pron.",
    "tr": "biri",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0708",
    "en": "someone",
    "pos": "pron.",
    "tr": "biri",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0709",
    "en": "something",
    "pos": "pron.",
    "tr": "bir şey",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0710",
    "en": "sometimes",
    "pos": "adv.",
    "tr": "bazen",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0711",
    "en": "son",
    "pos": "n.",
    "tr": "oğul",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0712",
    "en": "song",
    "pos": "n.",
    "tr": "şarkı",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0713",
    "en": "soon",
    "pos": "adv.",
    "tr": "yakında",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0714",
    "en": "sorry",
    "pos": "adj./exclam.",
    "tr": "üzgün",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0715",
    "en": "sound",
    "pos": "n./v.",
    "tr": "ses / ses çıkarmak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0716",
    "en": "soup",
    "pos": "n.",
    "tr": "çorba",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0717",
    "en": "south",
    "pos": "n./adj./adv.",
    "tr": "güney",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0718",
    "en": "space",
    "pos": "n.",
    "tr": "uzay, alan",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0719",
    "en": "speak",
    "pos": "v.",
    "tr": "konuşmak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0720",
    "en": "special",
    "pos": "adj.",
    "tr": "özel",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0721",
    "en": "spell",
    "pos": "v.",
    "tr": "hecelemek",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0722",
    "en": "spelling",
    "pos": "n.",
    "tr": "yazım, imla",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0723",
    "en": "spend",
    "pos": "v.",
    "tr": "harcamak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0724",
    "en": "sport",
    "pos": "n.",
    "tr": "spor",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0725",
    "en": "spring",
    "pos": "n.",
    "tr": "ilkbahar",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0726",
    "en": "stand",
    "pos": "v.",
    "tr": "ayakta durmak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0727",
    "en": "star",
    "pos": "n.",
    "tr": "yıldız",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0728",
    "en": "start",
    "pos": "v.",
    "tr": "başlamak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0729",
    "en": "statement",
    "pos": "n.",
    "tr": "ifade, açıklama",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0730",
    "en": "station",
    "pos": "n.",
    "tr": "istasyon",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0731",
    "en": "stay",
    "pos": "v.",
    "tr": "kalmak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0732",
    "en": "still",
    "pos": "adv.",
    "tr": "hâlâ",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0733",
    "en": "stop",
    "pos": "v.",
    "tr": "durmak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0734",
    "en": "story",
    "pos": "n.",
    "tr": "hikaye",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0735",
    "en": "street",
    "pos": "n.",
    "tr": "sokak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0736",
    "en": "strong",
    "pos": "adj.",
    "tr": "güçlü",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0737",
    "en": "student",
    "pos": "n.",
    "tr": "öğrenci",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0738",
    "en": "study",
    "pos": "n./v.",
    "tr": "çalışma / çalışmak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0739",
    "en": "style",
    "pos": "n.",
    "tr": "tarz",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0740",
    "en": "subject",
    "pos": "n.",
    "tr": "konu, ders",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0741",
    "en": "success",
    "pos": "n.",
    "tr": "başarı",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0742",
    "en": "sugar",
    "pos": "n.",
    "tr": "şeker",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0743",
    "en": "summer",
    "pos": "n.",
    "tr": "yaz",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0744",
    "en": "sun",
    "pos": "n.",
    "tr": "güneş",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0745",
    "en": "Sunday",
    "pos": "n.",
    "tr": "Pazar",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0746",
    "en": "supermarket",
    "pos": "n.",
    "tr": "süpermarket",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0747",
    "en": "sure",
    "pos": "adj.",
    "tr": "emin",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0748",
    "en": "sweater",
    "pos": "n.",
    "tr": "kazak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0749",
    "en": "swim",
    "pos": "v.",
    "tr": "yüzmek",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0750",
    "en": "swimming",
    "pos": "n.",
    "tr": "yüzme",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0751",
    "en": "table",
    "pos": "n.",
    "tr": "masa",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0752",
    "en": "take",
    "pos": "v.",
    "tr": "almak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0753",
    "en": "talk",
    "pos": "v.",
    "tr": "konuşmak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0754",
    "en": "tall",
    "pos": "adj.",
    "tr": "uzun boylu",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0755",
    "en": "taxi",
    "pos": "n.",
    "tr": "taksi",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0756",
    "en": "tea",
    "pos": "n.",
    "tr": "çay",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0757",
    "en": "teach",
    "pos": "v.",
    "tr": "öğretmek",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0758",
    "en": "teacher",
    "pos": "n.",
    "tr": "öğretmen",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0759",
    "en": "team",
    "pos": "n.",
    "tr": "takım",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0760",
    "en": "teenager",
    "pos": "n.",
    "tr": "genç, ergen",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0761",
    "en": "telephone",
    "pos": "n.",
    "tr": "telefon",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0762",
    "en": "television",
    "pos": "n.",
    "tr": "televizyon",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0763",
    "en": "tell",
    "pos": "v.",
    "tr": "anlatmak, söylemek",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0764",
    "en": "ten",
    "pos": "number",
    "tr": "on",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0765",
    "en": "tennis",
    "pos": "n.",
    "tr": "tenis",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0766",
    "en": "terrible",
    "pos": "adj.",
    "tr": "korkunç, berbat",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0767",
    "en": "test",
    "pos": "n./v.",
    "tr": "test / sınamak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0768",
    "en": "text",
    "pos": "n.",
    "tr": "metin, mesaj",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0769",
    "en": "than",
    "pos": "conj.",
    "tr": "-den (karşılaştırma)",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0770",
    "en": "thank",
    "pos": "v.",
    "tr": "teşekkür etmek",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0771",
    "en": "thanks",
    "pos": "exclam./n.",
    "tr": "teşekkürler",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0772",
    "en": "that",
    "pos": "det./pron./conj.",
    "tr": "o, şu",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0773",
    "en": "the",
    "pos": "def. article",
    "tr": "belirli tanımlık",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0774",
    "en": "theatre",
    "pos": "n.",
    "tr": "tiyatro",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0775",
    "en": "their",
    "pos": "det.",
    "tr": "onların",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0776",
    "en": "them",
    "pos": "pron.",
    "tr": "onları",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0777",
    "en": "then",
    "pos": "adv.",
    "tr": "o zaman, sonra",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0778",
    "en": "there",
    "pos": "adv.",
    "tr": "orada",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0779",
    "en": "they",
    "pos": "pron.",
    "tr": "onlar",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0780",
    "en": "thing",
    "pos": "n.",
    "tr": "şey",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0781",
    "en": "think",
    "pos": "v.",
    "tr": "düşünmek",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0782",
    "en": "third",
    "pos": "number",
    "tr": "üçüncü",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0783",
    "en": "thirsty",
    "pos": "adj.",
    "tr": "susamış",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0784",
    "en": "thirteen",
    "pos": "number",
    "tr": "on üç",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0785",
    "en": "thirty",
    "pos": "number",
    "tr": "otuz",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0786",
    "en": "this",
    "pos": "det./pron.",
    "tr": "bu",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0787",
    "en": "thousand",
    "pos": "number",
    "tr": "bin",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0788",
    "en": "three",
    "pos": "number",
    "tr": "üç",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0789",
    "en": "through",
    "pos": "prep.",
    "tr": "içinden, boyunca",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0790",
    "en": "Thursday",
    "pos": "n.",
    "tr": "Perşembe",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0791",
    "en": "ticket",
    "pos": "n.",
    "tr": "bilet",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0792",
    "en": "time",
    "pos": "n.",
    "tr": "zaman",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0793",
    "en": "tired",
    "pos": "adj.",
    "tr": "yorgun",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0794",
    "en": "title",
    "pos": "n.",
    "tr": "başlık, ünvan",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0795",
    "en": "to",
    "pos": "prep.",
    "tr": "-e, -a",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0796",
    "en": "today",
    "pos": "adv./n.",
    "tr": "bugün",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0797",
    "en": "together",
    "pos": "adv.",
    "tr": "birlikte",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0798",
    "en": "toilet",
    "pos": "n.",
    "tr": "tuvalet",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0799",
    "en": "tomato",
    "pos": "n.",
    "tr": "domates",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0800",
    "en": "tomorrow",
    "pos": "adv./n.",
    "tr": "yarın",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0801",
    "en": "tonight",
    "pos": "adv./n.",
    "tr": "bu gece",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0802",
    "en": "too",
    "pos": "adv.",
    "tr": "de/da, çok fazla",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0803",
    "en": "tooth",
    "pos": "n.",
    "tr": "diş",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0804",
    "en": "topic",
    "pos": "n.",
    "tr": "konu",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0805",
    "en": "tourist",
    "pos": "n.",
    "tr": "turist",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0806",
    "en": "town",
    "pos": "n.",
    "tr": "kasaba",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0807",
    "en": "traffic",
    "pos": "n.",
    "tr": "trafik",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0808",
    "en": "train",
    "pos": "n.",
    "tr": "tren",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0809",
    "en": "travel",
    "pos": "v./n.",
    "tr": "seyahat etmek / seyahat",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0810",
    "en": "tree",
    "pos": "n.",
    "tr": "ağaç",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0811",
    "en": "trip",
    "pos": "n.",
    "tr": "gezi",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0812",
    "en": "trousers",
    "pos": "n.",
    "tr": "pantolon",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0813",
    "en": "true",
    "pos": "adj.",
    "tr": "doğru, gerçek",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0814",
    "en": "try",
    "pos": "v.",
    "tr": "denemek",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0815",
    "en": "T-shirt",
    "pos": "n.",
    "tr": "tişört",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0816",
    "en": "Tuesday",
    "pos": "n.",
    "tr": "Salı",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0817",
    "en": "turn",
    "pos": "v./n.",
    "tr": "dönmek / sıra",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0818",
    "en": "TV",
    "pos": "n.",
    "tr": "televizyon",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0819",
    "en": "twelve",
    "pos": "number",
    "tr": "on iki",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0820",
    "en": "twenty",
    "pos": "number",
    "tr": "yirmi",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0821",
    "en": "twice",
    "pos": "adv.",
    "tr": "iki kez",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0822",
    "en": "two",
    "pos": "number",
    "tr": "iki",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0823",
    "en": "type",
    "pos": "n.",
    "tr": "tür",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0824",
    "en": "umbrella",
    "pos": "n.",
    "tr": "şemsiye",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0825",
    "en": "uncle",
    "pos": "n.",
    "tr": "amca, dayı",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0826",
    "en": "under",
    "pos": "prep./adv.",
    "tr": "altında",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0827",
    "en": "understand",
    "pos": "v.",
    "tr": "anlamak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0828",
    "en": "university",
    "pos": "n.",
    "tr": "üniversite",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0829",
    "en": "until",
    "pos": "conj./prep.",
    "tr": "-e kadar",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0830",
    "en": "up",
    "pos": "adv./prep.",
    "tr": "yukarı",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0831",
    "en": "upstairs",
    "pos": "adv.",
    "tr": "üst katta",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0832",
    "en": "us",
    "pos": "pron.",
    "tr": "bizi, bize",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0833",
    "en": "use",
    "pos": "v.",
    "tr": "kullanmak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0834",
    "en": "useful",
    "pos": "adj.",
    "tr": "faydalı",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0835",
    "en": "usually",
    "pos": "adv.",
    "tr": "genellikle",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0836",
    "en": "vacation",
    "pos": "n.",
    "tr": "tatil",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0837",
    "en": "vegetable",
    "pos": "n.",
    "tr": "sebze",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0838",
    "en": "very",
    "pos": "adv.",
    "tr": "çok",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0839",
    "en": "video",
    "pos": "n.",
    "tr": "video",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0840",
    "en": "village",
    "pos": "n.",
    "tr": "köy",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0841",
    "en": "visit",
    "pos": "v.",
    "tr": "ziyaret etmek",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0842",
    "en": "visitor",
    "pos": "n.",
    "tr": "ziyaretçi",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0843",
    "en": "wait",
    "pos": "v.",
    "tr": "beklemek",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0844",
    "en": "waiter",
    "pos": "n.",
    "tr": "garson",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0845",
    "en": "wake",
    "pos": "v.",
    "tr": "uyanmak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0846",
    "en": "walk",
    "pos": "v./n.",
    "tr": "yürümek / yürüyüş",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0847",
    "en": "wall",
    "pos": "n.",
    "tr": "duvar",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0848",
    "en": "want",
    "pos": "v.",
    "tr": "istemek",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0849",
    "en": "warm",
    "pos": "adj.",
    "tr": "ılık, sıcak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0850",
    "en": "wash",
    "pos": "v.",
    "tr": "yıkamak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0851",
    "en": "watch",
    "pos": "v./n.",
    "tr": "izlemek / kol saati",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0852",
    "en": "water",
    "pos": "n.",
    "tr": "su",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0853",
    "en": "way",
    "pos": "n.",
    "tr": "yol, yöntem",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0854",
    "en": "we",
    "pos": "pron.",
    "tr": "biz",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0855",
    "en": "wear",
    "pos": "v.",
    "tr": "giymek",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0856",
    "en": "weather",
    "pos": "n.",
    "tr": "hava (durumu)",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0857",
    "en": "website",
    "pos": "n.",
    "tr": "web sitesi",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0858",
    "en": "Wednesday",
    "pos": "n.",
    "tr": "Çarşamba",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0859",
    "en": "week",
    "pos": "n.",
    "tr": "hafta",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0860",
    "en": "weekend",
    "pos": "n.",
    "tr": "hafta sonu",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0861",
    "en": "welcome",
    "pos": "exclam./v./adj.",
    "tr": "hoş geldin",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0862",
    "en": "well",
    "pos": "adv./adj./exclam.",
    "tr": "iyi",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0863",
    "en": "west",
    "pos": "n./adj./adv.",
    "tr": "batı",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0864",
    "en": "what",
    "pos": "pron./det.",
    "tr": "ne",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0865",
    "en": "when",
    "pos": "adv./pron./conj.",
    "tr": "ne zaman",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0866",
    "en": "where",
    "pos": "adv./conj.",
    "tr": "nerede",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0867",
    "en": "which",
    "pos": "pron./det.",
    "tr": "hangi",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0868",
    "en": "white",
    "pos": "adj./n.",
    "tr": "beyaz",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0869",
    "en": "who",
    "pos": "pron.",
    "tr": "kim",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0870",
    "en": "why",
    "pos": "adv.",
    "tr": "neden",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0871",
    "en": "wife",
    "pos": "n.",
    "tr": "eş (kadın)",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0872",
    "en": "will",
    "pos": "modal v.",
    "tr": "-ecek",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0873",
    "en": "win",
    "pos": "v.",
    "tr": "kazanmak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0874",
    "en": "window",
    "pos": "n.",
    "tr": "pencere",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0875",
    "en": "wine",
    "pos": "n.",
    "tr": "şarap",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0876",
    "en": "winter",
    "pos": "n.",
    "tr": "kış",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0877",
    "en": "with",
    "pos": "prep.",
    "tr": "ile",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0878",
    "en": "without",
    "pos": "prep.",
    "tr": "-siz",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0879",
    "en": "woman",
    "pos": "n.",
    "tr": "kadın",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0880",
    "en": "wonderful",
    "pos": "adj.",
    "tr": "harika",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0881",
    "en": "word",
    "pos": "n.",
    "tr": "kelime",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0882",
    "en": "work",
    "pos": "v./n.",
    "tr": "çalışmak / iş",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0883",
    "en": "worker",
    "pos": "n.",
    "tr": "işçi",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0884",
    "en": "world",
    "pos": "n.",
    "tr": "dünya",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0885",
    "en": "would",
    "pos": "modal v.",
    "tr": "-erdi",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0886",
    "en": "write",
    "pos": "v.",
    "tr": "yazmak",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0887",
    "en": "writer",
    "pos": "n.",
    "tr": "yazar",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0888",
    "en": "writing",
    "pos": "n.",
    "tr": "yazma, yazı",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0889",
    "en": "wrong",
    "pos": "adj.",
    "tr": "yanlış",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0890",
    "en": "yeah",
    "pos": "exclam.",
    "tr": "evet",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0891",
    "en": "year",
    "pos": "n.",
    "tr": "yıl",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0892",
    "en": "yellow",
    "pos": "adj./n.",
    "tr": "sarı",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0893",
    "en": "yes",
    "pos": "exclam.",
    "tr": "evet",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0894",
    "en": "yesterday",
    "pos": "adv./n.",
    "tr": "dün",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0895",
    "en": "you",
    "pos": "pron.",
    "tr": "sen, siz",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0896",
    "en": "young",
    "pos": "adj.",
    "tr": "genç",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0897",
    "en": "your",
    "pos": "det.",
    "tr": "senin",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a1_0898",
    "en": "yourself",
    "pos": "pron.",
    "tr": "kendin",
    "level": "A1",
    "status": "new"
  },
  {
    "id": "a2_0001",
    "en": "ability",
    "pos": "n.",
    "tr": "yetenek",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0002",
    "en": "able",
    "pos": "adj.",
    "tr": "yapabilen",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0003",
    "en": "abroad",
    "pos": "adv.",
    "tr": "yurt dışında",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0004",
    "en": "accept",
    "pos": "v.",
    "tr": "kabul etmek",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0005",
    "en": "accident",
    "pos": "n.",
    "tr": "kaza",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0006",
    "en": "according to",
    "pos": "prep.",
    "tr": "-e göre",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0007",
    "en": "achieve",
    "pos": "v.",
    "tr": "başarmak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0008",
    "en": "act",
    "pos": "v.",
    "tr": "davranmak, rol yapmak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0009",
    "en": "active",
    "pos": "adj.",
    "tr": "aktif",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0010",
    "en": "actually",
    "pos": "adv.",
    "tr": "aslında",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0011",
    "en": "adult",
    "pos": "adj.",
    "tr": "yetişkin",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0012",
    "en": "advantage",
    "pos": "n.",
    "tr": "avantaj",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0013",
    "en": "adventure",
    "pos": "n.",
    "tr": "macera",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0014",
    "en": "advertise",
    "pos": "v.",
    "tr": "reklamını yapmak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0015",
    "en": "advertisement",
    "pos": "n.",
    "tr": "reklam",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0016",
    "en": "advertising",
    "pos": "n.",
    "tr": "reklamcılık",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0017",
    "en": "affect",
    "pos": "v.",
    "tr": "etkilemek",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0018",
    "en": "after",
    "pos": "conj./adv.",
    "tr": "-den sonra",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0019",
    "en": "against",
    "pos": "prep.",
    "tr": "karşı",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0020",
    "en": "ah",
    "pos": "exclam.",
    "tr": "ah",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0021",
    "en": "airline",
    "pos": "n.",
    "tr": "havayolu",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0022",
    "en": "alive",
    "pos": "adj.",
    "tr": "hayatta",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0023",
    "en": "all",
    "pos": "adv.",
    "tr": "tamamen",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0024",
    "en": "all right",
    "pos": "adj./adv.",
    "tr": "tamam, iyi",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0025",
    "en": "allow",
    "pos": "v.",
    "tr": "izin vermek",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0026",
    "en": "almost",
    "pos": "adv.",
    "tr": "neredeyse",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0027",
    "en": "alone",
    "pos": "adj./adv.",
    "tr": "yalnız",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0028",
    "en": "along",
    "pos": "prep./adv.",
    "tr": "boyunca",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0029",
    "en": "already",
    "pos": "adv.",
    "tr": "zaten, çoktan",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0030",
    "en": "alternative",
    "pos": "n.",
    "tr": "alternatif",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0031",
    "en": "although",
    "pos": "conj.",
    "tr": "-mesine rağmen",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0032",
    "en": "among",
    "pos": "prep.",
    "tr": "arasında",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0033",
    "en": "amount",
    "pos": "n.",
    "tr": "miktar",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0034",
    "en": "ancient",
    "pos": "adj.",
    "tr": "antik",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0035",
    "en": "ankle",
    "pos": "n.",
    "tr": "ayak bileği",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0036",
    "en": "any",
    "pos": "adv.",
    "tr": "hiç",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0037",
    "en": "anybody",
    "pos": "pron.",
    "tr": "herhangi biri",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0038",
    "en": "any more",
    "pos": "adv.",
    "tr": "artık",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0039",
    "en": "anyway",
    "pos": "adv.",
    "tr": "her neyse",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0040",
    "en": "anywhere",
    "pos": "adv.",
    "tr": "herhangi bir yerde",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0041",
    "en": "app",
    "pos": "n.",
    "tr": "uygulama",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0042",
    "en": "appear",
    "pos": "v.",
    "tr": "görünmek, ortaya çıkmak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0043",
    "en": "appearance",
    "pos": "n.",
    "tr": "görünüş",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0044",
    "en": "apply",
    "pos": "v.",
    "tr": "başvurmak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0045",
    "en": "architect",
    "pos": "n.",
    "tr": "mimar",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0046",
    "en": "architecture",
    "pos": "n.",
    "tr": "mimarlık",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0047",
    "en": "argue",
    "pos": "v.",
    "tr": "tartışmak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0048",
    "en": "argument",
    "pos": "n.",
    "tr": "tartışma",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0049",
    "en": "army",
    "pos": "n.",
    "tr": "ordu",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0050",
    "en": "arrange",
    "pos": "v.",
    "tr": "düzenlemek",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0051",
    "en": "arrangement",
    "pos": "n.",
    "tr": "düzenleme",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0052",
    "en": "as",
    "pos": "adv./conj.",
    "tr": "-dığı gibi",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0053",
    "en": "asleep",
    "pos": "adj.",
    "tr": "uykuda",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0054",
    "en": "assistant",
    "pos": "n./adj.",
    "tr": "yardımcı",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0055",
    "en": "athlete",
    "pos": "n.",
    "tr": "atlet",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0056",
    "en": "attack",
    "pos": "n./v.",
    "tr": "saldırı / saldırmak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0057",
    "en": "attend",
    "pos": "v.",
    "tr": "katılmak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0058",
    "en": "attention",
    "pos": "n.",
    "tr": "dikkat",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0059",
    "en": "attractive",
    "pos": "adj.",
    "tr": "çekici",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0060",
    "en": "audience",
    "pos": "n.",
    "tr": "izleyici kitlesi",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0061",
    "en": "author",
    "pos": "n.",
    "tr": "yazar",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0062",
    "en": "available",
    "pos": "adj.",
    "tr": "müsait, mevcut",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0063",
    "en": "average",
    "pos": "adj./n.",
    "tr": "ortalama",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0064",
    "en": "avoid",
    "pos": "v.",
    "tr": "kaçınmak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0065",
    "en": "award",
    "pos": "n.",
    "tr": "ödül",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0066",
    "en": "awful",
    "pos": "adj.",
    "tr": "berbat",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0067",
    "en": "back",
    "pos": "adj.",
    "tr": "arka",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0068",
    "en": "background",
    "pos": "n.",
    "tr": "arka plan",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0069",
    "en": "badly",
    "pos": "adv.",
    "tr": "kötü bir şekilde",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0070",
    "en": "bar",
    "pos": "n.",
    "tr": "bar",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0071",
    "en": "baseball",
    "pos": "n.",
    "tr": "beyzbol",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0072",
    "en": "based",
    "pos": "adj.",
    "tr": "dayalı",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0073",
    "en": "basketball",
    "pos": "n.",
    "tr": "basketbol",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0074",
    "en": "bean",
    "pos": "n.",
    "tr": "fasulye",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0075",
    "en": "bear",
    "pos": "n.",
    "tr": "ayı",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0076",
    "en": "beat",
    "pos": "v.",
    "tr": "yenmek, dövmek",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0077",
    "en": "beef",
    "pos": "n.",
    "tr": "dana eti",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0078",
    "en": "before",
    "pos": "conj./adv.",
    "tr": "önceden",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0079",
    "en": "behave",
    "pos": "v.",
    "tr": "davranmak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0080",
    "en": "behaviour",
    "pos": "n.",
    "tr": "davranış",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0081",
    "en": "belong",
    "pos": "v.",
    "tr": "ait olmak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0082",
    "en": "belt",
    "pos": "n.",
    "tr": "kemer",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0083",
    "en": "benefit",
    "pos": "n.",
    "tr": "fayda",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0084",
    "en": "best",
    "pos": "adv./n.",
    "tr": "en iyi",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0085",
    "en": "better",
    "pos": "adv.",
    "tr": "daha iyi",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0086",
    "en": "between",
    "pos": "adv.",
    "tr": "arasında",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0087",
    "en": "billion",
    "pos": "number",
    "tr": "milyar",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0088",
    "en": "bin",
    "pos": "n.",
    "tr": "çöp kutusu",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0089",
    "en": "biology",
    "pos": "n.",
    "tr": "biyoloji",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0090",
    "en": "birth",
    "pos": "n.",
    "tr": "doğum",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0091",
    "en": "biscuit",
    "pos": "n.",
    "tr": "bisküvi",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0092",
    "en": "bit",
    "pos": "n.",
    "tr": "parça, az miktar",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0093",
    "en": "blank",
    "pos": "adj./n.",
    "tr": "boş",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0094",
    "en": "blood",
    "pos": "n.",
    "tr": "kan",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0095",
    "en": "blow",
    "pos": "v.",
    "tr": "üflemek, esmek",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0096",
    "en": "board",
    "pos": "n.",
    "tr": "tahta, kurul",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0097",
    "en": "boil",
    "pos": "v.",
    "tr": "kaynatmak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0098",
    "en": "bone",
    "pos": "n.",
    "tr": "kemik",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0099",
    "en": "book",
    "pos": "v.",
    "tr": "rezervasyon yapmak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0100",
    "en": "borrow",
    "pos": "v.",
    "tr": "ödünç almak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0101",
    "en": "boss",
    "pos": "n.",
    "tr": "patron",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0102",
    "en": "bottom",
    "pos": "n./adj.",
    "tr": "alt kısım",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0103",
    "en": "bowl",
    "pos": "n.",
    "tr": "kase",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0104",
    "en": "brain",
    "pos": "n.",
    "tr": "beyin",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0105",
    "en": "bridge",
    "pos": "n.",
    "tr": "köprü",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0106",
    "en": "bright",
    "pos": "adj.",
    "tr": "parlak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0107",
    "en": "brilliant",
    "pos": "adj.",
    "tr": "harika, parlak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0108",
    "en": "broken",
    "pos": "adj.",
    "tr": "kırık",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0109",
    "en": "brush",
    "pos": "v./n.",
    "tr": "fırçalamak / fırça",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0110",
    "en": "burn",
    "pos": "v.",
    "tr": "yakmak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0111",
    "en": "businessman",
    "pos": "n.",
    "tr": "iş adamı",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0112",
    "en": "button",
    "pos": "n.",
    "tr": "düğme",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0113",
    "en": "camp",
    "pos": "n./v.",
    "tr": "kamp / kamp yapmak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0114",
    "en": "camping",
    "pos": "n.",
    "tr": "kamp yapma",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0115",
    "en": "can",
    "pos": "n.",
    "tr": "teneke kutu",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0116",
    "en": "care",
    "pos": "n./v.",
    "tr": "özen / önemsemek",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0117",
    "en": "careful",
    "pos": "adj.",
    "tr": "dikkatli",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0118",
    "en": "carefully",
    "pos": "adv.",
    "tr": "dikkatlice",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0119",
    "en": "carpet",
    "pos": "n.",
    "tr": "halı",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0120",
    "en": "cartoon",
    "pos": "n.",
    "tr": "çizgi film",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0121",
    "en": "case",
    "pos": "n.",
    "tr": "durum, vaka",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0122",
    "en": "cash",
    "pos": "n.",
    "tr": "nakit",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0123",
    "en": "castle",
    "pos": "n.",
    "tr": "kale",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0124",
    "en": "catch",
    "pos": "v.",
    "tr": "yakalamak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0125",
    "en": "cause",
    "pos": "n./v.",
    "tr": "sebep / sebep olmak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0126",
    "en": "celebrate",
    "pos": "v.",
    "tr": "kutlamak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0127",
    "en": "celebrity",
    "pos": "n.",
    "tr": "ünlü",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0128",
    "en": "certain",
    "pos": "adj.",
    "tr": "kesin, belirli",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0129",
    "en": "certainly",
    "pos": "adv.",
    "tr": "kesinlikle",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0130",
    "en": "chance",
    "pos": "n.",
    "tr": "şans, fırsat",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0131",
    "en": "character",
    "pos": "n.",
    "tr": "karakter",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0132",
    "en": "charity",
    "pos": "n.",
    "tr": "hayır kurumu",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0133",
    "en": "chat",
    "pos": "v./n.",
    "tr": "sohbet etmek / sohbet",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0134",
    "en": "check",
    "pos": "n.",
    "tr": "kontrol",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0135",
    "en": "chef",
    "pos": "n.",
    "tr": "şef aşçı",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0136",
    "en": "chemistry",
    "pos": "n.",
    "tr": "kimya",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0137",
    "en": "chip",
    "pos": "n.",
    "tr": "cips, patates kızartması",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0138",
    "en": "choice",
    "pos": "n.",
    "tr": "seçim",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0139",
    "en": "church",
    "pos": "n.",
    "tr": "kilise",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0140",
    "en": "cigarette",
    "pos": "n.",
    "tr": "sigara",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0141",
    "en": "circle",
    "pos": "n./v.",
    "tr": "daire / daire çizmek",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0142",
    "en": "classical",
    "pos": "adj.",
    "tr": "klasik",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0143",
    "en": "clear",
    "pos": "adj.",
    "tr": "net, açık",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0144",
    "en": "clearly",
    "pos": "adv.",
    "tr": "açıkça",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0145",
    "en": "clever",
    "pos": "adj.",
    "tr": "zeki",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0146",
    "en": "climate",
    "pos": "n.",
    "tr": "iklim",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0147",
    "en": "close",
    "pos": "adj.",
    "tr": "yakın",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0148",
    "en": "closed",
    "pos": "adj.",
    "tr": "kapalı",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0149",
    "en": "clothing",
    "pos": "n.",
    "tr": "giyim",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0150",
    "en": "cloud",
    "pos": "n.",
    "tr": "bulut",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0151",
    "en": "coach",
    "pos": "n.",
    "tr": "antrenör",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0152",
    "en": "coast",
    "pos": "n.",
    "tr": "kıyı",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0153",
    "en": "code",
    "pos": "n.",
    "tr": "kod",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0154",
    "en": "colleague",
    "pos": "n.",
    "tr": "meslektaş",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0155",
    "en": "collect",
    "pos": "v.",
    "tr": "toplamak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0156",
    "en": "column",
    "pos": "n.",
    "tr": "sütun",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0157",
    "en": "comedy",
    "pos": "n.",
    "tr": "komedi",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0158",
    "en": "comfortable",
    "pos": "adj.",
    "tr": "rahat",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0159",
    "en": "comment",
    "pos": "n.",
    "tr": "yorum",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0160",
    "en": "communicate",
    "pos": "v.",
    "tr": "iletişim kurmak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0161",
    "en": "community",
    "pos": "n.",
    "tr": "toplum, topluluk",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0162",
    "en": "compete",
    "pos": "v.",
    "tr": "yarışmak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0163",
    "en": "competition",
    "pos": "n.",
    "tr": "yarışma",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0164",
    "en": "complain",
    "pos": "v.",
    "tr": "şikayet etmek",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0165",
    "en": "completely",
    "pos": "adv.",
    "tr": "tamamen",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0166",
    "en": "condition",
    "pos": "n.",
    "tr": "durum, koşul",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0167",
    "en": "conference",
    "pos": "n.",
    "tr": "konferans",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0168",
    "en": "connect",
    "pos": "v.",
    "tr": "bağlamak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0169",
    "en": "connected",
    "pos": "adj.",
    "tr": "bağlı",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0170",
    "en": "consider",
    "pos": "v.",
    "tr": "düşünmek, göz önünde bulundurmak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0171",
    "en": "contain",
    "pos": "v.",
    "tr": "içermek",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0172",
    "en": "context",
    "pos": "n.",
    "tr": "bağlam",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0173",
    "en": "continent",
    "pos": "n.",
    "tr": "kıta",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0174",
    "en": "continue",
    "pos": "v.",
    "tr": "devam etmek",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0175",
    "en": "control",
    "pos": "n./v.",
    "tr": "kontrol / kontrol etmek",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0176",
    "en": "cook",
    "pos": "n.",
    "tr": "aşçı",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0177",
    "en": "cooker",
    "pos": "n.",
    "tr": "ocak (mutfak)",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0178",
    "en": "copy",
    "pos": "n./v.",
    "tr": "kopya / kopyalamak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0179",
    "en": "corner",
    "pos": "n.",
    "tr": "köşe",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0180",
    "en": "correctly",
    "pos": "adv.",
    "tr": "doğru şekilde",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0181",
    "en": "count",
    "pos": "v.",
    "tr": "saymak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0182",
    "en": "couple",
    "pos": "n.",
    "tr": "çift",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0183",
    "en": "cover",
    "pos": "v.",
    "tr": "örtmek, kapsamak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0184",
    "en": "crazy",
    "pos": "adj.",
    "tr": "çılgın",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0185",
    "en": "creative",
    "pos": "adj.",
    "tr": "yaratıcı",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0186",
    "en": "credit",
    "pos": "n.",
    "tr": "kredi",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0187",
    "en": "crime",
    "pos": "n.",
    "tr": "suç",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0188",
    "en": "criminal",
    "pos": "n.",
    "tr": "suçlu",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0189",
    "en": "cross",
    "pos": "v./n.",
    "tr": "karşıdan karşıya geçmek / haç",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0190",
    "en": "crowd",
    "pos": "n.",
    "tr": "kalabalık",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0191",
    "en": "crowded",
    "pos": "adj.",
    "tr": "kalabalık",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0192",
    "en": "cry",
    "pos": "v.",
    "tr": "ağlamak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0193",
    "en": "cupboard",
    "pos": "n.",
    "tr": "dolap",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0194",
    "en": "curly",
    "pos": "adj.",
    "tr": "kıvırcık",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0195",
    "en": "cycle",
    "pos": "n./v.",
    "tr": "bisiklet / bisiklete binmek",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0196",
    "en": "daily",
    "pos": "adj.",
    "tr": "günlük",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0197",
    "en": "danger",
    "pos": "n.",
    "tr": "tehlike",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0198",
    "en": "dark",
    "pos": "n.",
    "tr": "karanlık",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0199",
    "en": "data",
    "pos": "n.",
    "tr": "veri",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0200",
    "en": "dead",
    "pos": "adj.",
    "tr": "ölü",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0201",
    "en": "deal",
    "pos": "v.",
    "tr": "ele almak, uğraşmak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0202",
    "en": "dear",
    "pos": "exclam.",
    "tr": "aman, ay",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0203",
    "en": "death",
    "pos": "n.",
    "tr": "ölüm",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0204",
    "en": "decision",
    "pos": "n.",
    "tr": "karar",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0205",
    "en": "deep",
    "pos": "adj.",
    "tr": "derin",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0206",
    "en": "definitely",
    "pos": "adv.",
    "tr": "kesinlikle",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0207",
    "en": "degree",
    "pos": "n.",
    "tr": "derece",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0208",
    "en": "dentist",
    "pos": "n.",
    "tr": "diş hekimi",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0209",
    "en": "department",
    "pos": "n.",
    "tr": "bölüm, departman",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0210",
    "en": "depend",
    "pos": "v.",
    "tr": "bağlı olmak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0211",
    "en": "desert",
    "pos": "n.",
    "tr": "çöl",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0212",
    "en": "designer",
    "pos": "n.",
    "tr": "tasarımcı",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0213",
    "en": "destroy",
    "pos": "v.",
    "tr": "yok etmek",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0214",
    "en": "detective",
    "pos": "n.",
    "tr": "dedektif",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0215",
    "en": "develop",
    "pos": "v.",
    "tr": "geliştirmek",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0216",
    "en": "device",
    "pos": "n.",
    "tr": "cihaz",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0217",
    "en": "diary",
    "pos": "n.",
    "tr": "günlük (defter)",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0218",
    "en": "differently",
    "pos": "adv.",
    "tr": "farklı şekilde",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0219",
    "en": "digital",
    "pos": "adj.",
    "tr": "dijital",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0220",
    "en": "direct",
    "pos": "adj.",
    "tr": "doğrudan",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0221",
    "en": "direction",
    "pos": "n.",
    "tr": "yön",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0222",
    "en": "director",
    "pos": "n.",
    "tr": "yönetmen, müdür",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0223",
    "en": "disagree",
    "pos": "v.",
    "tr": "aynı fikirde olmamak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0224",
    "en": "disappear",
    "pos": "v.",
    "tr": "kaybolmak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0225",
    "en": "disaster",
    "pos": "n.",
    "tr": "felaket",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0226",
    "en": "discover",
    "pos": "v.",
    "tr": "keşfetmek",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0227",
    "en": "discovery",
    "pos": "n.",
    "tr": "keşif",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0228",
    "en": "discussion",
    "pos": "n.",
    "tr": "tartışma",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0229",
    "en": "disease",
    "pos": "n.",
    "tr": "hastalık",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0230",
    "en": "distance",
    "pos": "n.",
    "tr": "mesafe",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0231",
    "en": "divorced",
    "pos": "adj.",
    "tr": "boşanmış",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0232",
    "en": "document",
    "pos": "n.",
    "tr": "belge",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0233",
    "en": "double",
    "pos": "adj./v.",
    "tr": "çift / ikiye katlamak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0234",
    "en": "download",
    "pos": "v./n.",
    "tr": "indirmek",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0235",
    "en": "downstairs",
    "pos": "adj.",
    "tr": "alt kat (sıfat)",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0236",
    "en": "drama",
    "pos": "n.",
    "tr": "drama",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0237",
    "en": "drawing",
    "pos": "n.",
    "tr": "çizim",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0238",
    "en": "dream",
    "pos": "n./v.",
    "tr": "rüya / hayal etmek",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0239",
    "en": "drive",
    "pos": "n.",
    "tr": "sürüş, disk",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0240",
    "en": "driving",
    "pos": "n.",
    "tr": "araç kullanma",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0241",
    "en": "drop",
    "pos": "v.",
    "tr": "düşürmek",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0242",
    "en": "drug",
    "pos": "n.",
    "tr": "ilaç, uyuşturucu",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0243",
    "en": "dry",
    "pos": "adj./v.",
    "tr": "kuru / kurutmak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0244",
    "en": "earn",
    "pos": "v.",
    "tr": "kazanmak (para)",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0245",
    "en": "earth",
    "pos": "n.",
    "tr": "dünya, toprak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0246",
    "en": "easily",
    "pos": "adv.",
    "tr": "kolayca",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0247",
    "en": "education",
    "pos": "n.",
    "tr": "eğitim",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0248",
    "en": "effect",
    "pos": "n.",
    "tr": "etki",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0249",
    "en": "either",
    "pos": "det./pron./adv.",
    "tr": "ikisinden biri",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0250",
    "en": "electric",
    "pos": "adj.",
    "tr": "elektrikli",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0251",
    "en": "electrical",
    "pos": "adj.",
    "tr": "elektrikle ilgili",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0252",
    "en": "electricity",
    "pos": "n.",
    "tr": "elektrik",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0253",
    "en": "electronic",
    "pos": "adj.",
    "tr": "elektronik",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0254",
    "en": "employ",
    "pos": "v.",
    "tr": "istihdam etmek",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0255",
    "en": "employee",
    "pos": "n.",
    "tr": "çalışan",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0256",
    "en": "employer",
    "pos": "n.",
    "tr": "işveren",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0257",
    "en": "empty",
    "pos": "adj.",
    "tr": "boş",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0258",
    "en": "ending",
    "pos": "n.",
    "tr": "son (hikaye)",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0259",
    "en": "energy",
    "pos": "n.",
    "tr": "enerji",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0260",
    "en": "engine",
    "pos": "n.",
    "tr": "motor",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0261",
    "en": "engineer",
    "pos": "n.",
    "tr": "mühendis",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0262",
    "en": "enormous",
    "pos": "adj.",
    "tr": "devasa",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0263",
    "en": "enter",
    "pos": "v.",
    "tr": "girmek",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0264",
    "en": "environment",
    "pos": "n.",
    "tr": "çevre",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0265",
    "en": "equipment",
    "pos": "n.",
    "tr": "ekipman",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0266",
    "en": "error",
    "pos": "n.",
    "tr": "hata",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0267",
    "en": "especially",
    "pos": "adv.",
    "tr": "özellikle",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0268",
    "en": "essay",
    "pos": "n.",
    "tr": "deneme, makale",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0269",
    "en": "everyday",
    "pos": "adj.",
    "tr": "günlük, her günkü",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0270",
    "en": "everywhere",
    "pos": "adv.",
    "tr": "her yerde",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0271",
    "en": "evidence",
    "pos": "n.",
    "tr": "kanıt",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0272",
    "en": "exact",
    "pos": "adj.",
    "tr": "tam, kesin",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0273",
    "en": "exactly",
    "pos": "adv.",
    "tr": "tam olarak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0274",
    "en": "excellent",
    "pos": "adj.",
    "tr": "mükemmel",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0275",
    "en": "except",
    "pos": "prep.",
    "tr": "hariç",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0276",
    "en": "exist",
    "pos": "v.",
    "tr": "var olmak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0277",
    "en": "expect",
    "pos": "v.",
    "tr": "beklemek",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0278",
    "en": "experience",
    "pos": "n.",
    "tr": "deneyim",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0279",
    "en": "experiment",
    "pos": "n.",
    "tr": "deney",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0280",
    "en": "expert",
    "pos": "n./adj.",
    "tr": "uzman",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0281",
    "en": "explanation",
    "pos": "n.",
    "tr": "açıklama",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0282",
    "en": "express",
    "pos": "v.",
    "tr": "ifade etmek",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0283",
    "en": "expression",
    "pos": "n.",
    "tr": "ifade",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0284",
    "en": "extreme",
    "pos": "adj.",
    "tr": "aşırı",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0285",
    "en": "extremely",
    "pos": "adv.",
    "tr": "son derece",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0286",
    "en": "factor",
    "pos": "n.",
    "tr": "faktör",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0287",
    "en": "factory",
    "pos": "n.",
    "tr": "fabrika",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0288",
    "en": "fail",
    "pos": "v.",
    "tr": "başarısız olmak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0289",
    "en": "fair",
    "pos": "adj.",
    "tr": "adil",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0290",
    "en": "fall",
    "pos": "n.",
    "tr": "düşüş, sonbahar",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0291",
    "en": "fan",
    "pos": "n.",
    "tr": "hayran",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0292",
    "en": "farm",
    "pos": "v.",
    "tr": "tarım yapmak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0293",
    "en": "farming",
    "pos": "n.",
    "tr": "tarım",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0294",
    "en": "fashion",
    "pos": "n.",
    "tr": "moda",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0295",
    "en": "fat",
    "pos": "n.",
    "tr": "yağ",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0296",
    "en": "fear",
    "pos": "n.",
    "tr": "korku",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0297",
    "en": "feature",
    "pos": "n.",
    "tr": "özellik",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0298",
    "en": "feed",
    "pos": "v.",
    "tr": "beslemek",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0299",
    "en": "female",
    "pos": "adj./n.",
    "tr": "dişi",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0300",
    "en": "fiction",
    "pos": "n.",
    "tr": "kurgu",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0301",
    "en": "field",
    "pos": "n.",
    "tr": "alan, tarla",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0302",
    "en": "fight",
    "pos": "v./n.",
    "tr": "kavga etmek / kavga",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0303",
    "en": "figure",
    "pos": "n.",
    "tr": "rakam, figür",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0304",
    "en": "film",
    "pos": "v.",
    "tr": "filme çekmek",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0305",
    "en": "final",
    "pos": "n.",
    "tr": "final",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0306",
    "en": "finally",
    "pos": "adv.",
    "tr": "sonunda",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0307",
    "en": "finger",
    "pos": "n.",
    "tr": "parmak (el)",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0308",
    "en": "finish",
    "pos": "n.",
    "tr": "bitiş",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0309",
    "en": "first",
    "pos": "n.",
    "tr": "ilk (isim)",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0310",
    "en": "firstly",
    "pos": "adv.",
    "tr": "ilk olarak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0311",
    "en": "fish",
    "pos": "v.",
    "tr": "balık tutmak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0312",
    "en": "fishing",
    "pos": "n.",
    "tr": "balıkçılık",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0313",
    "en": "fit",
    "pos": "v./adj.",
    "tr": "uymak / formda",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0314",
    "en": "fix",
    "pos": "v.",
    "tr": "tamir etmek",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0315",
    "en": "flat",
    "pos": "adj.",
    "tr": "düz",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0316",
    "en": "flu",
    "pos": "n.",
    "tr": "grip",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0317",
    "en": "fly",
    "pos": "n.",
    "tr": "sinek",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0318",
    "en": "flying",
    "pos": "n./adj.",
    "tr": "uçma / uçan",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0319",
    "en": "focus",
    "pos": "v./n.",
    "tr": "odaklanmak / odak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0320",
    "en": "following",
    "pos": "adj.",
    "tr": "aşağıdaki, takip eden",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0321",
    "en": "foreign",
    "pos": "adj.",
    "tr": "yabancı",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0322",
    "en": "forest",
    "pos": "n.",
    "tr": "orman",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0323",
    "en": "fork",
    "pos": "n.",
    "tr": "çatal",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0324",
    "en": "formal",
    "pos": "adj.",
    "tr": "resmi",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0325",
    "en": "fortunately",
    "pos": "adv.",
    "tr": "neyse ki",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0326",
    "en": "forward",
    "pos": "adv.",
    "tr": "ileriye",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0327",
    "en": "free",
    "pos": "adv.",
    "tr": "ücretsiz olarak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0328",
    "en": "fresh",
    "pos": "adj.",
    "tr": "taze",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0329",
    "en": "fridge",
    "pos": "n.",
    "tr": "buzdolabı",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0330",
    "en": "frog",
    "pos": "n.",
    "tr": "kurbağa",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0331",
    "en": "fun",
    "pos": "adj.",
    "tr": "eğlenceli",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0332",
    "en": "furniture",
    "pos": "n.",
    "tr": "mobilya",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0333",
    "en": "further",
    "pos": "adj.",
    "tr": "daha ileri",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0334",
    "en": "future",
    "pos": "adj.",
    "tr": "gelecekteki",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0335",
    "en": "gallery",
    "pos": "n.",
    "tr": "galeri",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0336",
    "en": "gap",
    "pos": "n.",
    "tr": "boşluk",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0337",
    "en": "gas",
    "pos": "n.",
    "tr": "gaz",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0338",
    "en": "gate",
    "pos": "n.",
    "tr": "kapı (bahçe/havalimanı)",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0339",
    "en": "general",
    "pos": "adj.",
    "tr": "genel",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0340",
    "en": "gift",
    "pos": "n.",
    "tr": "hediye",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0341",
    "en": "goal",
    "pos": "n.",
    "tr": "gol, hedef",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0342",
    "en": "god",
    "pos": "n.",
    "tr": "tanrı",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0343",
    "en": "gold",
    "pos": "n./adj.",
    "tr": "altın",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0344",
    "en": "golf",
    "pos": "n.",
    "tr": "golf",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0345",
    "en": "good",
    "pos": "n.",
    "tr": "iyilik",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0346",
    "en": "government",
    "pos": "n.",
    "tr": "hükümet",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0347",
    "en": "grass",
    "pos": "n.",
    "tr": "çim, ot",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0348",
    "en": "greet",
    "pos": "v.",
    "tr": "selamlamak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0349",
    "en": "ground",
    "pos": "n.",
    "tr": "zemin",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0350",
    "en": "guest",
    "pos": "n.",
    "tr": "misafir",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0351",
    "en": "guide",
    "pos": "n./v.",
    "tr": "rehber / rehberlik etmek",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0352",
    "en": "gun",
    "pos": "n.",
    "tr": "silah",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0353",
    "en": "guy",
    "pos": "n.",
    "tr": "adam, herif",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0354",
    "en": "habit",
    "pos": "n.",
    "tr": "alışkanlık",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0355",
    "en": "half",
    "pos": "adv.",
    "tr": "yarı yarıya",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0356",
    "en": "hall",
    "pos": "n.",
    "tr": "salon, koridor",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0357",
    "en": "happily",
    "pos": "adv.",
    "tr": "mutlu bir şekilde",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0358",
    "en": "have",
    "pos": "auxiliary v.",
    "tr": "yardımcı fiil",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0359",
    "en": "headache",
    "pos": "n.",
    "tr": "baş ağrısı",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0360",
    "en": "heart",
    "pos": "n.",
    "tr": "kalp",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0361",
    "en": "heat",
    "pos": "n./v.",
    "tr": "ısı / ısıtmak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0362",
    "en": "heavy",
    "pos": "adj.",
    "tr": "ağır",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0363",
    "en": "height",
    "pos": "n.",
    "tr": "boy, yükseklik",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0364",
    "en": "helpful",
    "pos": "adj.",
    "tr": "yardımsever",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0365",
    "en": "hero",
    "pos": "n.",
    "tr": "kahraman",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0366",
    "en": "hers",
    "pos": "pron.",
    "tr": "onunki (kadın)",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0367",
    "en": "herself",
    "pos": "pron.",
    "tr": "kendisi (kadın)",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0368",
    "en": "hide",
    "pos": "v.",
    "tr": "saklanmak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0369",
    "en": "high",
    "pos": "adv.",
    "tr": "yüksekte",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0370",
    "en": "hill",
    "pos": "n.",
    "tr": "tepe",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0371",
    "en": "himself",
    "pos": "pron.",
    "tr": "kendisi (erkek)",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0372",
    "en": "his",
    "pos": "pron.",
    "tr": "onunki (erkek)",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0373",
    "en": "hit",
    "pos": "v./n.",
    "tr": "vurmak / vuruş",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0374",
    "en": "hockey",
    "pos": "n.",
    "tr": "hokey",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0375",
    "en": "hold",
    "pos": "v.",
    "tr": "tutmak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0376",
    "en": "hole",
    "pos": "n.",
    "tr": "delik",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0377",
    "en": "home",
    "pos": "adj.",
    "tr": "ev ile ilgili",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0378",
    "en": "hope",
    "pos": "n.",
    "tr": "umut",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0379",
    "en": "huge",
    "pos": "adj.",
    "tr": "kocaman",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0380",
    "en": "human",
    "pos": "adj./n.",
    "tr": "insan",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0381",
    "en": "hurt",
    "pos": "v./adj.",
    "tr": "incitmek / incinmiş",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0382",
    "en": "ideal",
    "pos": "adj.",
    "tr": "ideal",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0383",
    "en": "identify",
    "pos": "v.",
    "tr": "tanımlamak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0384",
    "en": "ill",
    "pos": "adj.",
    "tr": "hasta",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0385",
    "en": "illness",
    "pos": "n.",
    "tr": "hastalık",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0386",
    "en": "image",
    "pos": "n.",
    "tr": "görüntü, imaj",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0387",
    "en": "immediately",
    "pos": "adv.",
    "tr": "hemen",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0388",
    "en": "impossible",
    "pos": "adj.",
    "tr": "imkansız",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0389",
    "en": "included",
    "pos": "adj.",
    "tr": "dahil",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0390",
    "en": "including",
    "pos": "prep.",
    "tr": "dahil olmak üzere",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0391",
    "en": "increase",
    "pos": "v./n.",
    "tr": "artmak / artış",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0392",
    "en": "incredible",
    "pos": "adj.",
    "tr": "inanılmaz",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0393",
    "en": "independent",
    "pos": "adj.",
    "tr": "bağımsız",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0394",
    "en": "individual",
    "pos": "n./adj.",
    "tr": "birey",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0395",
    "en": "industry",
    "pos": "n.",
    "tr": "sanayi",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0396",
    "en": "informal",
    "pos": "adj.",
    "tr": "gayri resmi",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0397",
    "en": "injury",
    "pos": "n.",
    "tr": "yaralanma",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0398",
    "en": "insect",
    "pos": "n.",
    "tr": "böcek",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0399",
    "en": "inside",
    "pos": "prep./adv./n./adj.",
    "tr": "içinde, iç",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0400",
    "en": "instead",
    "pos": "adv.",
    "tr": "onun yerine",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0401",
    "en": "instruction",
    "pos": "n.",
    "tr": "talimat",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0402",
    "en": "instructor",
    "pos": "n.",
    "tr": "eğitmen",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0403",
    "en": "instrument",
    "pos": "n.",
    "tr": "alet, enstrüman",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0404",
    "en": "intelligent",
    "pos": "adj.",
    "tr": "zeki",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0405",
    "en": "international",
    "pos": "adj.",
    "tr": "uluslararası",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0406",
    "en": "introduction",
    "pos": "n.",
    "tr": "giriş, tanıtma",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0407",
    "en": "invent",
    "pos": "v.",
    "tr": "icat etmek",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0408",
    "en": "invention",
    "pos": "n.",
    "tr": "icat",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0409",
    "en": "invitation",
    "pos": "n.",
    "tr": "davet",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0410",
    "en": "invite",
    "pos": "v.",
    "tr": "davet etmek",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0411",
    "en": "involve",
    "pos": "v.",
    "tr": "içermek, gerektirmek",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0412",
    "en": "item",
    "pos": "n.",
    "tr": "öğe, madde",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0413",
    "en": "itself",
    "pos": "pron.",
    "tr": "kendisi (nesne)",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0414",
    "en": "jam",
    "pos": "n.",
    "tr": "reçel",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0415",
    "en": "jazz",
    "pos": "n.",
    "tr": "caz",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0416",
    "en": "jewellery",
    "pos": "n.",
    "tr": "mücevher",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0417",
    "en": "joke",
    "pos": "n./v.",
    "tr": "şaka / şaka yapmak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0418",
    "en": "journalist",
    "pos": "n.",
    "tr": "gazeteci",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0419",
    "en": "jump",
    "pos": "v./n.",
    "tr": "zıplamak / zıplama",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0420",
    "en": "kid",
    "pos": "n.",
    "tr": "çocuk",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0421",
    "en": "kill",
    "pos": "v.",
    "tr": "öldürmek",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0422",
    "en": "king",
    "pos": "n.",
    "tr": "kral",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0423",
    "en": "knee",
    "pos": "n.",
    "tr": "diz",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0424",
    "en": "knife",
    "pos": "n.",
    "tr": "bıçak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0425",
    "en": "knock",
    "pos": "v.",
    "tr": "kapıyı çalmak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0426",
    "en": "knowledge",
    "pos": "n.",
    "tr": "bilgi",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0427",
    "en": "lab",
    "pos": "n.",
    "tr": "laboratuvar",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0428",
    "en": "lady",
    "pos": "n.",
    "tr": "hanımefendi",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0429",
    "en": "lake",
    "pos": "n.",
    "tr": "göl",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0430",
    "en": "lamp",
    "pos": "n.",
    "tr": "lamba",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0431",
    "en": "land",
    "pos": "v.",
    "tr": "inmek (uçak)",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0432",
    "en": "laptop",
    "pos": "n.",
    "tr": "dizüstü bilgisayar",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0433",
    "en": "last",
    "pos": "adv./n.",
    "tr": "en son",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0434",
    "en": "later",
    "pos": "adj.",
    "tr": "sonraki",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0435",
    "en": "laughter",
    "pos": "n.",
    "tr": "kahkaha",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0436",
    "en": "law",
    "pos": "n.",
    "tr": "kanun",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0437",
    "en": "lawyer",
    "pos": "n.",
    "tr": "avukat",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0438",
    "en": "lazy",
    "pos": "adj.",
    "tr": "tembel",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0439",
    "en": "lead",
    "pos": "v.",
    "tr": "önderlik etmek",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0440",
    "en": "leader",
    "pos": "n.",
    "tr": "lider",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0441",
    "en": "learning",
    "pos": "n.",
    "tr": "öğrenme",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0442",
    "en": "least",
    "pos": "det./pron./adv.",
    "tr": "en az",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0443",
    "en": "lecture",
    "pos": "n.",
    "tr": "ders, konferans",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0444",
    "en": "lemon",
    "pos": "n.",
    "tr": "limon",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0445",
    "en": "lend",
    "pos": "v.",
    "tr": "ödünç vermek",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0446",
    "en": "less",
    "pos": "det./pron./adv.",
    "tr": "daha az",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0447",
    "en": "level",
    "pos": "n.",
    "tr": "seviye",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0448",
    "en": "lifestyle",
    "pos": "n.",
    "tr": "yaşam tarzı",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0449",
    "en": "lift",
    "pos": "v./n.",
    "tr": "kaldırmak / asansör",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0450",
    "en": "light",
    "pos": "v.",
    "tr": "yakmak (ışık)",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0451",
    "en": "light (not heavy)",
    "pos": "adj.",
    "tr": "hafif",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0452",
    "en": "likely",
    "pos": "adj.",
    "tr": "muhtemel",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0453",
    "en": "link",
    "pos": "n./v.",
    "tr": "bağlantı / bağlamak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0454",
    "en": "listener",
    "pos": "n.",
    "tr": "dinleyici",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0455",
    "en": "little",
    "pos": "adv.",
    "tr": "biraz",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0456",
    "en": "lock",
    "pos": "v./n.",
    "tr": "kilitlemek / kilit",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0457",
    "en": "look",
    "pos": "n.",
    "tr": "görünüş, bakış",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0458",
    "en": "lorry",
    "pos": "n.",
    "tr": "kamyon",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0459",
    "en": "lost",
    "pos": "adj.",
    "tr": "kayıp",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0460",
    "en": "loud",
    "pos": "adj./adv.",
    "tr": "yüksek sesli",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0461",
    "en": "loudly",
    "pos": "adv.",
    "tr": "yüksek sesle",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0462",
    "en": "lovely",
    "pos": "adj.",
    "tr": "güzel, sevimli",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0463",
    "en": "low",
    "pos": "adj./adv.",
    "tr": "alçak, düşük",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0464",
    "en": "luck",
    "pos": "n.",
    "tr": "şans",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0465",
    "en": "lucky",
    "pos": "adj.",
    "tr": "şanslı",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0466",
    "en": "mail",
    "pos": "n./v.",
    "tr": "posta / postalamak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0467",
    "en": "major",
    "pos": "adj.",
    "tr": "büyük, önemli",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0468",
    "en": "male",
    "pos": "adj./n.",
    "tr": "erkek",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0469",
    "en": "manage",
    "pos": "v.",
    "tr": "yönetmek, başarmak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0470",
    "en": "manager",
    "pos": "n.",
    "tr": "yönetici",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0471",
    "en": "manner",
    "pos": "n.",
    "tr": "tarz, tavır",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0472",
    "en": "mark",
    "pos": "v./n.",
    "tr": "işaretlemek / işaret, not (sınav)",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0473",
    "en": "marry",
    "pos": "v.",
    "tr": "evlenmek",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0474",
    "en": "material",
    "pos": "n.",
    "tr": "malzeme",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0475",
    "en": "mathematics",
    "pos": "n.",
    "tr": "matematik",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0476",
    "en": "maths",
    "pos": "n.",
    "tr": "matematik",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0477",
    "en": "matter",
    "pos": "n./v.",
    "tr": "mesele / önemli olmak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0478",
    "en": "may",
    "pos": "modal v.",
    "tr": "-ebilir",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0479",
    "en": "media",
    "pos": "n.",
    "tr": "medya",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0480",
    "en": "medical",
    "pos": "adj.",
    "tr": "tıbbi",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0481",
    "en": "medicine",
    "pos": "n.",
    "tr": "ilaç, tıp",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0482",
    "en": "memory",
    "pos": "n.",
    "tr": "hafıza, anı",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0483",
    "en": "mention",
    "pos": "v.",
    "tr": "bahsetmek",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0484",
    "en": "metal",
    "pos": "n.",
    "tr": "metal",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0485",
    "en": "method",
    "pos": "n.",
    "tr": "yöntem",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0486",
    "en": "middle",
    "pos": "n./adj.",
    "tr": "orta",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0487",
    "en": "might",
    "pos": "modal v.",
    "tr": "-ebilir (olasılık)",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0488",
    "en": "mind",
    "pos": "n./v.",
    "tr": "zihin / önemsemek",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0489",
    "en": "mine",
    "pos": "pron.",
    "tr": "benimki",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0490",
    "en": "mirror",
    "pos": "n.",
    "tr": "ayna",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0491",
    "en": "missing",
    "pos": "adj.",
    "tr": "eksik, kayıp",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0492",
    "en": "mobile",
    "pos": "adj./n.",
    "tr": "cep telefonu",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0493",
    "en": "monkey",
    "pos": "n.",
    "tr": "maymun",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0494",
    "en": "moon",
    "pos": "n.",
    "tr": "ay (gök cismi)",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0495",
    "en": "mostly",
    "pos": "adv.",
    "tr": "çoğunlukla",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0496",
    "en": "motorcycle",
    "pos": "n.",
    "tr": "motosiklet",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0497",
    "en": "movement",
    "pos": "n.",
    "tr": "hareket",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0498",
    "en": "musical",
    "pos": "adj.",
    "tr": "müzikal",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0499",
    "en": "musician",
    "pos": "n.",
    "tr": "müzisyen",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0500",
    "en": "myself",
    "pos": "pron.",
    "tr": "kendim",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0501",
    "en": "narrow",
    "pos": "adj.",
    "tr": "dar",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0502",
    "en": "national",
    "pos": "adj.",
    "tr": "ulusal",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0503",
    "en": "nature",
    "pos": "n.",
    "tr": "doğa",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0504",
    "en": "nearly",
    "pos": "adv.",
    "tr": "neredeyse",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0505",
    "en": "necessary",
    "pos": "adj.",
    "tr": "gerekli",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0506",
    "en": "neck",
    "pos": "n.",
    "tr": "boyun",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0507",
    "en": "need",
    "pos": "n.",
    "tr": "ihtiyaç",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0508",
    "en": "neither",
    "pos": "det./pron.",
    "tr": "hiçbiri",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0509",
    "en": "nervous",
    "pos": "adj.",
    "tr": "gergin",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0510",
    "en": "network",
    "pos": "n.",
    "tr": "ağ",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0511",
    "en": "noise",
    "pos": "n.",
    "tr": "gürültü",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0512",
    "en": "noisy",
    "pos": "adj.",
    "tr": "gürültülü",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0513",
    "en": "none",
    "pos": "pron.",
    "tr": "hiçbiri",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0514",
    "en": "normal",
    "pos": "adj.",
    "tr": "normal",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0515",
    "en": "normally",
    "pos": "adv.",
    "tr": "normalde",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0516",
    "en": "notice",
    "pos": "v./n.",
    "tr": "fark etmek / uyarı",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0517",
    "en": "novel",
    "pos": "n.",
    "tr": "roman",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0518",
    "en": "nowhere",
    "pos": "adv.",
    "tr": "hiçbir yerde",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0519",
    "en": "number",
    "pos": "v.",
    "tr": "numaralandırmak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0520",
    "en": "nut",
    "pos": "n.",
    "tr": "kuruyemiş",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0521",
    "en": "ocean",
    "pos": "n.",
    "tr": "okyanus",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0522",
    "en": "offer",
    "pos": "v./n.",
    "tr": "teklif etmek / teklif",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0523",
    "en": "officer",
    "pos": "n.",
    "tr": "memur, subay",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0524",
    "en": "oil",
    "pos": "n.",
    "tr": "yağ, petrol",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0525",
    "en": "onto",
    "pos": "prep.",
    "tr": "üzerine",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0526",
    "en": "opportunity",
    "pos": "n.",
    "tr": "fırsat",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0527",
    "en": "option",
    "pos": "n.",
    "tr": "seçenek",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0528",
    "en": "ordinary",
    "pos": "adj.",
    "tr": "sıradan",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0529",
    "en": "organization",
    "pos": "n.",
    "tr": "organizasyon",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0530",
    "en": "organize",
    "pos": "v.",
    "tr": "organize etmek",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0531",
    "en": "original",
    "pos": "adj.",
    "tr": "orijinal",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0532",
    "en": "ourselves",
    "pos": "pron.",
    "tr": "kendimiz",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0533",
    "en": "outside",
    "pos": "prep./n./adj.",
    "tr": "dışarısı",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0534",
    "en": "oven",
    "pos": "n.",
    "tr": "fırın",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0535",
    "en": "own",
    "pos": "v.",
    "tr": "sahip olmak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0536",
    "en": "owner",
    "pos": "n.",
    "tr": "sahip",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0537",
    "en": "pack",
    "pos": "v.",
    "tr": "paketlemek",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0538",
    "en": "pain",
    "pos": "n.",
    "tr": "ağrı",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0539",
    "en": "painter",
    "pos": "n.",
    "tr": "ressam",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0540",
    "en": "palace",
    "pos": "n.",
    "tr": "saray",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0541",
    "en": "pants",
    "pos": "n.",
    "tr": "külot, pantolon (AmE)",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0542",
    "en": "parking",
    "pos": "n.",
    "tr": "park etme",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0543",
    "en": "particular",
    "pos": "adj.",
    "tr": "belirli, özel",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0544",
    "en": "pass",
    "pos": "v.",
    "tr": "geçmek",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0545",
    "en": "passenger",
    "pos": "n.",
    "tr": "yolcu",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0546",
    "en": "past",
    "pos": "adv.",
    "tr": "geçerek",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0547",
    "en": "patient",
    "pos": "n.",
    "tr": "hasta (kişi)",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0548",
    "en": "pattern",
    "pos": "n.",
    "tr": "desen, kalıp",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0549",
    "en": "pay",
    "pos": "n.",
    "tr": "maaş, ücret",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0550",
    "en": "peace",
    "pos": "n.",
    "tr": "barış",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0551",
    "en": "penny",
    "pos": "n.",
    "tr": "peni",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0552",
    "en": "per",
    "pos": "prep.",
    "tr": "başına",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0553",
    "en": "per cent",
    "pos": "n./adj./adv.",
    "tr": "yüzde",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0554",
    "en": "perform",
    "pos": "v.",
    "tr": "performans sergilemek",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0555",
    "en": "perhaps",
    "pos": "adv.",
    "tr": "belki",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0556",
    "en": "permission",
    "pos": "n.",
    "tr": "izin",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0557",
    "en": "personality",
    "pos": "n.",
    "tr": "kişilik",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0558",
    "en": "pet",
    "pos": "n.",
    "tr": "evcil hayvan",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0559",
    "en": "petrol",
    "pos": "n.",
    "tr": "benzin",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0560",
    "en": "photograph",
    "pos": "v.",
    "tr": "fotoğraflamak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0561",
    "en": "physical",
    "pos": "adj.",
    "tr": "fiziksel",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0562",
    "en": "physics",
    "pos": "n.",
    "tr": "fizik",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0563",
    "en": "pick",
    "pos": "v.",
    "tr": "seçmek, toplamak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0564",
    "en": "pilot",
    "pos": "n.",
    "tr": "pilot",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0565",
    "en": "planet",
    "pos": "n.",
    "tr": "gezegen",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0566",
    "en": "plant",
    "pos": "v.",
    "tr": "dikmek (bitki)",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0567",
    "en": "plastic",
    "pos": "n./adj.",
    "tr": "plastik",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0568",
    "en": "plate",
    "pos": "n.",
    "tr": "tabak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0569",
    "en": "platform",
    "pos": "n.",
    "tr": "platform",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0570",
    "en": "please",
    "pos": "v.",
    "tr": "memnun etmek",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0571",
    "en": "pleased",
    "pos": "adj.",
    "tr": "memnun",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0572",
    "en": "pocket",
    "pos": "n.",
    "tr": "cep",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0573",
    "en": "polite",
    "pos": "adj.",
    "tr": "kibar",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0574",
    "en": "pollution",
    "pos": "n.",
    "tr": "kirlilik",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0575",
    "en": "pop",
    "pos": "n./adj.",
    "tr": "pop müzik",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0576",
    "en": "population",
    "pos": "n.",
    "tr": "nüfus",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0577",
    "en": "position",
    "pos": "n.",
    "tr": "konum, pozisyon",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0578",
    "en": "possession",
    "pos": "n.",
    "tr": "mülkiyet, eşya",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0579",
    "en": "possibility",
    "pos": "n.",
    "tr": "olasılık",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0580",
    "en": "poster",
    "pos": "n.",
    "tr": "poster",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0581",
    "en": "power",
    "pos": "n.",
    "tr": "güç",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0582",
    "en": "predict",
    "pos": "v.",
    "tr": "tahmin etmek",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0583",
    "en": "present",
    "pos": "v.",
    "tr": "sunmak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0584",
    "en": "president",
    "pos": "n.",
    "tr": "başkan",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0585",
    "en": "prevent",
    "pos": "v.",
    "tr": "önlemek",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0586",
    "en": "print",
    "pos": "v.",
    "tr": "yazdırmak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0587",
    "en": "printer",
    "pos": "n.",
    "tr": "yazıcı",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0588",
    "en": "prison",
    "pos": "n.",
    "tr": "hapishane",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0589",
    "en": "prize",
    "pos": "n.",
    "tr": "ödül",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0590",
    "en": "process",
    "pos": "n.",
    "tr": "süreç",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0591",
    "en": "produce",
    "pos": "v.",
    "tr": "üretmek",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0592",
    "en": "professional",
    "pos": "adj.",
    "tr": "profesyonel",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0593",
    "en": "professor",
    "pos": "n.",
    "tr": "profesör",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0594",
    "en": "profile",
    "pos": "n.",
    "tr": "profil",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0595",
    "en": "program",
    "pos": "n.",
    "tr": "program (bilgisayar)",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0596",
    "en": "progress",
    "pos": "n.",
    "tr": "ilerleme",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0597",
    "en": "promise",
    "pos": "v./n.",
    "tr": "söz vermek / söz",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0598",
    "en": "pronounce",
    "pos": "v.",
    "tr": "telaffuz etmek",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0599",
    "en": "protect",
    "pos": "v.",
    "tr": "korumak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0600",
    "en": "provide",
    "pos": "v.",
    "tr": "sağlamak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0601",
    "en": "pub",
    "pos": "n.",
    "tr": "bar, pub",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0602",
    "en": "public",
    "pos": "adj./n.",
    "tr": "halka açık / halk",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0603",
    "en": "publish",
    "pos": "v.",
    "tr": "yayımlamak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0604",
    "en": "pull",
    "pos": "v.",
    "tr": "çekmek",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0605",
    "en": "purpose",
    "pos": "n.",
    "tr": "amaç",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0606",
    "en": "push",
    "pos": "v.",
    "tr": "itmek",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0607",
    "en": "quality",
    "pos": "n.",
    "tr": "kalite",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0608",
    "en": "quantity",
    "pos": "n.",
    "tr": "miktar",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0609",
    "en": "queen",
    "pos": "n.",
    "tr": "kraliçe",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0610",
    "en": "question",
    "pos": "v.",
    "tr": "sorgulamak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0611",
    "en": "quietly",
    "pos": "adv.",
    "tr": "sessizce",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0612",
    "en": "race",
    "pos": "n./v.",
    "tr": "yarış / yarışmak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0613",
    "en": "railway",
    "pos": "n.",
    "tr": "demiryolu",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0614",
    "en": "raise",
    "pos": "v.",
    "tr": "kaldırmak, yükseltmek",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0615",
    "en": "rate",
    "pos": "n.",
    "tr": "oran",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0616",
    "en": "rather",
    "pos": "adv.",
    "tr": "oldukça, daha çok",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0617",
    "en": "reach",
    "pos": "v.",
    "tr": "ulaşmak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0618",
    "en": "react",
    "pos": "v.",
    "tr": "tepki vermek",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0619",
    "en": "realize",
    "pos": "v.",
    "tr": "fark etmek",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0620",
    "en": "receive",
    "pos": "v.",
    "tr": "almak (teslim)",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0621",
    "en": "recent",
    "pos": "adj.",
    "tr": "son zamanlardaki",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0622",
    "en": "recently",
    "pos": "adv.",
    "tr": "son zamanlarda",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0623",
    "en": "reception",
    "pos": "n.",
    "tr": "resepsiyon",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0624",
    "en": "recipe",
    "pos": "n.",
    "tr": "tarif (yemek)",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0625",
    "en": "recognize",
    "pos": "v.",
    "tr": "tanımak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0626",
    "en": "recommend",
    "pos": "v.",
    "tr": "tavsiye etmek",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0627",
    "en": "record",
    "pos": "n./v.",
    "tr": "kayıt / kaydetmek",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0628",
    "en": "recording",
    "pos": "n.",
    "tr": "kayıt",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0629",
    "en": "recycle",
    "pos": "v.",
    "tr": "geri dönüştürmek",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0630",
    "en": "reduce",
    "pos": "v.",
    "tr": "azaltmak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0631",
    "en": "refer",
    "pos": "v.",
    "tr": "atıfta bulunmak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0632",
    "en": "refuse",
    "pos": "v.",
    "tr": "reddetmek",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0633",
    "en": "region",
    "pos": "n.",
    "tr": "bölge",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0634",
    "en": "regular",
    "pos": "adj.",
    "tr": "düzenli",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0635",
    "en": "relationship",
    "pos": "n.",
    "tr": "ilişki",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0636",
    "en": "remove",
    "pos": "v.",
    "tr": "kaldırmak, çıkarmak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0637",
    "en": "repair",
    "pos": "v.",
    "tr": "tamir etmek",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0638",
    "en": "replace",
    "pos": "v.",
    "tr": "değiştirmek, yerine koymak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0639",
    "en": "reply",
    "pos": "v./n.",
    "tr": "yanıtlamak / yanıt",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0640",
    "en": "report",
    "pos": "v.",
    "tr": "rapor etmek",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0641",
    "en": "reporter",
    "pos": "n.",
    "tr": "muhabir",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0642",
    "en": "request",
    "pos": "n.",
    "tr": "istek",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0643",
    "en": "research",
    "pos": "n./v.",
    "tr": "araştırma / araştırmak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0644",
    "en": "researcher",
    "pos": "n.",
    "tr": "araştırmacı",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0645",
    "en": "respond",
    "pos": "v.",
    "tr": "yanıt vermek",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0646",
    "en": "response",
    "pos": "n.",
    "tr": "yanıt",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0647",
    "en": "rest",
    "pos": "n.",
    "tr": "geri kalan / dinlenme",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0648",
    "en": "review",
    "pos": "n./v.",
    "tr": "değerlendirme / gözden geçirmek",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0649",
    "en": "ride",
    "pos": "n.",
    "tr": "biniş",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0650",
    "en": "ring",
    "pos": "n.",
    "tr": "yüzük",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0651",
    "en": "rise",
    "pos": "v.",
    "tr": "yükselmek",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0652",
    "en": "rock",
    "pos": "n.",
    "tr": "kaya / rock müzik",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0653",
    "en": "role",
    "pos": "n.",
    "tr": "rol",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0654",
    "en": "roof",
    "pos": "n.",
    "tr": "çatı",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0655",
    "en": "round",
    "pos": "adj./adv./prep.",
    "tr": "yuvarlak, etrafında",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0656",
    "en": "route",
    "pos": "n.",
    "tr": "güzergah",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0657",
    "en": "rubbish",
    "pos": "n.",
    "tr": "çöp",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0658",
    "en": "rude",
    "pos": "adj.",
    "tr": "kaba",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0659",
    "en": "run",
    "pos": "n.",
    "tr": "koşu",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0660",
    "en": "runner",
    "pos": "n.",
    "tr": "koşucu",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0661",
    "en": "running",
    "pos": "n.",
    "tr": "koşu",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0662",
    "en": "sadly",
    "pos": "adv.",
    "tr": "üzücü bir şekilde",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0663",
    "en": "safe",
    "pos": "adj.",
    "tr": "güvenli",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0664",
    "en": "sail",
    "pos": "v.",
    "tr": "yelken açmak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0665",
    "en": "sailing",
    "pos": "n.",
    "tr": "yelkencilik",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0666",
    "en": "salary",
    "pos": "n.",
    "tr": "maaş",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0667",
    "en": "sale",
    "pos": "n.",
    "tr": "satış",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0668",
    "en": "sauce",
    "pos": "n.",
    "tr": "sos",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0669",
    "en": "save",
    "pos": "v.",
    "tr": "kurtarmak, biriktirmek",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0670",
    "en": "scared",
    "pos": "adj.",
    "tr": "korkmuş",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0671",
    "en": "scary",
    "pos": "adj.",
    "tr": "korkutucu",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0672",
    "en": "scene",
    "pos": "n.",
    "tr": "sahne",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0673",
    "en": "schedule",
    "pos": "n.",
    "tr": "program, çizelge",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0674",
    "en": "score",
    "pos": "v./n.",
    "tr": "gol atmak / skor",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0675",
    "en": "screen",
    "pos": "n.",
    "tr": "ekran",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0676",
    "en": "search",
    "pos": "n./v.",
    "tr": "arama / aramak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0677",
    "en": "season",
    "pos": "n.",
    "tr": "mevsim, sezon",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0678",
    "en": "seat",
    "pos": "n.",
    "tr": "koltuk",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0679",
    "en": "second",
    "pos": "adv.",
    "tr": "ikinci olarak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0680",
    "en": "secondly",
    "pos": "adv.",
    "tr": "ikinci olarak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0681",
    "en": "secret",
    "pos": "adj./n.",
    "tr": "gizli / sır",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0682",
    "en": "secretary",
    "pos": "n.",
    "tr": "sekreter",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0683",
    "en": "seem",
    "pos": "v.",
    "tr": "gibi görünmek",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0684",
    "en": "sense",
    "pos": "n.",
    "tr": "duyu, anlam",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0685",
    "en": "separate",
    "pos": "adj.",
    "tr": "ayrı",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0686",
    "en": "series",
    "pos": "n.",
    "tr": "dizi",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0687",
    "en": "serious",
    "pos": "adj.",
    "tr": "ciddi",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0688",
    "en": "serve",
    "pos": "v.",
    "tr": "hizmet etmek, servis yapmak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0689",
    "en": "service",
    "pos": "n.",
    "tr": "hizmet",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0690",
    "en": "several",
    "pos": "det./pron.",
    "tr": "birkaç",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0691",
    "en": "shake",
    "pos": "v.",
    "tr": "sallamak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0692",
    "en": "shall",
    "pos": "modal v.",
    "tr": "-ecek (teklif)",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0693",
    "en": "shape",
    "pos": "n.",
    "tr": "şekil",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0694",
    "en": "sheet",
    "pos": "n.",
    "tr": "yaprak (kağıt), çarşaf",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0695",
    "en": "ship",
    "pos": "n.",
    "tr": "gemi",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0696",
    "en": "shoulder",
    "pos": "n.",
    "tr": "omuz",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0697",
    "en": "shout",
    "pos": "v./n.",
    "tr": "bağırmak / bağırış",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0698",
    "en": "shut",
    "pos": "v./adj.",
    "tr": "kapamak / kapalı",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0699",
    "en": "side",
    "pos": "n.",
    "tr": "taraf",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0700",
    "en": "sign",
    "pos": "n./v.",
    "tr": "işaret / imzalamak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0701",
    "en": "silver",
    "pos": "n./adj.",
    "tr": "gümüş",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0702",
    "en": "simple",
    "pos": "adj.",
    "tr": "basit",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0703",
    "en": "since",
    "pos": "prep./conj.",
    "tr": "-den beri",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0704",
    "en": "singing",
    "pos": "n.",
    "tr": "şarkı söyleme",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0705",
    "en": "single",
    "pos": "adj./n.",
    "tr": "tek, bekar",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0706",
    "en": "sir",
    "pos": "n.",
    "tr": "efendim",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0707",
    "en": "site",
    "pos": "n.",
    "tr": "site, alan",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0708",
    "en": "size",
    "pos": "n.",
    "tr": "boyut",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0709",
    "en": "ski",
    "pos": "v./n.",
    "tr": "kayak yapmak / kayak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0710",
    "en": "skiing",
    "pos": "n.",
    "tr": "kayak (spor)",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0711",
    "en": "skin",
    "pos": "n.",
    "tr": "cilt, deri",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0712",
    "en": "sky",
    "pos": "n.",
    "tr": "gökyüzü",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0713",
    "en": "sleep",
    "pos": "n.",
    "tr": "uyku",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0714",
    "en": "slowly",
    "pos": "adv.",
    "tr": "yavaşça",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0715",
    "en": "smartphone",
    "pos": "n.",
    "tr": "akıllı telefon",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0716",
    "en": "smell",
    "pos": "v./n.",
    "tr": "koku almak / koku",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0717",
    "en": "smile",
    "pos": "v./n.",
    "tr": "gülümsemek / gülümseme",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0718",
    "en": "smoke",
    "pos": "n./v.",
    "tr": "duman / sigara içmek",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0719",
    "en": "smoking",
    "pos": "n.",
    "tr": "sigara içme",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0720",
    "en": "soap",
    "pos": "n.",
    "tr": "sabun",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0721",
    "en": "soccer",
    "pos": "n.",
    "tr": "futbol",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0722",
    "en": "social",
    "pos": "adj.",
    "tr": "sosyal",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0723",
    "en": "society",
    "pos": "n.",
    "tr": "toplum",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0724",
    "en": "sock",
    "pos": "n.",
    "tr": "çorap",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0725",
    "en": "soft",
    "pos": "adj.",
    "tr": "yumuşak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0726",
    "en": "soldier",
    "pos": "n.",
    "tr": "asker",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0727",
    "en": "solution",
    "pos": "n.",
    "tr": "çözüm",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0728",
    "en": "solve",
    "pos": "v.",
    "tr": "çözmek",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0729",
    "en": "somewhere",
    "pos": "adv./pron.",
    "tr": "bir yerde",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0730",
    "en": "sort",
    "pos": "n.",
    "tr": "tür, çeşit",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0731",
    "en": "source",
    "pos": "n.",
    "tr": "kaynak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0732",
    "en": "speaker",
    "pos": "n.",
    "tr": "konuşmacı",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0733",
    "en": "specific",
    "pos": "adj.",
    "tr": "belirli",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0734",
    "en": "speech",
    "pos": "n.",
    "tr": "konuşma",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0735",
    "en": "speed",
    "pos": "n.",
    "tr": "hız",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0736",
    "en": "spider",
    "pos": "n.",
    "tr": "örümcek",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0737",
    "en": "spoon",
    "pos": "n.",
    "tr": "kaşık",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0738",
    "en": "square",
    "pos": "adj./n.",
    "tr": "kare / meydan",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0739",
    "en": "stage",
    "pos": "n.",
    "tr": "sahne, aşama",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0740",
    "en": "stair",
    "pos": "n.",
    "tr": "merdiven basamağı",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0741",
    "en": "stamp",
    "pos": "n.",
    "tr": "pul",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0742",
    "en": "star",
    "pos": "v.",
    "tr": "başrol oynamak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0743",
    "en": "start",
    "pos": "n.",
    "tr": "başlangıç",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0744",
    "en": "state",
    "pos": "n.",
    "tr": "devlet, durum",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0745",
    "en": "stay",
    "pos": "n.",
    "tr": "kalış",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0746",
    "en": "steal",
    "pos": "v.",
    "tr": "çalmak (hırsızlık)",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0747",
    "en": "step",
    "pos": "n.",
    "tr": "adım",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0748",
    "en": "stomach",
    "pos": "n.",
    "tr": "mide",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0749",
    "en": "stone",
    "pos": "n.",
    "tr": "taş",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0750",
    "en": "store",
    "pos": "n.",
    "tr": "mağaza",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0751",
    "en": "storm",
    "pos": "n.",
    "tr": "fırtına",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0752",
    "en": "straight",
    "pos": "adv./adj.",
    "tr": "düz",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0753",
    "en": "strange",
    "pos": "adj.",
    "tr": "garip",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0754",
    "en": "strategy",
    "pos": "n.",
    "tr": "strateji",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0755",
    "en": "stress",
    "pos": "n./v.",
    "tr": "stres / vurgulamak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0756",
    "en": "structure",
    "pos": "n.",
    "tr": "yapı",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0757",
    "en": "stupid",
    "pos": "adj.",
    "tr": "aptal",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0758",
    "en": "succeed",
    "pos": "v.",
    "tr": "başarmak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0759",
    "en": "successful",
    "pos": "adj.",
    "tr": "başarılı",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0760",
    "en": "such",
    "pos": "det./pron.",
    "tr": "böyle, bu kadar",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0761",
    "en": "suddenly",
    "pos": "adv.",
    "tr": "aniden",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0762",
    "en": "suggest",
    "pos": "v.",
    "tr": "önermek",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0763",
    "en": "suggestion",
    "pos": "n.",
    "tr": "öneri",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0764",
    "en": "suit",
    "pos": "n.",
    "tr": "takım elbise",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0765",
    "en": "support",
    "pos": "v./n.",
    "tr": "desteklemek / destek",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0766",
    "en": "suppose",
    "pos": "v.",
    "tr": "varsaymak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0767",
    "en": "sure",
    "pos": "adv.",
    "tr": "tabii ki",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0768",
    "en": "surprise",
    "pos": "n./v.",
    "tr": "sürpriz / şaşırtmak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0769",
    "en": "surprised",
    "pos": "adj.",
    "tr": "şaşırmış",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0770",
    "en": "surprising",
    "pos": "adj.",
    "tr": "şaşırtıcı",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0771",
    "en": "survey",
    "pos": "n.",
    "tr": "anket",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0772",
    "en": "sweet",
    "pos": "adj./n.",
    "tr": "tatlı",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0773",
    "en": "symbol",
    "pos": "n.",
    "tr": "sembol",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0774",
    "en": "system",
    "pos": "n.",
    "tr": "sistem",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0775",
    "en": "tablet",
    "pos": "n.",
    "tr": "tablet",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0776",
    "en": "talk",
    "pos": "n.",
    "tr": "konuşma",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0777",
    "en": "target",
    "pos": "n.",
    "tr": "hedef",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0778",
    "en": "task",
    "pos": "n.",
    "tr": "görev",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0779",
    "en": "taste",
    "pos": "n./v.",
    "tr": "tat / tat vermek",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0780",
    "en": "teaching",
    "pos": "n.",
    "tr": "öğretme",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0781",
    "en": "technology",
    "pos": "n.",
    "tr": "teknoloji",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0782",
    "en": "teenage",
    "pos": "adj.",
    "tr": "genç, ergen",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0783",
    "en": "temperature",
    "pos": "n.",
    "tr": "sıcaklık",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0784",
    "en": "term",
    "pos": "n.",
    "tr": "dönem, terim",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0785",
    "en": "text",
    "pos": "v.",
    "tr": "mesaj atmak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0786",
    "en": "themselves",
    "pos": "pron.",
    "tr": "kendileri",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0787",
    "en": "thick",
    "pos": "adj.",
    "tr": "kalın",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0788",
    "en": "thief",
    "pos": "n.",
    "tr": "hırsız",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0789",
    "en": "thin",
    "pos": "adj.",
    "tr": "ince, zayıf",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0790",
    "en": "thinking",
    "pos": "n.",
    "tr": "düşünme",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0791",
    "en": "third",
    "pos": "n.",
    "tr": "üçte biri",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0792",
    "en": "thought",
    "pos": "n.",
    "tr": "düşünce",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0793",
    "en": "throw",
    "pos": "v.",
    "tr": "atmak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0794",
    "en": "tidy",
    "pos": "adj./v.",
    "tr": "düzenli / düzenlemek",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0795",
    "en": "tie",
    "pos": "v./n.",
    "tr": "bağlamak / kravat",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0796",
    "en": "tip",
    "pos": "n.",
    "tr": "bahşiş, ipucu",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0797",
    "en": "tool",
    "pos": "n.",
    "tr": "alet",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0798",
    "en": "top",
    "pos": "n./adj.",
    "tr": "üst, tepe",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0799",
    "en": "touch",
    "pos": "v.",
    "tr": "dokunmak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0800",
    "en": "tour",
    "pos": "n.",
    "tr": "tur",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0801",
    "en": "tourism",
    "pos": "n.",
    "tr": "turizm",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0802",
    "en": "towards",
    "pos": "prep.",
    "tr": "doğru, yönünde",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0803",
    "en": "towel",
    "pos": "n.",
    "tr": "havlu",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0804",
    "en": "tower",
    "pos": "n.",
    "tr": "kule",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0805",
    "en": "toy",
    "pos": "n./adj.",
    "tr": "oyuncak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0806",
    "en": "track",
    "pos": "n.",
    "tr": "iz, parça (müzik)",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0807",
    "en": "tradition",
    "pos": "n.",
    "tr": "gelenek",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0808",
    "en": "traditional",
    "pos": "adj.",
    "tr": "geleneksel",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0809",
    "en": "train",
    "pos": "v.",
    "tr": "antrenman yapmak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0810",
    "en": "trainer",
    "pos": "n.",
    "tr": "antrenör, spor ayakkabısı",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0811",
    "en": "training",
    "pos": "n.",
    "tr": "eğitim, antrenman",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0812",
    "en": "transport",
    "pos": "n.",
    "tr": "ulaşım",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0813",
    "en": "traveller",
    "pos": "n.",
    "tr": "gezgin",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0814",
    "en": "trouble",
    "pos": "n.",
    "tr": "sorun",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0815",
    "en": "truck",
    "pos": "n.",
    "tr": "kamyon",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0816",
    "en": "twin",
    "pos": "n./adj.",
    "tr": "ikiz",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0817",
    "en": "typical",
    "pos": "adj.",
    "tr": "tipik",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0818",
    "en": "underground",
    "pos": "adj./adv.",
    "tr": "yeraltında",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0819",
    "en": "understanding",
    "pos": "n.",
    "tr": "anlayış",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0820",
    "en": "unfortunately",
    "pos": "adv.",
    "tr": "ne yazık ki",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0821",
    "en": "unhappy",
    "pos": "adj.",
    "tr": "mutsuz",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0822",
    "en": "uniform",
    "pos": "n.",
    "tr": "üniforma",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0823",
    "en": "unit",
    "pos": "n.",
    "tr": "birim, ünite",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0824",
    "en": "united",
    "pos": "adj.",
    "tr": "birleşik",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0825",
    "en": "unusual",
    "pos": "adj.",
    "tr": "alışılmadık",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0826",
    "en": "upstairs",
    "pos": "adj.",
    "tr": "üst kat (sıfat)",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0827",
    "en": "use",
    "pos": "n.",
    "tr": "kullanım",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0828",
    "en": "used to",
    "pos": "modal v.",
    "tr": "eskiden ... -irdi",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0829",
    "en": "user",
    "pos": "n.",
    "tr": "kullanıcı",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0830",
    "en": "usual",
    "pos": "adj.",
    "tr": "olağan",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0831",
    "en": "valley",
    "pos": "n.",
    "tr": "vadi",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0832",
    "en": "van",
    "pos": "n.",
    "tr": "kamyonet",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0833",
    "en": "variety",
    "pos": "n.",
    "tr": "çeşitlilik",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0834",
    "en": "vehicle",
    "pos": "n.",
    "tr": "araç",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0835",
    "en": "view",
    "pos": "n.",
    "tr": "manzara, görüş",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0836",
    "en": "virus",
    "pos": "n.",
    "tr": "virüs",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0837",
    "en": "voice",
    "pos": "n.",
    "tr": "ses (insan)",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0838",
    "en": "wait",
    "pos": "n.",
    "tr": "bekleme",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0839",
    "en": "war",
    "pos": "n.",
    "tr": "savaş",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0840",
    "en": "wash",
    "pos": "n.",
    "tr": "yıkama",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0841",
    "en": "washing",
    "pos": "n.",
    "tr": "çamaşır yıkama",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0842",
    "en": "wave",
    "pos": "n.",
    "tr": "dalga",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0843",
    "en": "weak",
    "pos": "adj.",
    "tr": "zayıf",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0844",
    "en": "web",
    "pos": "n.",
    "tr": "internet ağı",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0845",
    "en": "wedding",
    "pos": "n.",
    "tr": "düğün",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0846",
    "en": "weight",
    "pos": "n.",
    "tr": "ağırlık",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0847",
    "en": "welcome",
    "pos": "n.",
    "tr": "karşılama",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0848",
    "en": "wet",
    "pos": "adj.",
    "tr": "ıslak",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0849",
    "en": "wheel",
    "pos": "n.",
    "tr": "tekerlek",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0850",
    "en": "while",
    "pos": "conj.",
    "tr": "-iken",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0851",
    "en": "whole",
    "pos": "adj.",
    "tr": "bütün",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0852",
    "en": "whose",
    "pos": "det./pron.",
    "tr": "kimin",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0853",
    "en": "wide",
    "pos": "adj.",
    "tr": "geniş",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0854",
    "en": "wild",
    "pos": "adj.",
    "tr": "vahşi",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0855",
    "en": "wind",
    "pos": "n.",
    "tr": "rüzgar",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0856",
    "en": "winner",
    "pos": "n.",
    "tr": "kazanan",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0857",
    "en": "wish",
    "pos": "v./n.",
    "tr": "dilemek / dilek",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0858",
    "en": "wood",
    "pos": "n.",
    "tr": "odun, tahta",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0859",
    "en": "wooden",
    "pos": "adj.",
    "tr": "tahtadan",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0860",
    "en": "working",
    "pos": "adj.",
    "tr": "çalışan",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0861",
    "en": "worried",
    "pos": "adj.",
    "tr": "endişeli",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0862",
    "en": "worry",
    "pos": "v.",
    "tr": "endişelenmek",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0863",
    "en": "worse",
    "pos": "adj.",
    "tr": "daha kötü",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0864",
    "en": "worst",
    "pos": "adj.",
    "tr": "en kötü",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0865",
    "en": "wow",
    "pos": "exclam.",
    "tr": "vay canına",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0866",
    "en": "yet",
    "pos": "adv.",
    "tr": "henüz",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0867",
    "en": "yours",
    "pos": "pron.",
    "tr": "seninki",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "a2_0868",
    "en": "zero",
    "pos": "number",
    "tr": "sıfır",
    "level": "A2",
    "status": "new"
  },
  {
    "id": "b1_0001",
    "en": "absolutely",
    "pos": "adv.",
    "tr": "kesinlikle",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0002",
    "en": "academic",
    "pos": "adj.",
    "tr": "akademik",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0003",
    "en": "access",
    "pos": "n./v.",
    "tr": "erişim / erişmek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0004",
    "en": "accommodation",
    "pos": "n.",
    "tr": "konaklama",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0005",
    "en": "account",
    "pos": "n.",
    "tr": "hesap",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0006",
    "en": "achievement",
    "pos": "n.",
    "tr": "başarı",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0007",
    "en": "act",
    "pos": "n.",
    "tr": "perde, eylem",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0008",
    "en": "ad",
    "pos": "n.",
    "tr": "reklam",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0009",
    "en": "addition",
    "pos": "n.",
    "tr": "ekleme",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0010",
    "en": "admire",
    "pos": "v.",
    "tr": "hayran olmak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0011",
    "en": "admit",
    "pos": "v.",
    "tr": "kabul etmek, itiraf etmek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0012",
    "en": "advanced",
    "pos": "adj.",
    "tr": "ileri düzey",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0013",
    "en": "advise",
    "pos": "v.",
    "tr": "tavsiye etmek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0014",
    "en": "afford",
    "pos": "v.",
    "tr": "gücü yetmek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0015",
    "en": "age",
    "pos": "v.",
    "tr": "yaşlanmak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0016",
    "en": "aged",
    "pos": "adj.",
    "tr": "yaşında",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0017",
    "en": "agent",
    "pos": "n.",
    "tr": "acente, ajan",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0018",
    "en": "agreement",
    "pos": "n.",
    "tr": "anlaşma",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0019",
    "en": "ahead",
    "pos": "adv.",
    "tr": "ileride",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0020",
    "en": "aim",
    "pos": "v./n.",
    "tr": "hedeflemek / hedef",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0021",
    "en": "alarm",
    "pos": "n.",
    "tr": "alarm",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0022",
    "en": "album",
    "pos": "n.",
    "tr": "albüm",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0023",
    "en": "alcohol",
    "pos": "n.",
    "tr": "alkol",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0024",
    "en": "alcoholic",
    "pos": "adj.",
    "tr": "alkollü",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0025",
    "en": "alternative",
    "pos": "adj.",
    "tr": "alternatif",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0026",
    "en": "amazed",
    "pos": "adj.",
    "tr": "şaşkın",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0027",
    "en": "ambition",
    "pos": "n.",
    "tr": "hırs, tutku",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0028",
    "en": "ambitious",
    "pos": "adj.",
    "tr": "hırslı",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0029",
    "en": "analyse",
    "pos": "v.",
    "tr": "analiz etmek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0030",
    "en": "analysis",
    "pos": "n.",
    "tr": "analiz",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0031",
    "en": "announce",
    "pos": "v.",
    "tr": "duyurmak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0032",
    "en": "announcement",
    "pos": "n.",
    "tr": "duyuru",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0033",
    "en": "annoy",
    "pos": "v.",
    "tr": "sinirlendirmek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0034",
    "en": "annoyed",
    "pos": "adj.",
    "tr": "sinirlenmiş",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0035",
    "en": "annoying",
    "pos": "adj.",
    "tr": "sinir bozucu",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0036",
    "en": "apart",
    "pos": "adv.",
    "tr": "ayrı",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0037",
    "en": "apologize",
    "pos": "v.",
    "tr": "özür dilemek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0038",
    "en": "application",
    "pos": "n.",
    "tr": "başvuru",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0039",
    "en": "appointment",
    "pos": "n.",
    "tr": "randevu",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0040",
    "en": "appreciate",
    "pos": "v.",
    "tr": "takdir etmek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0041",
    "en": "approximately",
    "pos": "adv.",
    "tr": "yaklaşık olarak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0042",
    "en": "arrest",
    "pos": "v./n.",
    "tr": "tutuklamak / tutuklama",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0043",
    "en": "arrival",
    "pos": "n.",
    "tr": "varış",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0044",
    "en": "assignment",
    "pos": "n.",
    "tr": "ödev, görev",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0045",
    "en": "assist",
    "pos": "v.",
    "tr": "yardım etmek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0046",
    "en": "atmosphere",
    "pos": "n.",
    "tr": "atmosfer, ortam",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0047",
    "en": "attach",
    "pos": "v.",
    "tr": "eklemek, bağlamak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0048",
    "en": "attitude",
    "pos": "n.",
    "tr": "tutum",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0049",
    "en": "attract",
    "pos": "v.",
    "tr": "çekmek, cezbetmek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0050",
    "en": "attraction",
    "pos": "n.",
    "tr": "çekicilik, cazibe",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0051",
    "en": "authority",
    "pos": "n.",
    "tr": "otorite",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0052",
    "en": "average",
    "pos": "v.",
    "tr": "ortalaması olmak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0053",
    "en": "award",
    "pos": "v.",
    "tr": "ödül vermek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0054",
    "en": "aware",
    "pos": "adj.",
    "tr": "farkında",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0055",
    "en": "backwards",
    "pos": "adv.",
    "tr": "geriye doğru",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0056",
    "en": "bake",
    "pos": "v.",
    "tr": "fırınlamak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0057",
    "en": "balance",
    "pos": "n./v.",
    "tr": "denge / dengelemek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0058",
    "en": "ban",
    "pos": "v./n.",
    "tr": "yasaklamak / yasak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0059",
    "en": "bank",
    "pos": "n.",
    "tr": "kıyı (nehir)",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0060",
    "en": "base",
    "pos": "n./v.",
    "tr": "temel / dayandırmak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0061",
    "en": "basic",
    "pos": "adj.",
    "tr": "temel",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0062",
    "en": "basis",
    "pos": "n.",
    "tr": "temel, esas",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0063",
    "en": "battery",
    "pos": "n.",
    "tr": "pil",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0064",
    "en": "battle",
    "pos": "n.",
    "tr": "savaş, muharebe",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0065",
    "en": "beauty",
    "pos": "n.",
    "tr": "güzellik",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0066",
    "en": "bee",
    "pos": "n.",
    "tr": "arı",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0067",
    "en": "belief",
    "pos": "n.",
    "tr": "inanç",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0068",
    "en": "bell",
    "pos": "n.",
    "tr": "zil",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0069",
    "en": "bend",
    "pos": "v./n.",
    "tr": "eğmek / dönemeç",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0070",
    "en": "benefit",
    "pos": "v.",
    "tr": "fayda sağlamak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0071",
    "en": "better",
    "pos": "n.",
    "tr": "daha iyisi",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0072",
    "en": "bite",
    "pos": "v./n.",
    "tr": "ısırmak / ısırık",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0073",
    "en": "block",
    "pos": "n./v.",
    "tr": "blok / engellemek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0074",
    "en": "board",
    "pos": "v.",
    "tr": "binmek (uçak/gemi)",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0075",
    "en": "bomb",
    "pos": "n./v.",
    "tr": "bomba / bombalamak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0076",
    "en": "border",
    "pos": "n.",
    "tr": "sınır",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0077",
    "en": "bother",
    "pos": "v.",
    "tr": "rahatsız etmek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0078",
    "en": "branch",
    "pos": "n.",
    "tr": "dal, şube",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0079",
    "en": "brand",
    "pos": "n./v.",
    "tr": "marka",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0080",
    "en": "brave",
    "pos": "adj.",
    "tr": "cesur",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0081",
    "en": "breath",
    "pos": "n.",
    "tr": "nefes",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0082",
    "en": "breathe",
    "pos": "v.",
    "tr": "nefes almak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0083",
    "en": "breathing",
    "pos": "n.",
    "tr": "nefes alma",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0084",
    "en": "bride",
    "pos": "n.",
    "tr": "gelin",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0085",
    "en": "bubble",
    "pos": "n.",
    "tr": "kabarcık",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0086",
    "en": "bury",
    "pos": "v.",
    "tr": "gömmek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0087",
    "en": "by",
    "pos": "adv.",
    "tr": "yanından",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0088",
    "en": "calm",
    "pos": "adj./v./n.",
    "tr": "sakin / sakinleştirmek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0089",
    "en": "campaign",
    "pos": "n./v.",
    "tr": "kampanya",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0090",
    "en": "campus",
    "pos": "n.",
    "tr": "kampüs",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0091",
    "en": "candidate",
    "pos": "n.",
    "tr": "aday",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0092",
    "en": "cap",
    "pos": "n.",
    "tr": "kasket, kapak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0093",
    "en": "captain",
    "pos": "n.",
    "tr": "kaptan",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0094",
    "en": "careless",
    "pos": "adj.",
    "tr": "dikkatsiz",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0095",
    "en": "category",
    "pos": "n.",
    "tr": "kategori",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0096",
    "en": "ceiling",
    "pos": "n.",
    "tr": "tavan",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0097",
    "en": "celebration",
    "pos": "n.",
    "tr": "kutlama",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0098",
    "en": "central",
    "pos": "adj.",
    "tr": "merkezi",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0099",
    "en": "centre",
    "pos": "v.",
    "tr": "merkezlemek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0100",
    "en": "ceremony",
    "pos": "n.",
    "tr": "tören",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0101",
    "en": "chain",
    "pos": "n.",
    "tr": "zincir",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0102",
    "en": "challenge",
    "pos": "n.",
    "tr": "zorluk, meydan okuma",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0103",
    "en": "champion",
    "pos": "n.",
    "tr": "şampiyon",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0104",
    "en": "channel",
    "pos": "n.",
    "tr": "kanal",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0105",
    "en": "chapter",
    "pos": "n.",
    "tr": "bölüm (kitap)",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0106",
    "en": "charge",
    "pos": "n./v.",
    "tr": "ücret / ücretlendirmek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0107",
    "en": "cheap",
    "pos": "adv.",
    "tr": "ucuza",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0108",
    "en": "cheat",
    "pos": "v./n.",
    "tr": "hile yapmak / hile",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0109",
    "en": "cheerful",
    "pos": "adj.",
    "tr": "neşeli",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0110",
    "en": "chemical",
    "pos": "adj./n.",
    "tr": "kimyasal",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0111",
    "en": "chest",
    "pos": "n.",
    "tr": "göğüs",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0112",
    "en": "childhood",
    "pos": "n.",
    "tr": "çocukluk",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0113",
    "en": "claim",
    "pos": "v./n.",
    "tr": "iddia etmek / iddia",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0114",
    "en": "clause",
    "pos": "n.",
    "tr": "madde, cümlecik",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0115",
    "en": "clear",
    "pos": "v.",
    "tr": "temizlemek, netleştirmek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0116",
    "en": "click",
    "pos": "v./n.",
    "tr": "tıklamak / tık",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0117",
    "en": "client",
    "pos": "n.",
    "tr": "müşteri (iş)",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0118",
    "en": "climb",
    "pos": "n.",
    "tr": "tırmanış",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0119",
    "en": "close",
    "pos": "adv.",
    "tr": "yakında",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0120",
    "en": "cloth",
    "pos": "n.",
    "tr": "kumaş",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0121",
    "en": "clue",
    "pos": "n.",
    "tr": "ipucu",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0122",
    "en": "coach",
    "pos": "v.",
    "tr": "antrenörlük yapmak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0123",
    "en": "coal",
    "pos": "n.",
    "tr": "kömür",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0124",
    "en": "coin",
    "pos": "n.",
    "tr": "madeni para",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0125",
    "en": "collection",
    "pos": "n.",
    "tr": "koleksiyon",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0126",
    "en": "coloured",
    "pos": "adj.",
    "tr": "renkli",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0127",
    "en": "combine",
    "pos": "v.",
    "tr": "birleştirmek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0128",
    "en": "comment",
    "pos": "v.",
    "tr": "yorum yapmak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0129",
    "en": "commercial",
    "pos": "adj./n.",
    "tr": "ticari / reklam",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0130",
    "en": "commit",
    "pos": "v.",
    "tr": "işlemek (suç), adamak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0131",
    "en": "communication",
    "pos": "n.",
    "tr": "iletişim",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0132",
    "en": "comparison",
    "pos": "n.",
    "tr": "karşılaştırma",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0133",
    "en": "competitor",
    "pos": "n.",
    "tr": "rakip",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0134",
    "en": "competitive",
    "pos": "adj.",
    "tr": "rekabetçi",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0135",
    "en": "complaint",
    "pos": "n.",
    "tr": "şikayet",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0136",
    "en": "complex",
    "pos": "adj.",
    "tr": "karmaşık",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0137",
    "en": "concentrate",
    "pos": "v.",
    "tr": "konsantre olmak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0138",
    "en": "conclude",
    "pos": "v.",
    "tr": "sonuca varmak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0139",
    "en": "conclusion",
    "pos": "n.",
    "tr": "sonuç",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0140",
    "en": "confident",
    "pos": "adj.",
    "tr": "kendinden emin",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0141",
    "en": "confirm",
    "pos": "v.",
    "tr": "doğrulamak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0142",
    "en": "confuse",
    "pos": "v.",
    "tr": "kafasını karıştırmak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0143",
    "en": "confused",
    "pos": "adj.",
    "tr": "kafası karışmış",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0144",
    "en": "connection",
    "pos": "n.",
    "tr": "bağlantı",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0145",
    "en": "consequence",
    "pos": "n.",
    "tr": "sonuç",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0146",
    "en": "consist",
    "pos": "v.",
    "tr": "oluşmak (-den)",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0147",
    "en": "consume",
    "pos": "v.",
    "tr": "tüketmek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0148",
    "en": "consumer",
    "pos": "n.",
    "tr": "tüketici",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0149",
    "en": "contact",
    "pos": "n./v.",
    "tr": "temas / iletişime geçmek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0150",
    "en": "container",
    "pos": "n.",
    "tr": "kap, konteyner",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0151",
    "en": "content",
    "pos": "n.",
    "tr": "içerik",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0152",
    "en": "continuous",
    "pos": "adj.",
    "tr": "sürekli",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0153",
    "en": "contrast",
    "pos": "n./v.",
    "tr": "karşıtlık / karşılaştırmak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0154",
    "en": "convenient",
    "pos": "adj.",
    "tr": "uygun, elverişli",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0155",
    "en": "convince",
    "pos": "v.",
    "tr": "ikna etmek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0156",
    "en": "cool",
    "pos": "v.",
    "tr": "soğutmak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0157",
    "en": "costume",
    "pos": "n.",
    "tr": "kostüm",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0158",
    "en": "cottage",
    "pos": "n.",
    "tr": "kulübe",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0159",
    "en": "cotton",
    "pos": "n.",
    "tr": "pamuk",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0160",
    "en": "count",
    "pos": "n.",
    "tr": "sayım",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0161",
    "en": "countryside",
    "pos": "n.",
    "tr": "kırsal alan",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0162",
    "en": "court",
    "pos": "n.",
    "tr": "mahkeme, kort",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0163",
    "en": "cover",
    "pos": "n.",
    "tr": "kapak, örtü",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0164",
    "en": "covered",
    "pos": "adj.",
    "tr": "örtülü",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0165",
    "en": "cream",
    "pos": "adj.",
    "tr": "krem rengi",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0166",
    "en": "criminal",
    "pos": "adj.",
    "tr": "suçla ilgili",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0167",
    "en": "cruel",
    "pos": "adj.",
    "tr": "zalim",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0168",
    "en": "cultural",
    "pos": "adj.",
    "tr": "kültürel",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0169",
    "en": "currency",
    "pos": "n.",
    "tr": "para birimi",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0170",
    "en": "current",
    "pos": "adj.",
    "tr": "şu anki",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0171",
    "en": "currently",
    "pos": "adv.",
    "tr": "şu anda",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0172",
    "en": "curtain",
    "pos": "n.",
    "tr": "perde",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0173",
    "en": "custom",
    "pos": "n.",
    "tr": "gelenek, adet",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0174",
    "en": "cut",
    "pos": "n.",
    "tr": "kesik",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0175",
    "en": "daily",
    "pos": "adv.",
    "tr": "günlük olarak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0176",
    "en": "damage",
    "pos": "n./v.",
    "tr": "hasar / zarar vermek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0177",
    "en": "deal",
    "pos": "n.",
    "tr": "anlaşma",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0178",
    "en": "decade",
    "pos": "n.",
    "tr": "on yıl",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0179",
    "en": "decorate",
    "pos": "v.",
    "tr": "dekore etmek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0180",
    "en": "deep",
    "pos": "adv.",
    "tr": "derinlemesine",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0181",
    "en": "define",
    "pos": "v.",
    "tr": "tanımlamak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0182",
    "en": "definite",
    "pos": "adj.",
    "tr": "kesin",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0183",
    "en": "definition",
    "pos": "n.",
    "tr": "tanım",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0184",
    "en": "deliver",
    "pos": "v.",
    "tr": "teslim etmek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0185",
    "en": "departure",
    "pos": "n.",
    "tr": "kalkış, ayrılış",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0186",
    "en": "despite",
    "pos": "prep.",
    "tr": "-e rağmen",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0187",
    "en": "destination",
    "pos": "n.",
    "tr": "varış noktası",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0188",
    "en": "determine",
    "pos": "v.",
    "tr": "belirlemek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0189",
    "en": "determined",
    "pos": "adj.",
    "tr": "kararlı",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0190",
    "en": "development",
    "pos": "n.",
    "tr": "gelişme",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0191",
    "en": "diagram",
    "pos": "n.",
    "tr": "diyagram",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0192",
    "en": "diamond",
    "pos": "n.",
    "tr": "elmas",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0193",
    "en": "difficulty",
    "pos": "n.",
    "tr": "zorluk",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0194",
    "en": "direct",
    "pos": "v./adv.",
    "tr": "yönlendirmek / doğrudan",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0195",
    "en": "directly",
    "pos": "adv.",
    "tr": "doğrudan",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0196",
    "en": "dirt",
    "pos": "n.",
    "tr": "kir, toprak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0197",
    "en": "disadvantage",
    "pos": "n.",
    "tr": "dezavantaj",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0198",
    "en": "disappointed",
    "pos": "adj.",
    "tr": "hayal kırıklığına uğramış",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0199",
    "en": "disappointing",
    "pos": "adj.",
    "tr": "hayal kırıklığı yaratan",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0200",
    "en": "discount",
    "pos": "n.",
    "tr": "indirim",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0201",
    "en": "dislike",
    "pos": "v./n.",
    "tr": "hoşlanmamak / hoşlanmama",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0202",
    "en": "divide",
    "pos": "v.",
    "tr": "bölmek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0203",
    "en": "documentary",
    "pos": "n.",
    "tr": "belgesel",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0204",
    "en": "donate",
    "pos": "v.",
    "tr": "bağışlamak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0205",
    "en": "double",
    "pos": "adv.",
    "tr": "iki katı",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0206",
    "en": "doubt",
    "pos": "n./v.",
    "tr": "şüphe / şüphe etmek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0207",
    "en": "dressed",
    "pos": "adj.",
    "tr": "giyinmiş",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0208",
    "en": "drop",
    "pos": "n.",
    "tr": "damla, düşüş",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0209",
    "en": "drum",
    "pos": "n.",
    "tr": "davul",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0210",
    "en": "drunk",
    "pos": "adj.",
    "tr": "sarhoş",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0211",
    "en": "due",
    "pos": "adj.",
    "tr": "zamanı gelmiş, bekleniyor",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0212",
    "en": "dust",
    "pos": "n.",
    "tr": "toz",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0213",
    "en": "duty",
    "pos": "n.",
    "tr": "görev",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0214",
    "en": "earthquake",
    "pos": "n.",
    "tr": "deprem",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0215",
    "en": "eastern",
    "pos": "adj.",
    "tr": "doğu ile ilgili",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0216",
    "en": "economic",
    "pos": "adj.",
    "tr": "ekonomik",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0217",
    "en": "economy",
    "pos": "n.",
    "tr": "ekonomi",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0218",
    "en": "edge",
    "pos": "n.",
    "tr": "kenar",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0219",
    "en": "editor",
    "pos": "n.",
    "tr": "editör",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0220",
    "en": "educate",
    "pos": "v.",
    "tr": "eğitmek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0221",
    "en": "educated",
    "pos": "adj.",
    "tr": "eğitimli",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0222",
    "en": "educational",
    "pos": "adj.",
    "tr": "eğitimsel",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0223",
    "en": "effective",
    "pos": "adj.",
    "tr": "etkili",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0224",
    "en": "effectively",
    "pos": "adv.",
    "tr": "etkili bir şekilde",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0225",
    "en": "effort",
    "pos": "n.",
    "tr": "çaba",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0226",
    "en": "election",
    "pos": "n.",
    "tr": "seçim",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0227",
    "en": "element",
    "pos": "n.",
    "tr": "unsur, öğe",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0228",
    "en": "embarrassed",
    "pos": "adj.",
    "tr": "utanmış",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0229",
    "en": "embarrassing",
    "pos": "adj.",
    "tr": "utandırıcı",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0230",
    "en": "emergency",
    "pos": "n.",
    "tr": "acil durum",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0231",
    "en": "emotion",
    "pos": "n.",
    "tr": "duygu",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0232",
    "en": "employment",
    "pos": "n.",
    "tr": "istihdam",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0233",
    "en": "empty",
    "pos": "v.",
    "tr": "boşaltmak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0234",
    "en": "encourage",
    "pos": "v.",
    "tr": "teşvik etmek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0235",
    "en": "enemy",
    "pos": "n.",
    "tr": "düşman",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0236",
    "en": "engaged",
    "pos": "adj.",
    "tr": "nişanlı",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0237",
    "en": "engineering",
    "pos": "n.",
    "tr": "mühendislik",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0238",
    "en": "entertain",
    "pos": "v.",
    "tr": "eğlendirmek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0239",
    "en": "entertainment",
    "pos": "n.",
    "tr": "eğlence",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0240",
    "en": "entrance",
    "pos": "n.",
    "tr": "giriş",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0241",
    "en": "entry",
    "pos": "n.",
    "tr": "giriş, kayıt",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0242",
    "en": "environmental",
    "pos": "adj.",
    "tr": "çevresel",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0243",
    "en": "episode",
    "pos": "n.",
    "tr": "bölüm (dizi)",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0244",
    "en": "equal",
    "pos": "adj./v.",
    "tr": "eşit / eşit olmak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0245",
    "en": "equally",
    "pos": "adv.",
    "tr": "eşit şekilde",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0246",
    "en": "escape",
    "pos": "v./n.",
    "tr": "kaçmak / kaçış",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0247",
    "en": "essential",
    "pos": "adj.",
    "tr": "gerekli, temel",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0248",
    "en": "eventually",
    "pos": "adv.",
    "tr": "sonunda",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0249",
    "en": "examine",
    "pos": "v.",
    "tr": "incelemek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0250",
    "en": "except",
    "pos": "conj.",
    "tr": "hariç",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0251",
    "en": "exchange",
    "pos": "n./v.",
    "tr": "değişim / değiştirmek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0252",
    "en": "excitement",
    "pos": "n.",
    "tr": "heyecan",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0253",
    "en": "exhibition",
    "pos": "n.",
    "tr": "sergi",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0254",
    "en": "expand",
    "pos": "v.",
    "tr": "genişlemek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0255",
    "en": "expected",
    "pos": "adj.",
    "tr": "beklenen",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0256",
    "en": "expedition",
    "pos": "n.",
    "tr": "sefer, gezi",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0257",
    "en": "experience",
    "pos": "v.",
    "tr": "deneyimlemek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0258",
    "en": "experienced",
    "pos": "adj.",
    "tr": "deneyimli",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0259",
    "en": "experiment",
    "pos": "v.",
    "tr": "deney yapmak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0260",
    "en": "explode",
    "pos": "v.",
    "tr": "patlamak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0261",
    "en": "explore",
    "pos": "v.",
    "tr": "keşfetmek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0262",
    "en": "explosion",
    "pos": "n.",
    "tr": "patlama",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0263",
    "en": "export",
    "pos": "n./v.",
    "tr": "ihracat / ihraç etmek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0264",
    "en": "extra",
    "pos": "n./adv.",
    "tr": "ekstra",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0265",
    "en": "face",
    "pos": "v.",
    "tr": "yüzleşmek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0266",
    "en": "fairly",
    "pos": "adv.",
    "tr": "oldukça",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0267",
    "en": "familiar",
    "pos": "adj.",
    "tr": "tanıdık, aşina",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0268",
    "en": "fancy",
    "pos": "v./adj.",
    "tr": "hoşlanmak / süslü",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0269",
    "en": "far",
    "pos": "adj.",
    "tr": "uzak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0270",
    "en": "fascinating",
    "pos": "adj.",
    "tr": "büyüleyici",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0271",
    "en": "fashionable",
    "pos": "adj.",
    "tr": "modaya uygun",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0272",
    "en": "fasten",
    "pos": "v.",
    "tr": "bağlamak, sabitlemek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0273",
    "en": "favour",
    "pos": "n.",
    "tr": "iyilik",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0274",
    "en": "fear",
    "pos": "v.",
    "tr": "korkmak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0275",
    "en": "feature",
    "pos": "v.",
    "tr": "özelliği olmak, yer vermek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0276",
    "en": "fence",
    "pos": "n.",
    "tr": "çit",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0277",
    "en": "fighting",
    "pos": "n.",
    "tr": "kavga, çatışma",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0278",
    "en": "file",
    "pos": "n.",
    "tr": "dosya",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0279",
    "en": "financial",
    "pos": "adj.",
    "tr": "mali, finansal",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0280",
    "en": "fire",
    "pos": "v.",
    "tr": "ateş etmek, işten çıkarmak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0281",
    "en": "fitness",
    "pos": "n.",
    "tr": "fitness, formda olma",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0282",
    "en": "fixed",
    "pos": "adj.",
    "tr": "sabit",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0283",
    "en": "flag",
    "pos": "n.",
    "tr": "bayrak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0284",
    "en": "flood",
    "pos": "n./v.",
    "tr": "sel / su basmak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0285",
    "en": "flour",
    "pos": "n.",
    "tr": "un",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0286",
    "en": "flow",
    "pos": "v./n.",
    "tr": "akmak / akış",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0287",
    "en": "fold",
    "pos": "v.",
    "tr": "katlamak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0288",
    "en": "folk",
    "pos": "n./adj.",
    "tr": "halk",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0289",
    "en": "following",
    "pos": "n.",
    "tr": "aşağıdakiler",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0290",
    "en": "force",
    "pos": "n./v.",
    "tr": "güç / zorlamak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0291",
    "en": "forever",
    "pos": "adv.",
    "tr": "sonsuza dek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0292",
    "en": "frame",
    "pos": "n./v.",
    "tr": "çerçeve / çerçevelemek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0293",
    "en": "freeze",
    "pos": "v.",
    "tr": "dondurmak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0294",
    "en": "frequently",
    "pos": "adv.",
    "tr": "sık sık",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0295",
    "en": "friendship",
    "pos": "n.",
    "tr": "arkadaşlık",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0296",
    "en": "frighten",
    "pos": "v.",
    "tr": "korkutmak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0297",
    "en": "frightened",
    "pos": "adj.",
    "tr": "korkmuş",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0298",
    "en": "frightening",
    "pos": "adj.",
    "tr": "korkutucu",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0299",
    "en": "frozen",
    "pos": "adj.",
    "tr": "donmuş",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0300",
    "en": "fry",
    "pos": "v.",
    "tr": "kızartmak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0301",
    "en": "fuel",
    "pos": "n.",
    "tr": "yakıt",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0302",
    "en": "function",
    "pos": "n.",
    "tr": "işlev",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0303",
    "en": "fur",
    "pos": "n.",
    "tr": "kürk",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0304",
    "en": "further",
    "pos": "adv.",
    "tr": "daha ileri",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0305",
    "en": "garage",
    "pos": "n.",
    "tr": "garaj",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0306",
    "en": "gather",
    "pos": "v.",
    "tr": "toplamak, toplanmak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0307",
    "en": "generally",
    "pos": "adv.",
    "tr": "genellikle",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0308",
    "en": "generation",
    "pos": "n.",
    "tr": "nesil",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0309",
    "en": "generous",
    "pos": "adj.",
    "tr": "cömert",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0310",
    "en": "gentle",
    "pos": "adj.",
    "tr": "nazik",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0311",
    "en": "gentleman",
    "pos": "n.",
    "tr": "beyefendi",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0312",
    "en": "ghost",
    "pos": "n.",
    "tr": "hayalet",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0313",
    "en": "giant",
    "pos": "adj./n.",
    "tr": "dev",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0314",
    "en": "glad",
    "pos": "adj.",
    "tr": "memnun",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0315",
    "en": "global",
    "pos": "adj.",
    "tr": "küresel",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0316",
    "en": "glove",
    "pos": "n.",
    "tr": "eldiven",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0317",
    "en": "go",
    "pos": "n.",
    "tr": "deneme, sıra",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0318",
    "en": "goods",
    "pos": "n.",
    "tr": "mallar",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0319",
    "en": "grade",
    "pos": "n.",
    "tr": "not, sınıf",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0320",
    "en": "graduate",
    "pos": "n./v.",
    "tr": "mezun / mezun olmak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0321",
    "en": "grain",
    "pos": "n.",
    "tr": "tahıl",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0322",
    "en": "grateful",
    "pos": "adj.",
    "tr": "minnettar",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0323",
    "en": "growth",
    "pos": "n.",
    "tr": "büyüme",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0324",
    "en": "guard",
    "pos": "n./v.",
    "tr": "muhafız / korumak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0325",
    "en": "guilty",
    "pos": "adj.",
    "tr": "suçlu",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0326",
    "en": "hand",
    "pos": "v.",
    "tr": "elden vermek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0327",
    "en": "hang",
    "pos": "v.",
    "tr": "asmak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0328",
    "en": "happiness",
    "pos": "n.",
    "tr": "mutluluk",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0329",
    "en": "hardly",
    "pos": "adv.",
    "tr": "neredeyse hiç",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0330",
    "en": "hate",
    "pos": "n.",
    "tr": "nefret",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0331",
    "en": "head",
    "pos": "v.",
    "tr": "yönelmek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0332",
    "en": "headline",
    "pos": "n.",
    "tr": "manşet",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0333",
    "en": "heating",
    "pos": "n.",
    "tr": "ısıtma",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0334",
    "en": "heavily",
    "pos": "adv.",
    "tr": "ağır şekilde",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0335",
    "en": "helicopter",
    "pos": "n.",
    "tr": "helikopter",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0336",
    "en": "highlight",
    "pos": "v./n.",
    "tr": "vurgulamak / önemli nokta",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0337",
    "en": "highly",
    "pos": "adv.",
    "tr": "son derece",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0338",
    "en": "hire",
    "pos": "v.",
    "tr": "kiralamak, işe almak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0339",
    "en": "historic",
    "pos": "adj.",
    "tr": "tarihi",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0340",
    "en": "historical",
    "pos": "adj.",
    "tr": "tarihi (ile ilgili)",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0341",
    "en": "honest",
    "pos": "adj.",
    "tr": "dürüst",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0342",
    "en": "horrible",
    "pos": "adj.",
    "tr": "korkunç",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0343",
    "en": "horror",
    "pos": "n.",
    "tr": "dehşet, korku",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0344",
    "en": "host",
    "pos": "n.",
    "tr": "ev sahibi",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0345",
    "en": "hunt",
    "pos": "v.",
    "tr": "avlamak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0346",
    "en": "hurricane",
    "pos": "n.",
    "tr": "kasırga",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0347",
    "en": "hurry",
    "pos": "n./v.",
    "tr": "acele / acele etmek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0348",
    "en": "identity",
    "pos": "n.",
    "tr": "kimlik",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0349",
    "en": "ignore",
    "pos": "v.",
    "tr": "görmezden gelmek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0350",
    "en": "illegal",
    "pos": "adj.",
    "tr": "yasa dışı",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0351",
    "en": "imaginary",
    "pos": "adj.",
    "tr": "hayali",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0352",
    "en": "immediate",
    "pos": "adj.",
    "tr": "ani, acil",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0353",
    "en": "immigrant",
    "pos": "n.",
    "tr": "göçmen",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0354",
    "en": "impact",
    "pos": "n./v.",
    "tr": "etki / etkilemek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0355",
    "en": "import",
    "pos": "n./v.",
    "tr": "ithalat / ithal etmek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0356",
    "en": "importance",
    "pos": "n.",
    "tr": "önem",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0357",
    "en": "impression",
    "pos": "n.",
    "tr": "izlenim",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0358",
    "en": "impressive",
    "pos": "adj.",
    "tr": "etkileyici",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0359",
    "en": "improvement",
    "pos": "n.",
    "tr": "gelişme, iyileşme",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0360",
    "en": "incredibly",
    "pos": "adv.",
    "tr": "inanılmaz şekilde",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0361",
    "en": "indeed",
    "pos": "adv.",
    "tr": "gerçekten",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0362",
    "en": "indicate",
    "pos": "v.",
    "tr": "belirtmek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0363",
    "en": "indirect",
    "pos": "adj.",
    "tr": "dolaylı",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0364",
    "en": "indoor",
    "pos": "adj.",
    "tr": "kapalı alan",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0365",
    "en": "indoors",
    "pos": "adv.",
    "tr": "içeride",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0366",
    "en": "influence",
    "pos": "n./v.",
    "tr": "etki / etkilemek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0367",
    "en": "ingredient",
    "pos": "n.",
    "tr": "malzeme (yemek)",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0368",
    "en": "injure",
    "pos": "v.",
    "tr": "yaralamak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0369",
    "en": "injured",
    "pos": "adj.",
    "tr": "yaralı",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0370",
    "en": "innocent",
    "pos": "adj.",
    "tr": "masum",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0371",
    "en": "intelligence",
    "pos": "n.",
    "tr": "zeka",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0372",
    "en": "intend",
    "pos": "v.",
    "tr": "niyetlenmek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0373",
    "en": "intention",
    "pos": "n.",
    "tr": "niyet",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0374",
    "en": "invest",
    "pos": "v.",
    "tr": "yatırım yapmak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0375",
    "en": "investigate",
    "pos": "v.",
    "tr": "araştırmak, soruşturmak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0376",
    "en": "involved",
    "pos": "adj.",
    "tr": "dahil olmuş",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0377",
    "en": "iron",
    "pos": "n./v.",
    "tr": "ütü / ütülemek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0378",
    "en": "issue",
    "pos": "n.",
    "tr": "konu, sorun",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0379",
    "en": "IT",
    "pos": "n.",
    "tr": "bilişim teknolojileri",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0380",
    "en": "journal",
    "pos": "n.",
    "tr": "dergi, günlük",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0381",
    "en": "judge",
    "pos": "n./v.",
    "tr": "hakim / yargılamak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0382",
    "en": "keen",
    "pos": "adj.",
    "tr": "hevesli",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0383",
    "en": "key",
    "pos": "v.",
    "tr": "tuşlamak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0384",
    "en": "keyboard",
    "pos": "n.",
    "tr": "klavye",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0385",
    "en": "kick",
    "pos": "v./n.",
    "tr": "tekmelemek / tekme",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0386",
    "en": "killing",
    "pos": "n.",
    "tr": "öldürme",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0387",
    "en": "kind",
    "pos": "adj.",
    "tr": "nazik",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0388",
    "en": "kiss",
    "pos": "v./n.",
    "tr": "öpmek / öpücük",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0389",
    "en": "knock",
    "pos": "n.",
    "tr": "kapı çalma",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0390",
    "en": "label",
    "pos": "n./v.",
    "tr": "etiket / etiketlemek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0391",
    "en": "laboratory",
    "pos": "n.",
    "tr": "laboratuvar",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0392",
    "en": "lack",
    "pos": "n./v.",
    "tr": "eksiklik / yoksun olmak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0393",
    "en": "latest",
    "pos": "adj.",
    "tr": "en son",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0394",
    "en": "lay",
    "pos": "v.",
    "tr": "koymak, yatırmak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0395",
    "en": "layer",
    "pos": "n.",
    "tr": "katman",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0396",
    "en": "lead",
    "pos": "n.",
    "tr": "kurşun",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0397",
    "en": "leading",
    "pos": "adj.",
    "tr": "önde gelen",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0398",
    "en": "leaf",
    "pos": "n.",
    "tr": "yaprak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0399",
    "en": "leather",
    "pos": "n.",
    "tr": "deri",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0400",
    "en": "legal",
    "pos": "adj.",
    "tr": "yasal",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0401",
    "en": "leisure",
    "pos": "n.",
    "tr": "boş zaman",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0402",
    "en": "length",
    "pos": "n.",
    "tr": "uzunluk",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0403",
    "en": "level",
    "pos": "adj.",
    "tr": "düz",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0404",
    "en": "lie",
    "pos": "v./n.",
    "tr": "yalan söylemek / yalan",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0405",
    "en": "like",
    "pos": "n.",
    "tr": "beğeni",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0406",
    "en": "limit",
    "pos": "n./v.",
    "tr": "sınır / sınırlamak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0407",
    "en": "lip",
    "pos": "n.",
    "tr": "dudak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0408",
    "en": "liquid",
    "pos": "n./adj.",
    "tr": "sıvı",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0409",
    "en": "literature",
    "pos": "n.",
    "tr": "edebiyat",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0410",
    "en": "live",
    "pos": "adj./adv.",
    "tr": "canlı",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0411",
    "en": "living",
    "pos": "adj./n.",
    "tr": "yaşayan / geçim",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0412",
    "en": "local",
    "pos": "n.",
    "tr": "yerli (kişi)",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0413",
    "en": "locate",
    "pos": "v.",
    "tr": "yerini bulmak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0414",
    "en": "located",
    "pos": "adj.",
    "tr": "konumlanmış",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0415",
    "en": "location",
    "pos": "n.",
    "tr": "konum",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0416",
    "en": "lonely",
    "pos": "adj.",
    "tr": "yalnız",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0417",
    "en": "loss",
    "pos": "n.",
    "tr": "kayıp",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0418",
    "en": "luxury",
    "pos": "n.",
    "tr": "lüks",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0419",
    "en": "mad",
    "pos": "adj.",
    "tr": "deli, çok kızgın",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0420",
    "en": "magic",
    "pos": "n./adj.",
    "tr": "büyü / büyülü",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0421",
    "en": "mainly",
    "pos": "adv.",
    "tr": "esas olarak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0422",
    "en": "mall",
    "pos": "n.",
    "tr": "alışveriş merkezi",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0423",
    "en": "management",
    "pos": "n.",
    "tr": "yönetim",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0424",
    "en": "market",
    "pos": "v.",
    "tr": "pazarlamak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0425",
    "en": "marketing",
    "pos": "n.",
    "tr": "pazarlama",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0426",
    "en": "marriage",
    "pos": "n.",
    "tr": "evlilik",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0427",
    "en": "meanwhile",
    "pos": "adv.",
    "tr": "bu arada",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0428",
    "en": "measure",
    "pos": "v./n.",
    "tr": "ölçmek / ölçü",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0429",
    "en": "medium",
    "pos": "adj.",
    "tr": "orta",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0430",
    "en": "mental",
    "pos": "adj.",
    "tr": "zihinsel",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0431",
    "en": "mention",
    "pos": "n.",
    "tr": "bahsetme",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0432",
    "en": "mess",
    "pos": "n.",
    "tr": "dağınıklık",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0433",
    "en": "mild",
    "pos": "adj.",
    "tr": "hafif, ılıman",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0434",
    "en": "mine",
    "pos": "n.",
    "tr": "maden ocağı",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0435",
    "en": "mix",
    "pos": "v./n.",
    "tr": "karıştırmak / karışım",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0436",
    "en": "mixture",
    "pos": "n.",
    "tr": "karışım",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0437",
    "en": "mood",
    "pos": "n.",
    "tr": "ruh hali",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0438",
    "en": "move",
    "pos": "n.",
    "tr": "hamle, hareket",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0439",
    "en": "mud",
    "pos": "n.",
    "tr": "çamur",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0440",
    "en": "murder",
    "pos": "n./v.",
    "tr": "cinayet / öldürmek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0441",
    "en": "muscle",
    "pos": "n.",
    "tr": "kas",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0442",
    "en": "musical",
    "pos": "n.",
    "tr": "müzikal (tiyatro)",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0443",
    "en": "mystery",
    "pos": "n.",
    "tr": "gizem",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0444",
    "en": "nail",
    "pos": "n.",
    "tr": "tırnak, çivi",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0445",
    "en": "narrative",
    "pos": "n./adj.",
    "tr": "anlatı",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0446",
    "en": "nation",
    "pos": "n.",
    "tr": "ulus",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0447",
    "en": "native",
    "pos": "adj./n.",
    "tr": "yerli, ana (dil)",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0448",
    "en": "naturally",
    "pos": "adv.",
    "tr": "doğal olarak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0449",
    "en": "necessarily",
    "pos": "adv.",
    "tr": "zorunlu olarak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0450",
    "en": "need",
    "pos": "modal v.",
    "tr": "gerekmek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0451",
    "en": "needle",
    "pos": "n.",
    "tr": "iğne",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0452",
    "en": "neighbourhood",
    "pos": "n.",
    "tr": "mahalle",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0453",
    "en": "neither",
    "pos": "adv.",
    "tr": "ne de",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0454",
    "en": "net",
    "pos": "n.",
    "tr": "ağ",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0455",
    "en": "next",
    "pos": "n.",
    "tr": "bir sonraki",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0456",
    "en": "nor",
    "pos": "conj./adv.",
    "tr": "ne de",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0457",
    "en": "normal",
    "pos": "n.",
    "tr": "normal (durum)",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0458",
    "en": "northern",
    "pos": "adj.",
    "tr": "kuzeyle ilgili",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0459",
    "en": "note",
    "pos": "v.",
    "tr": "not almak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0460",
    "en": "now",
    "pos": "conj.",
    "tr": "artık, madem ki",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0461",
    "en": "nuclear",
    "pos": "adj.",
    "tr": "nükleer",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0462",
    "en": "obvious",
    "pos": "adj.",
    "tr": "açık, bariz",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0463",
    "en": "obviously",
    "pos": "adv.",
    "tr": "açıkça",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0464",
    "en": "occasion",
    "pos": "n.",
    "tr": "olay, vesile",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0465",
    "en": "occur",
    "pos": "v.",
    "tr": "meydana gelmek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0466",
    "en": "odd",
    "pos": "adj.",
    "tr": "garip, tek (sayı)",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0467",
    "en": "official",
    "pos": "adj.",
    "tr": "resmi",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0468",
    "en": "old-fashioned",
    "pos": "adj.",
    "tr": "eski moda",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0469",
    "en": "once",
    "pos": "conj.",
    "tr": "bir kez ... -dığında",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0470",
    "en": "operation",
    "pos": "n.",
    "tr": "operasyon, ameliyat",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0471",
    "en": "organized",
    "pos": "adj.",
    "tr": "düzenli, organize",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0472",
    "en": "organizer",
    "pos": "n.",
    "tr": "organizatör",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0473",
    "en": "original",
    "pos": "n.",
    "tr": "orijinal (isim)",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0474",
    "en": "originally",
    "pos": "adv.",
    "tr": "aslen",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0475",
    "en": "ought",
    "pos": "modal v.",
    "tr": "-meli",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0476",
    "en": "ours",
    "pos": "pron.",
    "tr": "bizimki",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0477",
    "en": "outdoor",
    "pos": "adj.",
    "tr": "açık hava",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0478",
    "en": "outdoors",
    "pos": "adv.",
    "tr": "açık havada",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0479",
    "en": "pack",
    "pos": "n.",
    "tr": "paket",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0480",
    "en": "package",
    "pos": "n.",
    "tr": "paket",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0481",
    "en": "painful",
    "pos": "adj.",
    "tr": "acı verici",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0482",
    "en": "pale",
    "pos": "adj.",
    "tr": "soluk, solgun",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0483",
    "en": "pan",
    "pos": "n.",
    "tr": "tava",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0484",
    "en": "participate",
    "pos": "v.",
    "tr": "katılmak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0485",
    "en": "particularly",
    "pos": "adv.",
    "tr": "özellikle",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0486",
    "en": "pass",
    "pos": "n.",
    "tr": "geçiş, paso",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0487",
    "en": "passion",
    "pos": "n.",
    "tr": "tutku",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0488",
    "en": "path",
    "pos": "n.",
    "tr": "patika, yol",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0489",
    "en": "payment",
    "pos": "n.",
    "tr": "ödeme",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0490",
    "en": "peaceful",
    "pos": "adj.",
    "tr": "huzurlu",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0491",
    "en": "percentage",
    "pos": "n.",
    "tr": "yüzde",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0492",
    "en": "perfectly",
    "pos": "adv.",
    "tr": "mükemmel şekilde",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0493",
    "en": "performance",
    "pos": "n.",
    "tr": "performans",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0494",
    "en": "personally",
    "pos": "adv.",
    "tr": "kişisel olarak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0495",
    "en": "persuade",
    "pos": "v.",
    "tr": "ikna etmek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0496",
    "en": "photographer",
    "pos": "n.",
    "tr": "fotoğrafçı",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0497",
    "en": "photography",
    "pos": "n.",
    "tr": "fotoğrafçılık",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0498",
    "en": "pin",
    "pos": "n./v.",
    "tr": "toplu iğne / iğnelemek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0499",
    "en": "pipe",
    "pos": "n.",
    "tr": "boru",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0500",
    "en": "place",
    "pos": "v.",
    "tr": "yerleştirmek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0501",
    "en": "planning",
    "pos": "n.",
    "tr": "planlama",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0502",
    "en": "pleasant",
    "pos": "adj.",
    "tr": "hoş",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0503",
    "en": "pleasure",
    "pos": "n.",
    "tr": "zevk",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0504",
    "en": "plenty",
    "pos": "pron.",
    "tr": "bolca",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0505",
    "en": "plot",
    "pos": "n.",
    "tr": "olay örgüsü",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0506",
    "en": "plus",
    "pos": "prep.",
    "tr": "artı",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0507",
    "en": "poem",
    "pos": "n.",
    "tr": "şiir",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0508",
    "en": "poet",
    "pos": "n.",
    "tr": "şair",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0509",
    "en": "poetry",
    "pos": "n.",
    "tr": "şiir (tür olarak)",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0510",
    "en": "point",
    "pos": "v.",
    "tr": "işaret etmek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0511",
    "en": "poison",
    "pos": "n./v.",
    "tr": "zehir / zehirlemek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0512",
    "en": "poisonous",
    "pos": "adj.",
    "tr": "zehirli",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0513",
    "en": "policy",
    "pos": "n.",
    "tr": "politika",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0514",
    "en": "political",
    "pos": "adj.",
    "tr": "siyasi",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0515",
    "en": "politician",
    "pos": "n.",
    "tr": "politikacı",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0516",
    "en": "politics",
    "pos": "n.",
    "tr": "siyaset",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0517",
    "en": "port",
    "pos": "n.",
    "tr": "liman",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0518",
    "en": "portrait",
    "pos": "n.",
    "tr": "portre",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0519",
    "en": "possibly",
    "pos": "adv.",
    "tr": "muhtemelen",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0520",
    "en": "pot",
    "pos": "n.",
    "tr": "tencere, saksı",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0521",
    "en": "pour",
    "pos": "v.",
    "tr": "dökmek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0522",
    "en": "poverty",
    "pos": "n.",
    "tr": "yoksulluk",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0523",
    "en": "powder",
    "pos": "n.",
    "tr": "toz",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0524",
    "en": "powerful",
    "pos": "adj.",
    "tr": "güçlü",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0525",
    "en": "practical",
    "pos": "adj.",
    "tr": "pratik",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0526",
    "en": "pray",
    "pos": "v.",
    "tr": "dua etmek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0527",
    "en": "prayer",
    "pos": "n.",
    "tr": "dua",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0528",
    "en": "prediction",
    "pos": "n.",
    "tr": "tahmin",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0529",
    "en": "prepared",
    "pos": "adj.",
    "tr": "hazır",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0530",
    "en": "presentation",
    "pos": "n.",
    "tr": "sunum",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0531",
    "en": "press",
    "pos": "n./v.",
    "tr": "basın / basmak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0532",
    "en": "pressure",
    "pos": "n.",
    "tr": "baskı",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0533",
    "en": "pretend",
    "pos": "v.",
    "tr": "numara yapmak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0534",
    "en": "previous",
    "pos": "adj.",
    "tr": "önceki",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0535",
    "en": "previously",
    "pos": "adv.",
    "tr": "daha önce",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0536",
    "en": "priest",
    "pos": "n.",
    "tr": "rahip",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0537",
    "en": "primary",
    "pos": "adj.",
    "tr": "birincil, ilk",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0538",
    "en": "prince",
    "pos": "n.",
    "tr": "prens",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0539",
    "en": "princess",
    "pos": "n.",
    "tr": "prenses",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0540",
    "en": "printing",
    "pos": "n.",
    "tr": "baskı, matbaacılık",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0541",
    "en": "prisoner",
    "pos": "n.",
    "tr": "mahkum",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0542",
    "en": "private",
    "pos": "adj.",
    "tr": "özel",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0543",
    "en": "producer",
    "pos": "n.",
    "tr": "yapımcı",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0544",
    "en": "production",
    "pos": "n.",
    "tr": "üretim",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0545",
    "en": "profession",
    "pos": "n.",
    "tr": "meslek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0546",
    "en": "profit",
    "pos": "n.",
    "tr": "kar",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0547",
    "en": "program",
    "pos": "v.",
    "tr": "programlamak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0548",
    "en": "promote",
    "pos": "v.",
    "tr": "terfi ettirmek, tanıtmak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0549",
    "en": "proper",
    "pos": "adj.",
    "tr": "uygun, doğru",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0550",
    "en": "properly",
    "pos": "adv.",
    "tr": "düzgünce",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0551",
    "en": "property",
    "pos": "n.",
    "tr": "mülk",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0552",
    "en": "protest",
    "pos": "n./v.",
    "tr": "protesto / protesto etmek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0553",
    "en": "proud",
    "pos": "adj.",
    "tr": "gururlu",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0554",
    "en": "prove",
    "pos": "v.",
    "tr": "kanıtlamak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0555",
    "en": "pull",
    "pos": "n.",
    "tr": "çekiş",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0556",
    "en": "punish",
    "pos": "v.",
    "tr": "cezalandırmak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0557",
    "en": "punishment",
    "pos": "n.",
    "tr": "ceza",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0558",
    "en": "push",
    "pos": "n.",
    "tr": "itiş",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0559",
    "en": "qualification",
    "pos": "n.",
    "tr": "nitelik, yeterlilik",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0560",
    "en": "qualified",
    "pos": "adj.",
    "tr": "nitelikli",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0561",
    "en": "qualify",
    "pos": "v.",
    "tr": "hak kazanmak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0562",
    "en": "queue",
    "pos": "n./v.",
    "tr": "kuyruk / kuyrukta beklemek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0563",
    "en": "quit",
    "pos": "v.",
    "tr": "bırakmak, terk etmek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0564",
    "en": "quotation",
    "pos": "n.",
    "tr": "alıntı",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0565",
    "en": "quote",
    "pos": "v./n.",
    "tr": "alıntı yapmak / alıntı",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0566",
    "en": "race",
    "pos": "n.",
    "tr": "ırk",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0567",
    "en": "racing",
    "pos": "n.",
    "tr": "yarış",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0568",
    "en": "range",
    "pos": "n.",
    "tr": "aralık, çeşit",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0569",
    "en": "rare",
    "pos": "adj.",
    "tr": "nadir",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0570",
    "en": "rarely",
    "pos": "adv.",
    "tr": "nadiren",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0571",
    "en": "reaction",
    "pos": "n.",
    "tr": "tepki",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0572",
    "en": "reality",
    "pos": "n.",
    "tr": "gerçeklik",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0573",
    "en": "receipt",
    "pos": "n.",
    "tr": "fiş, makbuz",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0574",
    "en": "recommendation",
    "pos": "n.",
    "tr": "tavsiye",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0575",
    "en": "reference",
    "pos": "n.",
    "tr": "referans",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0576",
    "en": "reflect",
    "pos": "v.",
    "tr": "yansıtmak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0577",
    "en": "regularly",
    "pos": "adv.",
    "tr": "düzenli olarak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0578",
    "en": "reject",
    "pos": "v.",
    "tr": "reddetmek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0579",
    "en": "relate",
    "pos": "v.",
    "tr": "ilişkilendirmek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0580",
    "en": "related",
    "pos": "adj.",
    "tr": "ilişkili",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0581",
    "en": "relation",
    "pos": "n.",
    "tr": "ilişki",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0582",
    "en": "relative",
    "pos": "n./adj.",
    "tr": "akraba / göreceli",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0583",
    "en": "relaxed",
    "pos": "adj.",
    "tr": "rahat, gevşemiş",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0584",
    "en": "relaxing",
    "pos": "adj.",
    "tr": "rahatlatıcı",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0585",
    "en": "release",
    "pos": "v./n.",
    "tr": "yayınlamak / yayın",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0586",
    "en": "reliable",
    "pos": "adj.",
    "tr": "güvenilir",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0587",
    "en": "religion",
    "pos": "n.",
    "tr": "din",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0588",
    "en": "religious",
    "pos": "adj.",
    "tr": "dini",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0589",
    "en": "remain",
    "pos": "v.",
    "tr": "kalmak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0590",
    "en": "remind",
    "pos": "v.",
    "tr": "hatırlatmak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0591",
    "en": "remote",
    "pos": "adj.",
    "tr": "uzak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0592",
    "en": "rent",
    "pos": "n./v.",
    "tr": "kira / kiralamak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0593",
    "en": "repair",
    "pos": "n.",
    "tr": "tamirat",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0594",
    "en": "repeat",
    "pos": "n.",
    "tr": "tekrar",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0595",
    "en": "repeated",
    "pos": "adj.",
    "tr": "tekrarlanan",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0596",
    "en": "represent",
    "pos": "v.",
    "tr": "temsil etmek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0597",
    "en": "request",
    "pos": "v.",
    "tr": "talep etmek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0598",
    "en": "require",
    "pos": "v.",
    "tr": "gerektirmek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0599",
    "en": "reservation",
    "pos": "n.",
    "tr": "rezervasyon",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0600",
    "en": "resource",
    "pos": "n.",
    "tr": "kaynak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0601",
    "en": "respect",
    "pos": "n./v.",
    "tr": "saygı / saygı duymak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0602",
    "en": "responsibility",
    "pos": "n.",
    "tr": "sorumluluk",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0603",
    "en": "responsible",
    "pos": "adj.",
    "tr": "sorumlu",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0604",
    "en": "result",
    "pos": "v.",
    "tr": "sonuçlanmak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0605",
    "en": "retire",
    "pos": "v.",
    "tr": "emekli olmak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0606",
    "en": "retired",
    "pos": "adj.",
    "tr": "emekli",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0607",
    "en": "revise",
    "pos": "v.",
    "tr": "gözden geçirmek, tekrar etmek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0608",
    "en": "ring",
    "pos": "n.",
    "tr": "zil sesi",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0609",
    "en": "rise",
    "pos": "n.",
    "tr": "yükseliş",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0610",
    "en": "risk",
    "pos": "n./v.",
    "tr": "risk / riske atmak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0611",
    "en": "robot",
    "pos": "n.",
    "tr": "robot",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0612",
    "en": "roll",
    "pos": "v./n.",
    "tr": "yuvarlanmak / rulo",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0613",
    "en": "romantic",
    "pos": "adj.",
    "tr": "romantik",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0614",
    "en": "rope",
    "pos": "n.",
    "tr": "ip",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0615",
    "en": "rough",
    "pos": "adj.",
    "tr": "pürüzlü, sert",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0616",
    "en": "row",
    "pos": "n.",
    "tr": "sıra",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0617",
    "en": "royal",
    "pos": "adj.",
    "tr": "kraliyet ile ilgili",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0618",
    "en": "rugby",
    "pos": "n.",
    "tr": "ragbi",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0619",
    "en": "rule",
    "pos": "v.",
    "tr": "yönetmek, hükmetmek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0620",
    "en": "safety",
    "pos": "n.",
    "tr": "güvenlik",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0621",
    "en": "sail",
    "pos": "n.",
    "tr": "yelken",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0622",
    "en": "sailor",
    "pos": "n.",
    "tr": "denizci",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0623",
    "en": "sample",
    "pos": "n.",
    "tr": "örnek, numune",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0624",
    "en": "sand",
    "pos": "n.",
    "tr": "kum",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0625",
    "en": "scan",
    "pos": "v.",
    "tr": "taramak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0626",
    "en": "scientific",
    "pos": "adj.",
    "tr": "bilimsel",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0627",
    "en": "script",
    "pos": "n.",
    "tr": "senaryo",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0628",
    "en": "sculpture",
    "pos": "n.",
    "tr": "heykel",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0629",
    "en": "secondary",
    "pos": "adj.",
    "tr": "ikincil",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0630",
    "en": "security",
    "pos": "n.",
    "tr": "güvenlik",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0631",
    "en": "seed",
    "pos": "n.",
    "tr": "tohum",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0632",
    "en": "sensible",
    "pos": "adj.",
    "tr": "mantıklı, akıllıca",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0633",
    "en": "separate",
    "pos": "v.",
    "tr": "ayırmak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0634",
    "en": "seriously",
    "pos": "adv.",
    "tr": "ciddi şekilde",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0635",
    "en": "servant",
    "pos": "n.",
    "tr": "hizmetçi",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0636",
    "en": "set",
    "pos": "v.",
    "tr": "koymak, ayarlamak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0637",
    "en": "set (group)",
    "pos": "n.",
    "tr": "takım, set",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0638",
    "en": "setting",
    "pos": "n.",
    "tr": "ortam, ayar",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0639",
    "en": "sex",
    "pos": "n.",
    "tr": "cinsiyet",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0640",
    "en": "sexual",
    "pos": "adj.",
    "tr": "cinsel",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0641",
    "en": "shake",
    "pos": "n.",
    "tr": "sallama",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0642",
    "en": "share",
    "pos": "n.",
    "tr": "pay, hisse",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0643",
    "en": "sharp",
    "pos": "adj.",
    "tr": "keskin",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0644",
    "en": "shelf",
    "pos": "n.",
    "tr": "raf",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0645",
    "en": "shell",
    "pos": "n.",
    "tr": "kabuk",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0646",
    "en": "shift",
    "pos": "n.",
    "tr": "vardiya, değişim",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0647",
    "en": "shine",
    "pos": "v.",
    "tr": "parlamak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0648",
    "en": "shiny",
    "pos": "adj.",
    "tr": "parlak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0649",
    "en": "shoot",
    "pos": "v.",
    "tr": "ateş etmek, çekim yapmak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0650",
    "en": "shy",
    "pos": "adj.",
    "tr": "utangaç",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0651",
    "en": "sight",
    "pos": "n.",
    "tr": "görüş, manzara",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0652",
    "en": "signal",
    "pos": "n./v.",
    "tr": "sinyal / sinyal vermek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0653",
    "en": "silent",
    "pos": "adj.",
    "tr": "sessiz",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0654",
    "en": "silly",
    "pos": "adj.",
    "tr": "aptalca",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0655",
    "en": "similarity",
    "pos": "n.",
    "tr": "benzerlik",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0656",
    "en": "similarly",
    "pos": "adv.",
    "tr": "benzer şekilde",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0657",
    "en": "simply",
    "pos": "adv.",
    "tr": "basitçe",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0658",
    "en": "since",
    "pos": "adv.",
    "tr": "o zamandan beri",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0659",
    "en": "sink",
    "pos": "v.",
    "tr": "batmak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0660",
    "en": "slice",
    "pos": "n./v.",
    "tr": "dilim / dilimlemek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0661",
    "en": "slightly",
    "pos": "adv.",
    "tr": "biraz, hafifçe",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0662",
    "en": "slow",
    "pos": "v.",
    "tr": "yavaşlamak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0663",
    "en": "smart",
    "pos": "adj.",
    "tr": "akıllı, şık",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0664",
    "en": "smooth",
    "pos": "adj.",
    "tr": "pürüzsüz",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0665",
    "en": "software",
    "pos": "n.",
    "tr": "yazılım",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0666",
    "en": "soil",
    "pos": "n.",
    "tr": "toprak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0667",
    "en": "solid",
    "pos": "adj./n.",
    "tr": "katı",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0668",
    "en": "sort",
    "pos": "v.",
    "tr": "sınıflandırmak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0669",
    "en": "southern",
    "pos": "adj.",
    "tr": "güneyle ilgili",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0670",
    "en": "specifically",
    "pos": "adv.",
    "tr": "özellikle, açıkça",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0671",
    "en": "spending",
    "pos": "n.",
    "tr": "harcama",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0672",
    "en": "spicy",
    "pos": "adj.",
    "tr": "baharatlı",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0673",
    "en": "spirit",
    "pos": "n.",
    "tr": "ruh",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0674",
    "en": "spoken",
    "pos": "adj.",
    "tr": "sözlü, konuşulan",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0675",
    "en": "spot",
    "pos": "n.",
    "tr": "nokta, benek, yer",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0676",
    "en": "spread",
    "pos": "v.",
    "tr": "yaymak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0677",
    "en": "spring",
    "pos": "v.",
    "tr": "sıçramak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0678",
    "en": "stadium",
    "pos": "n.",
    "tr": "stadyum",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0679",
    "en": "staff",
    "pos": "n.",
    "tr": "personel",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0680",
    "en": "standard",
    "pos": "n./adj.",
    "tr": "standart",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0681",
    "en": "state",
    "pos": "adj./v.",
    "tr": "eyalet / belirtmek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0682",
    "en": "statistic",
    "pos": "n.",
    "tr": "istatistik",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0683",
    "en": "statue",
    "pos": "n.",
    "tr": "heykel",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0684",
    "en": "stick",
    "pos": "v.",
    "tr": "yapıştırmak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0685",
    "en": "stick (wood)",
    "pos": "n.",
    "tr": "değnek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0686",
    "en": "still",
    "pos": "adj.",
    "tr": "hareketsiz",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0687",
    "en": "store",
    "pos": "v.",
    "tr": "depolamak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0688",
    "en": "stranger",
    "pos": "n.",
    "tr": "yabancı",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0689",
    "en": "strength",
    "pos": "n.",
    "tr": "güç",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0690",
    "en": "string",
    "pos": "n.",
    "tr": "ip, tel",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0691",
    "en": "strongly",
    "pos": "adv.",
    "tr": "güçlü şekilde",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0692",
    "en": "studio",
    "pos": "n.",
    "tr": "stüdyo",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0693",
    "en": "stuff",
    "pos": "n.",
    "tr": "eşya, şey",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0694",
    "en": "substance",
    "pos": "n.",
    "tr": "madde",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0695",
    "en": "successfully",
    "pos": "adv.",
    "tr": "başarıyla",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0696",
    "en": "sudden",
    "pos": "adj.",
    "tr": "ani",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0697",
    "en": "suffer",
    "pos": "v.",
    "tr": "acı çekmek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0698",
    "en": "suit",
    "pos": "v.",
    "tr": "yakışmak, uygun olmak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0699",
    "en": "suitable",
    "pos": "adj.",
    "tr": "uygun",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0700",
    "en": "summarize",
    "pos": "v.",
    "tr": "özetlemek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0701",
    "en": "summary",
    "pos": "n.",
    "tr": "özet",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0702",
    "en": "supply",
    "pos": "n./v.",
    "tr": "kaynak, tedarik / tedarik etmek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0703",
    "en": "supporter",
    "pos": "n.",
    "tr": "taraftar",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0704",
    "en": "surely",
    "pos": "adv.",
    "tr": "kesinlikle, elbette",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0705",
    "en": "surface",
    "pos": "n.",
    "tr": "yüzey",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0706",
    "en": "survive",
    "pos": "v.",
    "tr": "hayatta kalmak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0707",
    "en": "swim",
    "pos": "n.",
    "tr": "yüzme (eylem)",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0708",
    "en": "switch",
    "pos": "v.",
    "tr": "değiştirmek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0709",
    "en": "symptom",
    "pos": "n.",
    "tr": "belirti",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0710",
    "en": "tail",
    "pos": "n.",
    "tr": "kuyruk",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0711",
    "en": "talent",
    "pos": "n.",
    "tr": "yetenek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0712",
    "en": "talented",
    "pos": "adj.",
    "tr": "yetenekli",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0713",
    "en": "tape",
    "pos": "n.",
    "tr": "bant",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0714",
    "en": "tax",
    "pos": "n./v.",
    "tr": "vergi / vergilendirmek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0715",
    "en": "technical",
    "pos": "adj.",
    "tr": "teknik",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0716",
    "en": "technique",
    "pos": "n.",
    "tr": "teknik (yöntem)",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0717",
    "en": "tend",
    "pos": "v.",
    "tr": "eğiliminde olmak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0718",
    "en": "tent",
    "pos": "n.",
    "tr": "çadır",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0719",
    "en": "that",
    "pos": "adv.",
    "tr": "o kadar",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0720",
    "en": "theirs",
    "pos": "pron.",
    "tr": "onlarınki",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0721",
    "en": "theme",
    "pos": "n.",
    "tr": "tema",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0722",
    "en": "theory",
    "pos": "n.",
    "tr": "teori",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0723",
    "en": "therefore",
    "pos": "adv.",
    "tr": "bu yüzden",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0724",
    "en": "this",
    "pos": "adv.",
    "tr": "bu kadar",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0725",
    "en": "though",
    "pos": "conj./adv.",
    "tr": "-e rağmen, ama",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0726",
    "en": "throat",
    "pos": "n.",
    "tr": "boğaz",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0727",
    "en": "throughout",
    "pos": "prep./adv.",
    "tr": "boyunca, her tarafında",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0728",
    "en": "tight",
    "pos": "adj.",
    "tr": "sıkı, dar",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0729",
    "en": "till",
    "pos": "conj./prep.",
    "tr": "-e kadar",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0730",
    "en": "tin",
    "pos": "n.",
    "tr": "teneke",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0731",
    "en": "tiny",
    "pos": "adj.",
    "tr": "minik",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0732",
    "en": "tip",
    "pos": "v.",
    "tr": "bahşiş vermek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0733",
    "en": "toe",
    "pos": "n.",
    "tr": "ayak parmağı",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0734",
    "en": "tongue",
    "pos": "n.",
    "tr": "dil (organ)",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0735",
    "en": "total",
    "pos": "adj./n.",
    "tr": "toplam",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0736",
    "en": "totally",
    "pos": "adv.",
    "tr": "tamamen",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0737",
    "en": "touch",
    "pos": "n.",
    "tr": "dokunuş",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0738",
    "en": "tour",
    "pos": "v.",
    "tr": "turlamak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0739",
    "en": "trade",
    "pos": "n./v.",
    "tr": "ticaret / ticaret yapmak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0740",
    "en": "translate",
    "pos": "v.",
    "tr": "çevirmek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0741",
    "en": "translation",
    "pos": "n.",
    "tr": "çeviri",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0742",
    "en": "transport",
    "pos": "v.",
    "tr": "taşımak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0743",
    "en": "treat",
    "pos": "v.",
    "tr": "davranmak, tedavi etmek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0744",
    "en": "treatment",
    "pos": "n.",
    "tr": "tedavi",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0745",
    "en": "trend",
    "pos": "n.",
    "tr": "trend",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0746",
    "en": "trick",
    "pos": "n./v.",
    "tr": "hile / kandırmak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0747",
    "en": "truth",
    "pos": "n.",
    "tr": "gerçek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0748",
    "en": "tube",
    "pos": "n.",
    "tr": "tüp, boru",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0749",
    "en": "type",
    "pos": "v.",
    "tr": "yazmak (klavye)",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0750",
    "en": "typically",
    "pos": "adv.",
    "tr": "tipik olarak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0751",
    "en": "tyre",
    "pos": "n.",
    "tr": "lastik (araç)",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0752",
    "en": "ugly",
    "pos": "adj.",
    "tr": "çirkin",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0753",
    "en": "unable",
    "pos": "adj.",
    "tr": "yapamayan",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0754",
    "en": "uncomfortable",
    "pos": "adj.",
    "tr": "rahatsız",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0755",
    "en": "underwear",
    "pos": "n.",
    "tr": "iç çamaşırı",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0756",
    "en": "unemployed",
    "pos": "adj.",
    "tr": "işsiz",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0757",
    "en": "unemployment",
    "pos": "n.",
    "tr": "işsizlik",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0758",
    "en": "unfair",
    "pos": "adj.",
    "tr": "haksız",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0759",
    "en": "union",
    "pos": "n.",
    "tr": "birlik, sendika",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0760",
    "en": "unless",
    "pos": "conj.",
    "tr": "-medikçe",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0761",
    "en": "unlike",
    "pos": "prep.",
    "tr": "-in aksine",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0762",
    "en": "unlikely",
    "pos": "adj.",
    "tr": "olası olmayan",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0763",
    "en": "unnecessary",
    "pos": "adj.",
    "tr": "gereksiz",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0764",
    "en": "unpleasant",
    "pos": "adj.",
    "tr": "hoş olmayan",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0765",
    "en": "update",
    "pos": "v./n.",
    "tr": "güncellemek / güncelleme",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0766",
    "en": "upon",
    "pos": "prep.",
    "tr": "üzerine",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0767",
    "en": "upset",
    "pos": "adj./v.",
    "tr": "üzgün / üzmek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0768",
    "en": "used",
    "pos": "adj.",
    "tr": "kullanılmış",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0769",
    "en": "valuable",
    "pos": "adj.",
    "tr": "değerli",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0770",
    "en": "value",
    "pos": "n.",
    "tr": "değer",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0771",
    "en": "various",
    "pos": "adj.",
    "tr": "çeşitli",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0772",
    "en": "version",
    "pos": "n.",
    "tr": "versiyon",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0773",
    "en": "victim",
    "pos": "n.",
    "tr": "kurban",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0774",
    "en": "view",
    "pos": "v.",
    "tr": "görüntülemek, görmek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0775",
    "en": "viewer",
    "pos": "n.",
    "tr": "izleyici",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0776",
    "en": "violent",
    "pos": "adj.",
    "tr": "şiddetli",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0777",
    "en": "volunteer",
    "pos": "n./v.",
    "tr": "gönüllü / gönüllü olmak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0778",
    "en": "vote",
    "pos": "n./v.",
    "tr": "oy / oy vermek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0779",
    "en": "warm",
    "pos": "v.",
    "tr": "ısıtmak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0780",
    "en": "warn",
    "pos": "v.",
    "tr": "uyarmak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0781",
    "en": "warning",
    "pos": "n.",
    "tr": "uyarı",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0782",
    "en": "waste",
    "pos": "n./v./adj.",
    "tr": "israf / israf etmek",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0783",
    "en": "water",
    "pos": "v.",
    "tr": "sulamak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0784",
    "en": "wave",
    "pos": "v.",
    "tr": "el sallamak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0785",
    "en": "weapon",
    "pos": "n.",
    "tr": "silah",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0786",
    "en": "weigh",
    "pos": "v.",
    "tr": "tartmak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0787",
    "en": "western",
    "pos": "adj.",
    "tr": "batıyla ilgili",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0788",
    "en": "whatever",
    "pos": "det./pron.",
    "tr": "her ne olursa",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0789",
    "en": "whenever",
    "pos": "conj.",
    "tr": "her ne zaman",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0790",
    "en": "whether",
    "pos": "conj.",
    "tr": "-ip ip-mediği",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0791",
    "en": "while",
    "pos": "n.",
    "tr": "bir süre",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0792",
    "en": "whole",
    "pos": "n.",
    "tr": "bütün (isim)",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0793",
    "en": "will",
    "pos": "n.",
    "tr": "irade, vasiyet",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0794",
    "en": "win",
    "pos": "n.",
    "tr": "galibiyet",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0795",
    "en": "wing",
    "pos": "n.",
    "tr": "kanat",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0796",
    "en": "within",
    "pos": "prep.",
    "tr": "içinde (süre/mesafe)",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0797",
    "en": "wonder",
    "pos": "v./n.",
    "tr": "merak etmek / merak",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0798",
    "en": "wool",
    "pos": "n.",
    "tr": "yün",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0799",
    "en": "worldwide",
    "pos": "adj./adv.",
    "tr": "dünya çapında",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0800",
    "en": "worry",
    "pos": "n.",
    "tr": "endişe",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0801",
    "en": "worse",
    "pos": "adv.",
    "tr": "daha kötü",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0802",
    "en": "worst",
    "pos": "adv.",
    "tr": "en kötü şekilde",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0803",
    "en": "worth",
    "pos": "adj.",
    "tr": "değerinde",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0804",
    "en": "written",
    "pos": "adj.",
    "tr": "yazılı",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0805",
    "en": "wrong",
    "pos": "adv.",
    "tr": "yanlış şekilde",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0806",
    "en": "yard",
    "pos": "n.",
    "tr": "avlu, yarda",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0807",
    "en": "young",
    "pos": "n.",
    "tr": "gençler, yavrular",
    "level": "B1",
    "status": "new"
  },
  {
    "id": "b1_0808",
    "en": "youth",
    "pos": "n.",
    "tr": "gençlik",
    "level": "B1",
    "status": "new"
  }
];

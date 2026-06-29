const STORE = "moje-rostliny-v1";
const DB_NAME = `${STORE}-db`;
const DB_STORE = "state";
const UNLOCK_SECRET = "moje-rostliny-osobni-kody-2026";
const UNLOCK_APP_ID = "moje-rostliny-v1";
const DEVICE_KEY = `${STORE}-device-id`;
const LICENSE_KEY = `${STORE}-license`;
const CODE_ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
const CURRENCIES = {
  EUR: { label: "EUR", symbol: "\u20ac" },
  CZK: { label: "K\u010d", symbol: "K\u010d" },
  PLN: { label: "PLN", symbol: "z\u0142" },
};

const defaults = {
  settings: {
    title: "My Plant Collection",
    subtitle: "Private collection",
    theme: "forest",
    themeMode: "dark",
    customColor: "#53cb7f",
    currency: "EUR",
    categories: ["Begonias", "Coleus", "Dahlias"],
    categoryIcons: {},
    language: "en",
    showPrices: false,
    showGallery: true,
    showMoments: true,
    showSeedlings: true,
    showCustomers: false,
    showAllCategory: true,
    onboardingDone: false,
  },
  plants: [],
  albums: [],
  moments: [],
  customers: [],
};

const SEEDLING_CATEGORY = "Moje semen\u00e1\u010dky";
const THEMES = [
  ["forest", "themeForest", "#53cb7f"],
  ["rose", "themeRose", "#ff6fa2"],
  ["cream", "themeCream", "#f5c76b"],
  ["violet", "themeViolet", "#9c7cff"],
  ["sky", "themeSky", "#65b7ff"],
  ["terra", "themeTerra", "#e47b55"],
  ["olive", "themeOlive", "#a8c66c"],
  ["berry", "themeBerry", "#d84b7d"],
  ["mint", "themeMint", "#68dfc5"],
  ["sunset", "themeSunset", "#ff9f5a"],
  ["dark", "themeDarkGreen", "#3bd6b0"],
];

const PLANT_EMOJIS = [
  "\u{1F33F}", "\u{1F331}", "\u{1FAB4}", "\u{1F343}", "\u2618\uFE0F", "\u{1F340}", "\u{1F33E}", "\u{1F335}", "\u{1FAB7}", "\u{1F338}", "\u{1F33A}", "\u{1F33C}",
  "\u{1F33B}", "\u{1F337}", "\u{1F940}", "\u{1F490}", "\u{1F3F5}\uFE0F", "\u{1FABB}", "\u{1F339}", "\u{1F332}", "\u{1F333}", "\u{1F334}", "\u{1F342}", "\u{1F341}",
  "\u{1F344}", "\u{1F330}", "\u{1F353}", "\u{1FAD0}", "\u{1F345}", "\u{1F336}\uFE0F", "\u{1F955}", "\u{1F9C4}", "\u{1F9C5}", "\u{1F954}", "\u{1F34B}", "\u{1F34A}",
  "\u{1F34E}", "\u{1F350}", "\u{1F351}", "\u{1F352}", "\u{1F347}", "\u{1FADB}", "\u{1F96C}", "\u{1F966}", "\u{1F9FA}", "\u{1FAB9}", "\u2728", "\u{1F49A}",
];


const CATEGORY_ICONS = Array.from({ length: 70 }, (_, index) => `assets/category-icons-final/icon-${String(index + 1).padStart(2, "0")}.png`);
const DEFAULT_CATEGORY_ICON = CATEGORY_ICONS[0];
const SEEDLING_ICON = CATEGORY_ICONS[1] || DEFAULT_CATEGORY_ICON;
const ALL_CATEGORY_KEY = "__all__";
const ALL_ICON = CATEGORY_ICONS[6] || DEFAULT_CATEGORY_ICON;
const NO_ICON = "__none__";
const TEXT = {
  cs: {
    plants: "Rostliny",
    gallery: "Galerie",
    moments: "Deník",
    customers: "Z\u00e1kazn\u00edci",
    settings: "Nastaven\u00ed",
    add: "P\u0159idat",
    all: "V\u0161e",
    seedlings: "Semen\u00e1\u010dky",
    search: "Hledat podle n\u00e1zvu...",
    empty: "Nic tu zat\u00edm nen\u00ed.",
    emptyHint: "Přidej první rostlinu do této části.",
    emptyAddPlant: "Přidat rostlinu",
    emptyAddCategory: "Vytvořit kategorii",
    emptyOpenSettings: "Upravit appku",
    appTitle: "N\u00e1zev aplikace",
    subtitle: "Podnadpis",
    language: "Jazyk",
    colors: "Barvy",
    customColor: "Vlastn\u00ed barva",
    mode: "Re\u017eim",
    currency: "M\u011bna",
    light: "Sv\u011btl\u00fd",
    dark: "Tmav\u00fd",
    categories: "Kategorie",
    categoryIcons: "Ikony kategori\u00ed",
    languageCurrency: "Jazyk a m\u011bna",
    appIdentity: "N\u00e1zev appky",
    appearance: "Vzhled",
    visibleSections: "Viditeln\u00e9 \u010d\u00e1sti",
    addCategory: "P\u0159idat kategorii",
    categoryName: "N\u00e1zev kategorie",
    categoryEmoji: "Ikona",
    noIcon: "Bez ikony",
    showPrices: "Zobrazovat ceny",
    showGallery: "Galerie fotek",
    showMoments: "Deník / momenty",
    showSeedlings: "Moje semen\u00e1\u010dky",
    showCustomers: "Z\u00e1kazn\u00edci a objedn\u00e1vky",
    showAllCategory: "Zobrazit kategorii Vše",
    saveSettings: "Ulo\u017eit nastaven\u00ed",
    newPlant: "Nov\u00e1 rostlina",
    newSeedling: "Nov\u00fd semen\u00e1\u010dek",
    newAlbum: "Nov\u00e9 album",
    newMoment: "Zachytit moment",
    newCustomer: "Nov\u00fd z\u00e1kazn\u00edk",
    newCategory: "Nov\u00e1 kategorie",
    themeForest: "Zelen\u00e1",
    themeRose: "R\u016f\u017eov\u00e1",
    themeCream: "Sv\u011btl\u00e1",
    themeViolet: "Fialov\u00e1",
    themeSky: "Modr\u00e1",
    themeTerra: "Terakota",
    themeOlive: "Olivov\u00e1",
    themeBerry: "Malinov\u00e1",
    themeMint: "M\u00e1tov\u00e1",
    themeSunset: "Z\u00e1pad",
    themeDarkGreen: "Tmav\u00e1 zelen\u00e1",
  },
  sk: {
    plants: "Rastliny",
    gallery: "Gal\u00e9ria",
    moments: "Denník",
    customers: "Z\u00e1kazn\u00edci",
    settings: "Nastavenia",
    add: "Prida\u0165",
    all: "V\u0161etko",
    seedlings: "Semen\u00e1\u010dky",
    search: "H\u013eada\u0165 pod\u013ea n\u00e1zvu...",
    empty: "Zatia\u013e tu ni\u010d nie je.",
    emptyHint: "Pridaj prvú rastlinu do tejto časti.",
    emptyAddPlant: "Pridať rastlinu",
    emptyAddCategory: "Vytvoriť kategóriu",
    emptyOpenSettings: "Upraviť appku",
    appTitle: "N\u00e1zov aplik\u00e1cie",
    subtitle: "Podnadpis",
    language: "Jazyk",
    colors: "Farby",
    customColor: "Vlastn\u00e1 farba",
    mode: "Re\u017eim",
    currency: "Mena",
    light: "Svetl\u00fd",
    dark: "Tmav\u00fd",
    categories: "Kateg\u00f3rie",
    categoryIcons: "Ikony kateg\u00f3ri\u00ed",
    languageCurrency: "Jazyk a mena",
    appIdentity: "N\u00e1zov appky",
    appearance: "Vzh\u013ead",
    visibleSections: "Vidite\u013en\u00e9 \u010dasti",
    addCategory: "Prida\u0165 kateg\u00f3riu",
    categoryName: "N\u00e1zov kateg\u00f3rie",
    categoryEmoji: "Ikona",
    noIcon: "Bez ikony",
    showPrices: "Zobrazova\u0165 ceny",
    showGallery: "Gal\u00e9ria fotiek",
    showMoments: "Denník / momenty",
    showSeedlings: "Moje semen\u00e1\u010dky",
    showCustomers: "Z\u00e1kazn\u00edci a objedn\u00e1vky",
    showAllCategory: "Zobraziť kategóriu Všetko",
    saveSettings: "Ulo\u017ei\u0165 nastavenia",
    newPlant: "Nov\u00e1 rastlina",
    newSeedling: "Nov\u00fd semen\u00e1\u010dek",
    newAlbum: "Nov\u00fd album",
    newMoment: "Zachytiť moment",
    newCustomer: "Nov\u00fd z\u00e1kazn\u00edk",
    newCategory: "Nov\u00e1 kateg\u00f3ria",
    themeForest: "Zelen\u00e1",
    themeRose: "Ru\u017eov\u00e1",
    themeCream: "Svetl\u00e1",
    themeViolet: "Fialov\u00e1",
    themeSky: "Modr\u00e1",
    themeTerra: "Terakota",
    themeOlive: "Olivov\u00e1",
    themeBerry: "Malinov\u00e1",
    themeMint: "M\u00e4tov\u00e1",
    themeSunset: "Z\u00e1pad",
    themeDarkGreen: "Tmav\u00e1 zelen\u00e1",
  },
  en: {
    plants: "Plants",
    gallery: "Gallery",
    moments: "Moments",
    customers: "Customers",
    settings: "Settings",
    add: "Add",
    all: "All",
    seedlings: "Seedlings",
    search: "Search by name...",
    empty: "Nothing here yet.",
    emptyHint: "Add the first plant to this section.",
    emptyAddPlant: "Add plant",
    emptyAddCategory: "Create category",
    emptyOpenSettings: "Personalize app",
    appTitle: "App name",
    subtitle: "Subtitle",
    language: "Language",
    colors: "Colors",
    customColor: "Custom color",
    mode: "Mode",
    currency: "Currency",
    light: "Light",
    dark: "Dark",
    categories: "Categories",
    categoryIcons: "Category icons",
    languageCurrency: "Language and currency",
    appIdentity: "App name",
    appearance: "Appearance",
    visibleSections: "Visible sections",
    addCategory: "Add category",
    categoryName: "Category name",
    categoryEmoji: "Icon",
    noIcon: "No icon",
    showPrices: "Show prices",
    showGallery: "Photo gallery",
    showMoments: "Moments diary",
    showSeedlings: "My seedlings",
    showCustomers: "Customers and orders",
    showAllCategory: "Show All category",
    saveSettings: "Save settings",
    newPlant: "New plant",
    newSeedling: "New seedling",
    newAlbum: "New album",
    newMoment: "Capture moment",
    newCustomer: "New customer",
    newCategory: "New category",
    editCategory: "Edit category",
    deleteCategory: "Delete category",
    themeForest: "Green",
    themeRose: "Rose",
    themeCream: "Light",
    themeViolet: "Violet",
    themeSky: "Blue",
    themeTerra: "Terracotta",
    themeOlive: "Olive",
    themeBerry: "Berry",
    themeMint: "Mint",
    themeSunset: "Sunset",
    themeDarkGreen: "Dark green",
  },
  pl: {
    plants: "Ro\u015bliny",
    gallery: "Galeria",
    moments: "Dziennik",
    customers: "Klienci",
    settings: "Ustawienia",
    add: "Dodaj",
    all: "Wszystko",
    seedlings: "Siewki",
    search: "Szukaj wed\u0142ug nazwy...",
    empty: "Na razie nic tu nie ma.",
    emptyHint: "Dodaj pierwszą roślinę do tej sekcji.",
    emptyAddPlant: "Dodaj roślinę",
    emptyAddCategory: "Utwórz kategorię",
    emptyOpenSettings: "Dostosuj aplikację",
    appTitle: "Nazwa aplikacji",
    subtitle: "Podtytu\u0142",
    language: "J\u0119zyk",
    colors: "Kolory",
    customColor: "W\u0142asny kolor",
    mode: "Tryb",
    currency: "Waluta",
    light: "Jasny",
    dark: "Ciemny",
    categories: "Kategorie",
    categoryIcons: "Ikony kategorii",
    languageCurrency: "J\u0119zyk i waluta",
    appIdentity: "Nazwa aplikacji",
    appearance: "Wygl\u0105d",
    visibleSections: "Widoczne sekcje",
    addCategory: "Dodaj kategori\u0119",
    categoryName: "Nazwa kategorii",
    categoryEmoji: "Ikona",
    noIcon: "Bez ikony",
    showPrices: "Pokazuj ceny",
    showGallery: "Galeria zdj\u0119\u0107",
    showMoments: "Dziennik / momenty",
    showSeedlings: "Moje siewki",
    showCustomers: "Klienci i zam\u00f3wienia",
    showAllCategory: "Pokaż kategorię Wszystko",
    saveSettings: "Zapisz ustawienia",
    newPlant: "Nowa ro\u015blina",
    newSeedling: "Nowa siewka",
    newAlbum: "Nowy album",
    newMoment: "Uchwyć moment",
    newCustomer: "Nowy klient",
    newCategory: "Nowa kategoria",
    editCategory: "Edytuj kategorię",
    deleteCategory: "Usuń kategorię",
    themeForest: "Zielony",
    themeRose: "R\u00f3\u017cowy",
    themeCream: "Jasny",
    themeViolet: "Fioletowy",
    themeSky: "Niebieski",
    themeTerra: "Terakota",
    themeOlive: "Oliwkowy",
    themeBerry: "Malinowy",
    themeMint: "Mi\u0119towy",
    themeSunset: "Zach\u00f3d",
    themeDarkGreen: "Ciemnozielony",
  },
};
const FORM_TEXT = {
  cs: {
    editPlant: "Upravit rostlinu",
    editAlbum: "Upravit album",
    editMoment: "Upravit moment",
    editCustomer: "Upravit z\u00e1kazn\u00edka",
    name: "N\u00e1zev",
    personName: "Jm\u00e9no",
    category: "Kategorie",
    price: "Cena",
    note: "Pozn\u00e1mka",
    photos: "Fotky",
    save: "Ulo\u017eit",
    deletePlant: "Vymazat rostlinu",
    deleteAlbum: "Vymazat album",
    deleteCustomer: "Vymazat z\u00e1kazn\u00edka",
    photosInAlbum: "Fotky v albu",
    photosInPlant: "Fotky u rostliny",
    mainPhoto: "Hlavn\u00ed",
    deletePhoto: "Vymazat fotku",
    contact: "Kontakt",
    contactPlaceholder: "telefon, e-mail, adresa",
    wantedPlants: "Rostliny, kter\u00e9 chce",
    extraFees: "Poplatky nav\u00edc",
    total: "Celkem",
    feePlaceholder: "nap\u0159. Z\u00e1silkovna",
    pricePlaceholder: "nap\u0159. 45",
    currencyPlaceholder: "K\u010d",
    detail: "Detail",
    open: "Otev\u0159\u00edt",
    edit: "Upravit",
    fillName: "Nejd\u0159\u00edv vypl\u0148 n\u00e1zev.",
    confirmDeletePhoto: "Opravdu vymazat tuto fotku?",
    confirmDelete: "Opravdu vymazat {name}?",
    addPlantsFirst: "Nejd\u0159\u00edv p\u0159idej rostliny.",
    noSelectedPlants: "Bez vybran\u00fdch rostlin",
    addPlant: "P\u0159idat rostlinu",
    choosePlant: "Vyber ze seznamu nebo pi\u0161 n\u00e1zev...",
    selectedPlants: "Vybran\u00e9 rostliny",
    remove: "Odebrat",
    plantFallback: "Rostlina",
    photoCount: "{count} fotek",
    storageError: "Data nebo fotky se nepoda\u0159ilo ulo\u017eit. Zkontroluj voln\u00e9 m\u00edsto v telefonu a zkus to znovu.",
    deleteMoment: "Vymazat moment",
    momentDate: "Datum",
    momentText: "Co se stalo",
    momentTextPlaceholder: "např. první květ, přesazeno, nový list...",
    capturePhoto: "Odfotit teď",
    choosePhoto: "Vybrat z telefonu",
    fillMoment: "Přidej fotku nebo krátkou poznámku.",
    latestMoments: "Poslední momenty",
    memoryToday: "Vzpomínka na dnešek",
  },
  sk: {
    editPlant: "Upravi\u0165 rastlinu",
    editAlbum: "Upravi\u0165 album",
    editMoment: "Upraviť moment",
    editCustomer: "Upravi\u0165 z\u00e1kazn\u00edka",
    name: "N\u00e1zov",
    personName: "Meno",
    category: "Kateg\u00f3ria",
    price: "Cena",
    note: "Pozn\u00e1mka",
    photos: "Fotky",
    save: "Ulo\u017ei\u0165",
    deletePlant: "Vymaza\u0165 rastlinu",
    deleteAlbum: "Vymaza\u0165 album",
    deleteCustomer: "Vymaza\u0165 z\u00e1kazn\u00edka",
    photosInAlbum: "Fotky v albume",
    photosInPlant: "Fotky pri rastline",
    mainPhoto: "Hlavn\u00e1",
    deletePhoto: "Vymaza\u0165 fotku",
    contact: "Kontakt",
    contactPlaceholder: "telef\u00f3n, e-mail, adresa",
    wantedPlants: "Rastliny, ktor\u00e9 chce",
    extraFees: "Poplatky navy\u0161e",
    total: "Spolu",
    feePlaceholder: "napr. Z\u00e1sielkov\u0148a",
    pricePlaceholder: "napr. 45",
    currencyPlaceholder: "\u20ac / K\u010d",
    detail: "Detail",
    open: "Otvori\u0165",
    edit: "Upravi\u0165",
    fillName: "Najprv vypl\u0148 n\u00e1zov.",
    confirmDeletePhoto: "Naozaj vymaza\u0165 t\u00fato fotku?",
    confirmDelete: "Naozaj vymaza\u0165 {name}?",
    addPlantsFirst: "Najprv pridaj rastliny.",
    noSelectedPlants: "Bez vybran\u00fdch rastl\u00edn",
    addPlant: "Prida\u0165 rastlinu",
    choosePlant: "Vyber zo zoznamu alebo p\u00ed\u0161 n\u00e1zov...",
    selectedPlants: "Vybran\u00e9 rastliny",
    remove: "Odobra\u0165",
    plantFallback: "Rastlina",
    photoCount: "{count} fotiek",
    storageError: "D\u00e1ta alebo fotky sa nepodarilo ulo\u017ei\u0165. Skontroluj vo\u013en\u00e9 miesto v telef\u00f3ne a sk\u00fas to znova.",
    deleteMoment: "Vymazať moment",
    momentDate: "Dátum",
    momentText: "Čo sa stalo",
    momentTextPlaceholder: "napr. prvý kvet, presadené, nový list...",
    capturePhoto: "Odfotiť teraz",
    choosePhoto: "Vybrať z telefónu",
    fillMoment: "Pridaj fotku alebo krátku poznámku.",
    latestMoments: "Posledné momenty",
    memoryToday: "Spomienka na dnešok",
  },
  en: {
    editPlant: "Edit plant",
    editAlbum: "Edit album",
    editMoment: "Edit moment",
    editCustomer: "Edit customer",
    name: "Name",
    personName: "Name",
    category: "Category",
    price: "Price",
    note: "Note",
    photos: "Photos",
    save: "Save",
    deletePlant: "Delete plant",
    deleteAlbum: "Delete album",
    deleteCustomer: "Delete customer",
    photosInAlbum: "Photos in album",
    photosInPlant: "Plant photos",
    mainPhoto: "Main",
    deletePhoto: "Delete photo",
    contact: "Contact",
    contactPlaceholder: "phone, e-mail, address",
    wantedPlants: "Plants they want",
    extraFees: "Extra fees",
    total: "Total",
    feePlaceholder: "e.g. shipping",
    pricePlaceholder: "e.g. 45",
    currencyPlaceholder: "price",
    detail: "Detail",
    open: "Open",
    edit: "Edit",
    fillName: "Please enter a name first.",
    confirmDeletePhoto: "Delete this photo?",
    confirmDelete: "Delete {name}?",
    addPlantsFirst: "Add plants first.",
    noSelectedPlants: "No selected plants",
    addPlant: "Add plant",
    choosePlant: "Choose from the list or type a name...",
    selectedPlants: "Selected plants",
    remove: "Remove",
    plantFallback: "Plant",
    photoCount: "{count} photos",
    storageError: "Data or photos could not be saved. Check free space on the phone and try again.",
    deleteMoment: "Delete moment",
    momentDate: "Date",
    momentText: "What happened",
    momentTextPlaceholder: "e.g. first bloom, repotted, new leaf...",
    capturePhoto: "Take photo now",
    choosePhoto: "Choose from phone",
    fillMoment: "Add a photo or a short note.",
    latestMoments: "Latest moments",
    memoryToday: "Memory from today",
  },
  pl: {
    editPlant: "Edytuj ro\u015blin\u0119",
    editAlbum: "Edytuj album",
    editMoment: "Edytuj moment",
    editCustomer: "Edytuj klienta",
    name: "Nazwa",
    personName: "Imi\u0119",
    category: "Kategoria",
    price: "Cena",
    note: "Notatka",
    photos: "Zdj\u0119cia",
    save: "Zapisz",
    deletePlant: "Usu\u0144 ro\u015blin\u0119",
    deleteAlbum: "Usu\u0144 album",
    deleteCustomer: "Usu\u0144 klienta",
    photosInAlbum: "Zdj\u0119cia w albumie",
    photosInPlant: "Zdj\u0119cia ro\u015bliny",
    mainPhoto: "G\u0142\u00f3wne",
    deletePhoto: "Usu\u0144 zdj\u0119cie",
    contact: "Kontakt",
    contactPlaceholder: "telefon, e-mail, adres",
    wantedPlants: "Ro\u015bliny, kt\u00f3re chce",
    extraFees: "Dodatkowe op\u0142aty",
    total: "Razem",
    feePlaceholder: "np. wysy\u0142ka",
    pricePlaceholder: "np. 45",
    currencyPlaceholder: "z\u0142 / K\u010d",
    detail: "Szczeg\u00f3\u0142y",
    open: "Otw\u00f3rz",
    edit: "Edytuj",
    fillName: "Najpierw wpisz nazw\u0119.",
    confirmDeletePhoto: "Usun\u0105\u0107 to zdj\u0119cie?",
    confirmDelete: "Usun\u0105\u0107 {name}?",
    addPlantsFirst: "Najpierw dodaj ro\u015bliny.",
    noSelectedPlants: "Bez wybranych ro\u015blin",
    addPlant: "Dodaj ro\u015blin\u0119",
    choosePlant: "Wybierz z listy albo wpisz nazw\u0119...",
    selectedPlants: "Wybrane ro\u015bliny",
    remove: "Usu\u0144",
    plantFallback: "Ro\u015blina",
    photoCount: "{count} zdj\u0119\u0107",
    storageError: "Nie uda\u0142o si\u0119 zapisa\u0107 danych lub zdj\u0119\u0107. Sprawd\u017a wolne miejsce w telefonie i spr\u00f3buj ponownie.",
    deleteMoment: "Usuń moment",
    momentDate: "Data",
    momentText: "Co się stało",
    momentTextPlaceholder: "np. pierwszy kwiat, przesadzone, nowy liść...",
    capturePhoto: "Zrób zdjęcie teraz",
    choosePhoto: "Wybierz z telefonu",
    fillMoment: "Dodaj zdjęcie albo krótką notatkę.",
    latestMoments: "Ostatnie momenty",
    memoryToday: "Wspomnienie z dziś",
  },
};
Object.assign(FORM_TEXT.cs, {
  relatedPlant: "Patří k rostlině", noPlant: "Bez přiřazení", relatedCategory: "Patří do kategorie", noCategory: "Bez kategorie", plantStory: "Příběh rostliny", noPlantStory: "Zatím tu nejsou žádné momenty.", saved: "Uloženo", firstPlantJoy: "První rostlina je doma", tenPlantsJoy: "Tvoje sbírka krásně roste", pieces: "ks",
});
Object.assign(FORM_TEXT.sk, {
  relatedPlant: "Patrí k rastline", noPlant: "Bez priradenia", relatedCategory: "Patrí do kategórie", noCategory: "Bez kategórie", plantStory: "Príbeh rastliny", noPlantStory: "Zatiaľ tu nie sú žiadne momenty.", saved: "Uložené", firstPlantJoy: "Prvá rastlina je doma", tenPlantsJoy: "Tvoja zbierka krásne rastie", pieces: "ks",
});
Object.assign(FORM_TEXT.en, {
  relatedPlant: "Belongs to plant", noPlant: "No plant", relatedCategory: "Belongs to category", noCategory: "No category", plantStory: "Plant story", noPlantStory: "No moments here yet.", saved: "Saved", firstPlantJoy: "First plant is home", tenPlantsJoy: "Your collection is growing beautifully", pieces: "pcs",
});
Object.assign(FORM_TEXT.pl, {
  relatedPlant: "Przypisz do rośliny", noPlant: "Bez przypisania", relatedCategory: "Przypisz do kategorii", noCategory: "Bez kategorii", plantStory: "Historia rośliny", noPlantStory: "Nie ma jeszcze żadnych momentów.", saved: "Zapisano", firstPlantJoy: "Pierwsza roślina jest w domu", tenPlantsJoy: "Twoja kolekcja pięknie rośnie", pieces: "szt.",
});

let storageWrite = Promise.resolve();
let storageErrorShown = false;

const state = {
  view: "plants",
  category: "all",
  search: "",
  addOpen: false,
  editing: null,
  detail: null,
  detailMode: "view",
  viewer: null,
  viewerIndex: 0,
  touchX: 0,
  zoomScale: 1,
  pinchDistance: 0,
  pinchStartScale: 1,
  isPinching: false,
  suppressViewerTap: false,
  lastViewerTap: 0,
  viewerLongPressTimer: 0,
  viewerLongPressFired: false,
  unlocked: false,
  momentSlideTimer: null,
  lastEditingKey: "",
  backGuardReady: false,
  wizardOpen: false,
  wizardStep: 0,
  license: null,
  deviceId: "",
  data: structuredClone(defaults),
};

const $ = (selector) => document.querySelector(selector);
const els = {
  title: $("#appTitle"),
  search: $("#searchInput"),
  kicker: $("#sectionKicker"),
  sectionTitle: $("#sectionTitle"),
  categoryStrip: $("#categoryStrip"),
  editPanel: $("#editPanel"),
  cardGrid: $("#cardGrid"),
  albumGrid: $("#albumGrid"),
  customerList: $("#customerList"),
  momentList: $("#momentList"),
  settingsPanel: $("#settingsPanel"),
  empty: $("#emptyState"),
  quickAdd: $("#quickAdd"),
  addSheet: $("#addSheet"),
  detailSheet: $("#detailSheet"),
  detailContent: $("#detailContent"),
  viewer: $("#viewer"),
  viewerImage: $("#viewerImage"),
  viewerCaption: $("#viewerCaption"),
  lockScreen: $("#lockScreen"),
  lockDeviceId: $("#lockDeviceId"),
  lockForm: $("#unlockForm"),
  lockInput: $("#unlockCodeInput"),
  lockError: $("#lockError"),
  copyDeviceId: $("#copyDeviceId"),
  licenseNote: $("#licenseNote"),
  wizard: $("#wizard"),
  wizardContent: $("#wizardContent"),
};

function clone(value) {
  return typeof structuredClone === "function" ? structuredClone(value) : JSON.parse(JSON.stringify(value));
}

function esc(value = "") {
  return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

function norm(value = "") {
  return String(value).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function normalizeLicenseValue(value = "") {
  return String(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/gi, "-")
    .replace(/^-+|-+$/g, "")
    .toUpperCase();
}

function base32(bytes, length = 8) {
  let out = "";
  for (let i = 0; i < length; i += 1) out += CODE_ALPHABET[bytes[i] % CODE_ALPHABET.length];
  return out;
}

function randomCode(length = 8) {
  const bytes = new Uint8Array(length);
  crypto.getRandomValues(bytes);
  return base32(bytes, length);
}

function getDeviceId() {
  let id = localStorage.getItem(DEVICE_KEY);
  if (!id) {
    id = `${randomCode(4)}-${randomCode(4)}`;
    localStorage.setItem(DEVICE_KEY, id);
  }
  return normalizeLicenseValue(id);
}

async function hmacBytes(message) {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(UNLOCK_SECRET),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(message));
  return new Uint8Array(signature);
}

async function makeUnlockCode(owner, deviceId) {
  const safeOwner = normalizeLicenseValue(owner);
  const safeDevice = normalizeLicenseValue(deviceId);
  const signature = await hmacBytes(`${UNLOCK_APP_ID}|${safeOwner}|${safeDevice}`);
  return `${safeOwner}-${safeDevice}-${base32(signature, 8)}`;
}

async function verifyUnlockCode(code, deviceId) {
  const safeCode = normalizeLicenseValue(code);
  const safeDevice = normalizeLicenseValue(deviceId);
  const parts = safeCode.split("-").filter(Boolean);
  const check = parts.pop() || "";
  const body = parts.join("-");
  if (!check || !body.endsWith(safeDevice)) return null;
  const owner = body.slice(0, Math.max(0, body.length - safeDevice.length)).replace(/-+$/g, "");
  if (!owner) return null;
  const expected = await makeUnlockCode(owner, safeDevice);
  if (expected !== safeCode) return null;
  return { owner, deviceId: safeDevice, unlockedAt: new Date().toISOString() };
}

function readLicense() {
  try {
    const license = JSON.parse(localStorage.getItem(LICENSE_KEY) || "null");
    return license?.deviceId === state.deviceId && license?.owner ? license : null;
  } catch {
    return null;
  }
}

function writeLicense(license) {
  localStorage.setItem(LICENSE_KEY, JSON.stringify(license));
}

async function copyText(text, fallbackLabel = "Copy this text:") {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    prompt(fallbackLabel, text);
    return false;
  }
}

function renderLock() {
  document.body.dataset.locked = state.unlocked ? "false" : "true";
  els.lockScreen.hidden = state.unlocked;
  if (!state.unlocked) {
    els.lockDeviceId.textContent = state.deviceId;
    els.lockError.hidden = true;
  }
  if (els.licenseNote) {
    els.licenseNote.hidden = !state.license?.owner;
    els.licenseNote.textContent = state.license?.owner ? `Unlocked for: ${state.license.owner}` : "";
  }
}

function t(key) {
  const lang = state.data?.settings?.language || "en";
  return TEXT[lang]?.[key] || TEXT.en[key] || key;
}

function ft(key, values = {}) {
  const lang = state.data?.settings?.language || "en";
  const raw = FORM_TEXT[lang]?.[key] || FORM_TEXT.en[key] || key;
  return String(raw).replace(/\{(\w+)\}/g, (_, name) => values[name] ?? "");
}

const WIZARD_TEXT = {
  cs: {
    runWizard: "Spustit průvodce znovu", welcome: "Vítej", intro: "Nastav si sbírku tak, aby seděla tomu, co opravdu pěstuješ.", next: "Pokračovat", back: "Zpět", finish: "Hotovo",
    languageTitle: "Jazyk a měna", nameTitle: "Název appky", nameHint: "Tento název uvidíš v hlavičce aplikace.", lookTitle: "Vzhled", sectionsTitle: "Co chceš používat", startTitle: "Můžeš začít", startText: "Přidej první rostlinu nebo si vytvoř první kategorii.", addPlant: "Přidat první rostlinu", createCategory: "Vytvořit kategorii",
  },
  sk: {
    runWizard: "Spustiť sprievodcu znova", welcome: "Vitaj", intro: "Nastav si zbierku tak, aby sedela tomu, čo naozaj pestuješ.", next: "Pokračovať", back: "Späť", finish: "Hotovo",
    languageTitle: "Jazyk a mena", nameTitle: "Názov appky", nameHint: "Tento názov uvidíš v hlavičke aplikácie.", lookTitle: "Vzhľad", sectionsTitle: "Čo chceš používať", startTitle: "Môžeš začať", startText: "Pridaj prvú rastlinu alebo si vytvor prvú kategóriu.", addPlant: "Pridať prvú rastlinu", createCategory: "Vytvoriť kategóriu",
  },
  en: {
    runWizard: "Run welcome guide again", welcome: "Welcome", intro: "Set up your collection around what you actually grow.", next: "Continue", back: "Back", finish: "Done",
    languageTitle: "Language and currency", nameTitle: "App name", nameHint: "This name appears in the app header.", lookTitle: "Look and feel", sectionsTitle: "Choose what to use", startTitle: "Ready to start", startText: "Add your first plant or create your first category.", addPlant: "Add first plant", createCategory: "Create category",
  },
  pl: {
    runWizard: "Uruchom przewodnik ponownie", welcome: "Witaj", intro: "Ustaw kolekcję pod to, co naprawdę uprawiasz.", next: "Dalej", back: "Wstecz", finish: "Gotowe",
    languageTitle: "Język i waluta", nameTitle: "Nazwa aplikacji", nameHint: "Ta nazwa będzie widoczna w nagłówku aplikacji.", lookTitle: "Wygląd", sectionsTitle: "Co chcesz używać", startTitle: "Możesz zaczynać", startText: "Dodaj pierwszą roślinę albo utwórz pierwszą kategorię.", addPlant: "Dodaj pierwszą roślinę", createCategory: "Utwórz kategorię",
  },
};

Object.assign(WIZARD_TEXT.cs, { templatesTitle: "Rychlý start podle toho, co pěstuješ", templateIndoor: "Izbové rostliny", templateGarden: "Zahrada", templateColeus: "Coleusy", templateBegonia: "Begónie", templateCactus: "Kaktusy", templateCustom: "Vlastní", templateApplied: "Šablona připravena" });
Object.assign(WIZARD_TEXT.sk, { templatesTitle: "Rýchly štart podľa toho, čo pestuješ", templateIndoor: "Izbové rastliny", templateGarden: "Záhrada", templateColeus: "Coleusy", templateBegonia: "Begónie", templateCactus: "Kaktusy", templateCustom: "Vlastné", templateApplied: "Šablóna pripravená" });
Object.assign(WIZARD_TEXT.en, { templatesTitle: "Quick start for what you grow", templateIndoor: "Houseplants", templateGarden: "Garden", templateColeus: "Coleus", templateBegonia: "Begonias", templateCactus: "Cacti", templateCustom: "Custom", templateApplied: "Template ready" });
Object.assign(WIZARD_TEXT.pl, { templatesTitle: "Szybki start pod to, co uprawiasz", templateIndoor: "Rośliny domowe", templateGarden: "Ogród", templateColeus: "Koleusy", templateBegonia: "Begonie", templateCactus: "Kaktusy", templateCustom: "Własne", templateApplied: "Szablon gotowy" });

const CATEGORY_TEMPLATES = {
  indoor: { labels: ["Izbové rastliny", "Begónie", "Orchideje", "Fikusy"], icons: ["icon-03.png", "icon-01.png", "icon-09.png", "icon-24.png"] },
  garden: { labels: ["Záhrada", "Jiřiny", "Rajčata", "Bylinky"], icons: ["icon-15.png", "icon-25.png", "icon-21.png", "icon-19.png"] },
  coleus: { labels: ["Coleusy"], icons: ["icon-10.png"] },
  begonia: { labels: ["Begónie"], icons: ["icon-05.png"] },
  cactus: { labels: ["Kaktusy", "Sukulenty"], icons: ["icon-02.png", "icon-07.png"] },
  custom: { labels: ["Plants"], icons: ["icon-15.png"] },
};

function applyCategoryTemplate(key) {
  const preset = CATEGORY_TEMPLATES[key];
  if (!preset) return;
  state.data.settings.categories = cleanCategories(preset.labels).filter((category) => category !== SEEDLING_CATEGORY);
  state.data.settings.categoryIcons = state.data.settings.categoryIcons || {};
  preset.labels.forEach((label, index) => {
    const icon = preset.icons[index] ? `assets/category-icons-final/${preset.icons[index]}` : DEFAULT_CATEGORY_ICON;
    state.data.settings.categoryIcons[label] = icon;
  });
  state.category = state.data.settings.categories[0] || "all";
}
function wt(key) {
  const lang = state.data?.settings?.language || "en";
  return WIZARD_TEXT[lang]?.[key] || WIZARD_TEXT.en[key] || key;
}

function isImageIcon(value) {
  return CATEGORY_ICONS.includes(value);
}

function categoryIcon(category) {
  const key = category === "all" ? ALL_CATEGORY_KEY : category;
  const saved = state.data.settings.categoryIcons?.[key] || (category === "all" ? state.data.settings.categoryIcons?.all : null);
  if (category === "all" && saved === NO_ICON) return "";
  if (isImageIcon(saved)) return saved;
  if (category === "all") return ALL_ICON;
  return category === SEEDLING_CATEGORY ? SEEDLING_ICON : DEFAULT_CATEGORY_ICON;
}

function iconMarkup(src, label = "", className = "cat-icon") {
  return `<span class="${className}"><img src="${esc(src)}" alt="${esc(label)}"></span>`;
}

function categoryLabel(category) {
  const label = category === "all" ? t("all") : category;
  const icon = categoryIcon(category);
  return `${icon ? `<span class="cat-icon"><img src="${esc(icon)}" alt="${esc(label)}"></span>` : ""}<span>${esc(label)}</span>`;
}

function plantTag(item) {
  if (item.seedling) return esc(t("seedlings"));
  const label = item.category || ft("plantFallback");
  return esc(label);
}

function normalizeHex(value, fallback = "#53cb7f") {
  const hex = String(value || "").trim();
  return /^#[0-9a-f]{6}$/i.test(hex) ? hex : fallback;
}

function hexToRgb(hex) {
  const safe = normalizeHex(hex).slice(1);
  return {
    r: parseInt(safe.slice(0, 2), 16),
    g: parseInt(safe.slice(2, 4), 16),
    b: parseInt(safe.slice(4, 6), 16),
  };
}

function applyTheme(settings = state.data.settings) {
  const theme = settings.theme || "forest";
  document.body.dataset.theme = theme;
  document.body.dataset.mode = settings.themeMode || "dark";
  if (theme === "custom") {
    const color = normalizeHex(settings.customColor);
    const { r, g, b } = hexToRgb(color);
    document.body.style.setProperty("--green", color);
    document.body.style.setProperty("--green2", `rgb(${Math.min(255, r + 44)} ${Math.min(255, g + 38)} ${Math.min(255, b + 38)})`);
    document.body.style.setProperty("--theme-glow", `rgba(${r},${g},${b},.42)`);
    document.body.style.setProperty("--theme-soft", `rgba(${Math.min(255, r + 44)},${Math.min(255, g + 38)},${Math.min(255, b + 38)},.18)`);
  } else {
    ["--green", "--green2", "--theme-glow", "--theme-soft"].forEach((name) => document.body.style.removeProperty(name));
  }
}

function uid(prefix = "id") {
  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function formatPrice(value) {
  const n = Number(String(value || "").replace(",", "."));
  if (!Number.isFinite(n) || n <= 0) return "";
  const currency = CURRENCIES[state.data?.settings?.currency] || CURRENCIES.EUR;
  return `${Math.round(n)} ${currency.symbol}`;
}

function currencyLabel() {
  return (CURRENCIES[state.data?.settings?.currency] || CURRENCIES.EUR).label;
}

function initials(name = "") {
  const parts = String(name).trim().split(/\s+/).filter(Boolean);
  return ((parts[0]?.[0] || "") + (parts[1]?.[0] || parts[0]?.[1] || "")).toUpperCase();
}

function photo(src, name) {
  return src ? `<img src="${esc(src)}" alt="${esc(name)}">` : `<span class="placeholder">${esc(initials(name))}</span>`;
}

function openDb() {
  return new Promise((resolve, reject) => {
    if (!window.indexedDB) return reject(new Error("IndexedDB is not available."));
    const request = indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = () => {
      if (!request.result.objectStoreNames.contains(DB_STORE)) request.result.createObjectStore(DB_STORE);
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error || new Error("Database cannot be opened."));
  });
}

async function readStoredState() {
  const db = await openDb();
  try {
    return await new Promise((resolve, reject) => {
      const request = db.transaction(DB_STORE, "readonly").objectStore(DB_STORE).get("app");
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error || new Error("Data cannot be loaded."));
    });
  } finally {
    db.close();
  }
}

async function writeStoredState(data) {
  const db = await openDb();
  try {
    await new Promise((resolve, reject) => {
      const tx = db.transaction(DB_STORE, "readwrite");
      tx.objectStore(DB_STORE).put(data, "app");
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error || new Error("Data cannot be saved."));
      tx.onabort = () => reject(tx.error || new Error("Saving was interrupted."));
    });
  } finally {
    db.close();
  }
}

function normalizeData(data) {
  const merged = {
    settings: { ...defaults.settings, ...(data?.settings || {}) },
    plants: Array.isArray(data?.plants) ? data.plants : defaults.plants,
    albums: Array.isArray(data?.albums) ? data.albums : [],
    moments: Array.isArray(data?.moments) ? data.moments : [],
    customers: Array.isArray(data?.customers) ? data.customers : [],
  };
  if (merged.settings.title === "Moje rostliny") merged.settings.title = "My Plant Collection";
  if (String(merged.settings.subtitle || "").includes("Soukrom")) merged.settings.subtitle = "Private collection";
  merged.settings.categories = cleanCategories(merged.settings.categories);
  merged.settings.language = ["cs", "sk", "en", "pl"].includes(merged.settings.language) ? merged.settings.language : "cs";
  merged.settings.themeMode = ["light", "dark"].includes(merged.settings.themeMode) ? merged.settings.themeMode : "dark";
  merged.settings.currency = CURRENCIES[merged.settings.currency] ? merged.settings.currency : "EUR";
  merged.settings.customColor = normalizeHex(merged.settings.customColor);
  merged.settings.categoryIcons = typeof merged.settings.categoryIcons === "object" && merged.settings.categoryIcons ? merged.settings.categoryIcons : {};
  merged.settings.showGallery = merged.settings.showGallery !== false;
  merged.settings.showMoments = merged.settings.showMoments !== false;
  merged.settings.showSeedlings = merged.settings.showSeedlings !== false;
  merged.settings.showAllCategory = merged.settings.showAllCategory !== false;
  merged.settings.categories = merged.settings.categories.filter((category) => category !== SEEDLING_CATEGORY);
  merged.plants = merged.plants.filter((item) => item.id !== "demo-1").map((item) => ({
    ...item,
    type: "plant",
    seedling: item.seedling === true || item.seed === true || item.category === SEEDLING_CATEGORY,
    category: item.category === SEEDLING_CATEGORY ? (merged.settings.categories[0] || "Plants") : item.category,
    photos: Array.isArray(item.photos) ? item.photos : [],
  }));
  merged.albums = merged.albums.map((item) => ({ ...item, type: "album", photos: Array.isArray(item.photos) ? item.photos : [] }));
  merged.moments = merged.moments.map((item) => ({ ...item, type: "moment", plantId: item.plantId || "", category: item.category || "", photos: Array.isArray(item.photos) ? item.photos : [] }));
  merged.customers = merged.customers.map((item) => ({ ...item, type: "customer", wants: Array.isArray(item.wants) ? item.wants : [], fees: Array.isArray(item.fees) ? item.fees : [] }));
  return merged;
}

async function hydrate() {
  try {
    const stored = await readStoredState();
    state.data = normalizeData(stored || defaults);
    save();
    render();
  } catch (error) {
    showStorageError(error);
  }
}

function snapshot() {
  return clone(state.data);
}

function showStorageError(error) {
  console.error(error);
  if (storageErrorShown) return;
  storageErrorShown = true;
  alert(ft("storageError"));
  setTimeout(() => { storageErrorShown = false; }, 3000);
}

function save() {
  const data = snapshot();
  storageWrite = storageWrite.catch(() => {}).then(() => writeStoredState(data)).catch(showStorageError);
}

let toastTimer = null;
function showToast(message = ft("saved")) {
  let toast = document.querySelector("#toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 1900);
}

function cleanCategories(value) {
  const raw = Array.isArray(value) ? value : String(value || "").split(/[\n,;]/);
  const categories = [...new Set(raw.map((entry) => String(entry || "").trim()).filter(Boolean))];
  return categories.length ? categories : ["Plants"];
}

function activePlants() {
  let list = state.data.plants.filter((item) => !item.seedling);
  if (state.category !== "all") list = list.filter((item) => item.category === state.category);
  const needle = norm(state.search);
  if (needle) list = list.filter((item) => norm(item.name).includes(needle));
  return [...list].sort((a, b) => a.name.localeCompare(b.name, "cs"));
}

function activeSeedlings() {
  const needle = norm(state.search);
  let list = state.data.plants.filter((item) => item.seedling);
  if (needle) list = list.filter((item) => norm(item.name).includes(needle));
  return [...list].sort((a, b) => a.name.localeCompare(b.name, "cs"));
}

function activeAlbums() {
  const needle = norm(state.search);
  const list = needle ? state.data.albums.filter((item) => norm(item.name).includes(needle)) : state.data.albums;
  return [...list].sort((a, b) => a.name.localeCompare(b.name, "cs"));
}

function activeCustomers() {
  const needle = norm(state.search);
  const list = needle ? state.data.customers.filter((item) => norm(item.name).includes(needle)) : state.data.customers;
  return [...list].sort((a, b) => a.name.localeCompare(b.name, "cs"));
}

function categoryOptions(selected = "") {
  return state.data.settings.categories.map((category) => `<option value="${esc(category)}" ${category === selected ? "selected" : ""}>${esc(category)}</option>`).join("");
}

function photoManager(item) {
  if (!item?.photos?.length) return "";
  return `<div class="photo-manager">
    <p>${item.type === "album" ? ft("photosInAlbum") : ft("photosInPlant")}</p>
    <div class="photo-sort">
      ${item.photos.map((src, index) => `<div class="photo-tile" data-photo-index="${index}">
        <img src="${esc(src)}" alt="${esc(item.name)} ${index + 1}">
        ${index === 0 ? `<span class="photo-main-label">${esc(ft("mainPhoto"))}</span>` : `<button type="button" class="photo-main-button" data-photo-main="${index}">${esc(ft("mainPhoto"))}</button>`}
        <button type="button" class="photo-delete-button" data-photo-delete="${index}" aria-label="${esc(ft("deletePhoto"))}">&times;</button>
      </div>`).join("")}
    </div>
  </div>`;
}

function categoryForm(category = "") {
  const original = category || "";
  const isAll = original === "all";
  const currentIcon = original ? categoryIcon(original) : DEFAULT_CATEGORY_ICON;
  const displayName = isAll ? t("all") : original;
  const noIconChoice = isAll ? `<label class="icon-choice no-icon"><input type="radio" name="categoryIcon" value="${NO_ICON}" ${currentIcon === "" ? "checked" : ""}><span>Bez ikonky</span></label>` : "";
  const nameField = isAll
    ? `<label>${esc(t("categoryName"))}<input value="${esc(displayName)}" autocomplete="off" readonly></label><input type="hidden" name="name" value="all">`
    : `<label>${esc(t("categoryName"))}<input name="name" value="${esc(original)}" autocomplete="off" required></label>`;
  return `<form id="editForm" class="edit-card" data-kind="category" data-original="${esc(original)}">
    <div class="edit-head"><h3>${esc(original ? t("editCategory") : t("newCategory"))}</h3><button type="button" class="soft-close" data-cancel-edit>&times;</button></div>
    ${nameField}
    <fieldset class="icon-choice-grid">
      <legend>${esc(t("categoryEmoji"))}</legend>
      ${noIconChoice}${CATEGORY_ICONS.map((icon) => `<label class="icon-choice">
        <input type="radio" name="categoryIcon" value="${esc(icon)}" ${icon === currentIcon ? "checked" : ""}>
        <span><img src="${esc(icon)}" alt=""></span>
      </label>`).join("")}
    </fieldset>
    <button class="save-pill" type="submit">${esc(ft("save"))}</button>
    ${original && !isAll ? `<button type="button" class="delete-bottom" data-delete-category="${esc(original)}">${esc(t("deleteCategory"))}</button>` : ""}
  </form>`;
}

function plantForm(item = null, seedling = false) {
  const isSeedling = seedling || item?.seedling === true;
  const title = item ? ft("editPlant") : isSeedling ? t("newSeedling") : t("newPlant");
  const category = item?.category || state.data.settings.categories[0] || "Plants";
  return `<form id="editForm" class="edit-card" data-kind="plant" data-id="${esc(item?.id || "")}">
    <div class="edit-head"><h3>${esc(title)}</h3><button type="button" class="soft-close" data-cancel-edit>&times;</button></div>
    <label>${esc(ft("name"))}<input name="name" value="${esc(item?.name || "")}" autocomplete="off" required></label>
    <input type="hidden" name="seedling" value="${isSeedling ? "1" : "0"}">
    ${isSeedling ? "" : `<label>${esc(ft("category"))}<select name="category">${categoryOptions(category)}</select></label>`}
    ${state.data.settings.showPrices ? `<label>${esc(ft("price"))}<input name="price" inputmode="decimal" value="${esc(item?.price || "")}" placeholder="${esc(ft("pricePlaceholder"))}"></label>` : ""}
    <label>${esc(ft("note"))}<textarea name="note" rows="3">${esc(item?.note || "")}</textarea></label>
    <label>${esc(ft("photos"))}<input name="photos" type="file" accept="image/*" multiple></label>
    <div class="photo-preview" data-photo-preview hidden></div>
    ${photoManager(item)}
    <button class="save-pill" type="submit">${esc(ft("save"))}</button>
    ${item ? `<button type="button" class="delete-bottom" data-delete-current>${esc(ft("deletePlant"))}</button>` : ""}
  </form>`;
}

function albumForm(item = null) {
  return `<form id="editForm" class="edit-card" data-kind="album" data-id="${esc(item?.id || "")}">
    <div class="edit-head"><h3>${item ? esc(ft("editAlbum")) : esc(t("newAlbum"))}</h3><button type="button" class="soft-close" data-cancel-edit>&times;</button></div>
    <label>${esc(ft("name"))}<input name="name" value="${esc(item?.name || "")}" autocomplete="off" required></label>
    <label>${esc(ft("note"))}<textarea name="note" rows="3">${esc(item?.note || "")}</textarea></label>
    <label>${esc(ft("photos"))}<input name="photos" type="file" accept="image/*" multiple></label>
    <div class="photo-preview" data-photo-preview hidden></div>
    ${photoManager(item)}
    <button class="save-pill" type="submit">${esc(ft("save"))}</button>
    ${item ? `<button type="button" class="delete-bottom" data-delete-current>${esc(ft("deleteAlbum"))}</button>` : ""}
  </form>`;
}

function customerForm(item = null) {
  const wants = new Map((item?.wants || []).map((want) => [want.id, want]));
  const feeRows = [...(item?.fees || []), { label: "", price: "" }];
  const plants = [...state.data.plants].sort((a, b) => a.name.localeCompare(b.name, state.data.settings.language || "en"));
  const selectedPlants = [...wants.keys()].map((id) => findPlant(id)).filter(Boolean);
  const wantedRows = selectedPlants.map((plant) => customerWantedRow(plant, wants.get(plant.id)?.price ?? plant.price ?? "", wants.get(plant.id)?.qty ?? 1)).join("");
  const initialTotal = customerTotal({ wants: [...wants.values()], fees: item?.fees || [] });
  return `<form id="editForm" class="edit-card" data-kind="customer" data-id="${esc(item?.id || "")}">
    <div class="edit-head"><h3>${item ? esc(ft("editCustomer")) : esc(t("newCustomer"))}</h3><button type="button" class="soft-close" data-cancel-edit>&times;</button></div>
    <label>${esc(ft("personName"))}<input name="name" value="${esc(item?.name || "")}" autocomplete="off" required></label>
    <label>${esc(ft("contact"))}<input name="contact" value="${esc(item?.contact || "")}" autocomplete="off" placeholder="${esc(ft("contactPlaceholder"))}"></label>
    <label>${esc(ft("note"))}<textarea name="note" rows="3">${esc(item?.note || "")}</textarea></label>
    <fieldset class="choice-box">
      <legend>${esc(ft("addPlant"))}</legend>
      ${plants.length ? `<input name="plantPickerSearch" class="plant-picker-search" autocomplete="off" placeholder="${esc(ft("choosePlant"))}">` + `<div class="plant-picker-list" data-plant-picker-list>${plants.map((plant) => `<button type="button" value="${esc(plant.id)}" data-plant-option="${esc(plant.id)}" data-search="${esc(norm(`${plant.name} ${plant.category || ""} ${plant.seedling ? t("seedlings") : ""}`))}">${plant.seedling ? `${esc(t("seedlings"))} · ` : ""}${esc(plant.name)}${plant.category ? ` · ${esc(plant.category)}` : ""}</button>`).join("")}</div>` + `<div class="selected-title">${esc(ft("selectedPlants"))}</div>
      <div class="wanted-list" data-wanted-list>${wantedRows || `<p class="muted">${esc(ft("noSelectedPlants"))}</p>`}</div>` : `<p class="muted">${esc(ft("addPlantsFirst"))}</p>`}
    </fieldset>
    ${state.data.settings.showPrices ? `<fieldset class="choice-box">
      <legend>${esc(ft("extraFees"))}</legend>
      ${feeRows.map((fee, index) => `<div class="fee-row">
        <input name="fee-label-${index}" value="${esc(fee.label || "")}" placeholder="${esc(ft("feePlaceholder"))}">
        <input name="fee-price-${index}" inputmode="decimal" value="${esc(fee.price || "")}" placeholder="${esc(currencyLabel())}">
      </div>`).join("")}
    </fieldset>` : ""}
    ${state.data.settings.showPrices ? `<div class="customer-total"><span>${esc(ft("total"))}</span><strong data-customer-total>${esc(formatPrice(initialTotal))}</strong></div>` : ""}
    <button class="save-pill" type="submit">${esc(ft("save"))}</button>
    ${item ? `<button type="button" class="delete-bottom" data-delete-current>${esc(ft("deleteCustomer"))}</button>` : ""}
  </form>`;
}

function customerWantedRow(plant, price = "", qty = 1) {
  const safeQty = Math.max(1, Number(qty || 1) || 1);
  return `<div class="wanted-row selected-want" data-want-id="${esc(plant.id)}">
    <input type="hidden" name="want" value="${esc(plant.id)}">
    <span>${plant.seedling ? "\u{1F331} " : ""}${esc(plant.name)}</span>
    <label class="qty-field"><input name="want-qty-${esc(plant.id)}" inputmode="numeric" value="${esc(safeQty)}" aria-label="${esc(ft("pieces"))}"><em>${esc(ft("pieces"))}</em></label>
    ${state.data.settings.showPrices ? `<input name="want-price-${esc(plant.id)}" inputmode="decimal" value="${esc(price || "")}" placeholder="${esc(currencyLabel())}">` : ""}
    <button type="button" class="mini-remove" data-remove-want="${esc(plant.id)}" aria-label="${esc(ft("remove"))}">&times;</button>
  </div>`;
}
function selectedCustomerWantIds(form) {
  return new Set([...form.querySelectorAll("[data-want-id]")].map((row) => row.dataset.wantId));
}

function refreshPlantPicker(form) {
  const list = form.querySelector("[data-plant-picker-list]");
  const search = form.querySelector("[name='plantPickerSearch']");
  if (!list) return;
  const needle = norm(search?.value || "");
  const selected = selectedCustomerWantIds(form);
  let visibleCount = 0;
  [...list.querySelectorAll("[data-plant-option]")].forEach((button) => {
    const matches = !needle || button.dataset.search.includes(needle);
    const hidden = !matches || selected.has(button.dataset.plantOption);
    button.hidden = hidden;
    button.disabled = hidden;
    if (!hidden) visibleCount += 1;
  });
  list.classList.toggle("is-empty", visibleCount === 0);
}
function addCustomerWant(form, plantId) {
  const plant = findPlant(plantId);
  if (!plant || selectedCustomerWantIds(form).has(plant.id)) return;
  const list = form.querySelector("[data-wanted-list]");
  if (!list) return;
  list.querySelector(".muted")?.remove();
  list.insertAdjacentHTML("beforeend", customerWantedRow(plant, plant.price || ""));
  const search = form.querySelector("[name='plantPickerSearch']");
  if (search) search.value = "";
  refreshPlantPicker(form);
  updateCustomerTotal(form);
}

function numericValue(value) {
  const n = Number(String(value || "").replace(",", "."));
  return Number.isFinite(n) ? n : 0;
}

function updateCustomerTotal(form) {
  const totalEl = form.querySelector("[data-customer-total]");
  if (!totalEl) return;
  const plantTotal = [...form.querySelectorAll("[data-want-id]")].reduce((sum, row) => {
    const input = form.elements[`want-price-${row.dataset.wantId}`];
    const qty = form.elements[`want-qty-${row.dataset.wantId}`];
    return sum + (numericValue(input?.value) * Math.max(1, numericValue(qty?.value) || 1));
  }, 0);
  const feeTotal = [...form.querySelectorAll(".fee-row")].reduce((sum, row, index) => {
    const input = form.elements[`fee-price-${index}`];
    return sum + numericValue(input?.value);
  }, 0);
  totalEl.textContent = formatPrice(plantTotal + feeTotal) || formatPrice(0) || `0 ${currencyLabel()}`;
}
function editForm() {
  const editing = state.editing;
  if (!editing) return "";
  if (editing.kind === "plant") return plantForm(findPlant(editing.id));
  if (editing.kind === "album") return albumForm(findAlbum(editing.id));
  if (editing.kind === "customer") return customerForm(findCustomer(editing.id));
  if (editing.kind === "moment") return momentForm(findMoment(editing.id));
  if (editing.kind === "new-plant") return plantForm();
  if (editing.kind === "new-seedling") return plantForm(null, true);
  if (editing.kind === "new-album") return albumForm();
  if (editing.kind === "new-customer") return customerForm();
  if (editing.kind === "new-moment") return momentForm();
  if (editing.kind === "category") return categoryForm(editing.name);
  if (editing.kind === "new-category") return categoryForm();
  return "";
}


function findMoment(id) {
  return state.data.moments.find((item) => item.id === id) || null;
}

function plantOptions(selected = "") {
  const plants = [...(state.data.plants || [])].sort((a, b) => a.name.localeCompare(b.name, "cs"));
  return `<option value="">${esc(ft("noPlant"))}</option>${plants.map((item) => `<option value="${esc(item.id)}" ${selected === item.id ? "selected" : ""}>${esc(item.name)}</option>`).join("")}`;
}

function momentsForPlant(plantId) {
  return [...(state.data.moments || [])]
    .filter((item) => item.plantId === plantId)
    .sort((a, b) => String(b.date || b.createdAt || "").localeCompare(String(a.date || a.createdAt || "")));
}
function activeMoments() {
  const needle = norm(state.search);
  return [...(state.data.moments || [])]
    .filter((item) => !needle || norm((item.note || "") + " " + (item.date || "")).includes(needle))
    .sort((a, b) => String(b.date || b.createdAt || "").localeCompare(String(a.date || a.createdAt || "")));
}

function formatDate(value) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return String(value);
  return new Intl.DateTimeFormat(state.data.settings.language || "en", { day: "numeric", month: "short", year: "numeric" }).format(date);
}

function momentForm(item = null) {
  const dateValue = item?.date || new Date().toISOString().slice(0, 10);
  return `<form id="editForm" class="edit-card" data-kind="moment" data-id="${esc(item?.id || "")}">
    <div class="edit-head"><h3>${item ? esc(ft("editMoment")) : esc(t("newMoment"))}</h3><button type="button" class="soft-close" data-cancel-edit>&times;</button></div>
    <label>${esc(ft("momentDate"))}<input name="date" type="date" value="${esc(dateValue)}"></label>
        <label>${esc(ft("relatedPlant"))}<select name="plantId">${plantOptions(item?.plantId || "")}</select></label>
    <label>${esc(ft("relatedCategory"))}<select name="momentCategory">${categoryOptions(item?.category || "")}</select></label>
    <label>${esc(ft("momentText"))}<textarea name="note" rows="3" placeholder="${esc(ft("momentTextPlaceholder"))}">${esc(item?.note || "")}</textarea></label>
    <div class="moment-photo-actions">
      <label class="photo-pick-card"><input name="cameraPhoto" type="file" accept="image/*" capture="environment"><span class="photo-pick-icon">📷</span><strong>${esc(ft("capturePhoto"))}</strong></label>
      <label class="photo-pick-card"><input name="photos" type="file" accept="image/*" multiple><span class="photo-pick-icon">📁</span><strong>${esc(ft("choosePhoto"))}</strong></label>
    </div>
    <div class="photo-preview moment-preview" data-photo-preview hidden></div>
    ${photoManager(item)}
    <button class="save-pill" type="submit">${esc(ft("save"))}</button>
    ${item ? `<button type="button" class="delete-bottom" data-delete-current>${esc(ft("deleteMoment"))}</button>` : ""}
  </form>`;
}

function momentCard(item, compact = false) {
  const hasPhoto = item.photos?.[0];
  const linkedPlant = item.plantId ? findPlant(item.plantId) : null;
  const linkedCategory = item.category || "";
  return `<article class="moment-card ${compact ? "compact" : ""}">
    <button class="moment-photo" type="button" ${hasPhoto ? `data-open-moment-photo="${esc(item.id)}"` : `data-edit-moment="${esc(item.id)}"`}>${photo(hasPhoto, item.note || t("moments"))}</button>
    <div class="moment-body">
      <time>${esc(formatDate(item.date || item.createdAt))}</time>
      ${item.note ? `<p>${esc(item.note)}</p>` : `<p class="muted">${esc(t("newMoment"))}</p>`}
      ${linkedPlant ? `<span class="moment-plant-pill">${esc(linkedPlant.name)}</span>` : ""}${linkedCategory ? `<span class="moment-plant-pill">${esc(linkedCategory)}</span>` : ""}
    </div>
    <button class="card-edit" type="button" data-edit-moment="${esc(item.id)}">&#9998;</button>
  </article>`;
}

function sameMonthDay(a, b) {
  if (!a || !b) return false;
  const da = new Date(a);
  const db = new Date(b);
  if (Number.isNaN(da.getTime()) || Number.isNaN(db.getTime())) return false;
  return da.getMonth() === db.getMonth() && da.getDate() === db.getDate();
}

function momentHero(moments) {
  const withPhotos = moments.filter((item) => Array.isArray(item.photos) && item.photos.length);
  if (!withPhotos.length) return "";
  const today = new Date();
  const anniversary = withPhotos.find((item) => {
    const d = new Date(item.date || item.createdAt || "");
    return !Number.isNaN(d.getTime()) && d.getFullYear() < today.getFullYear() && sameMonthDay(d, today);
  });
  const seen = new Set();
  const orderedMoments = [anniversary, ...withPhotos].filter(Boolean).filter((item) => {
    if (seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });
  const slides = orderedMoments.flatMap((item) => (item.photos || []).map((src, photoIndex) => ({ item, src, photoIndex }))).slice(0, 10);
  return `<section class="moment-hero moment-hero-slideshow" data-moment-hero>
    ${slides.map((slide, index) => {
      const item = slide.item;
      const title = anniversary?.id === item.id ? ft("memoryToday") : ft("latestMoments");
      return `<article class="moment-hero-slide ${index === 0 ? "active" : ""}" data-moment-slide>
        <button type="button" class="moment-hero-photo" data-open-moment-photo="${esc(item.id)}" data-photo-index="${slide.photoIndex}">${photo(slide.src, item.note || t("moments"))}</button>
        <div class="moment-hero-body">
          <span>${esc(title)}</span>
          <h3>${esc(formatDate(item.date || item.createdAt))}</h3>
          ${item.note ? `<p>${esc(item.note)}</p>` : `<p>${esc(t("newMoment"))}</p>`}
          <button type="button" data-edit-moment="${esc(item.id)}">${esc(ft("edit"))}</button>
        </div>
      </article>`;
    }).join("")}
    ${slides.length > 1 ? `<div class="moment-hero-dots">${slides.map((_, index) => `<i class="${index === 0 ? "active" : ""}" data-moment-dot></i>`).join("")}</div>` : ""}
  </section>`;
}
function recentMomentsBlock() {
  if (!state.data.settings.showMoments) return "";
  const moments = activeMoments().slice(0, 3);
  if (!moments.length) return "";
  return `<section class="recent-moments"><div><span>${esc(ft("latestMoments"))}</span><button type="button" data-view-jump="moments">${esc(t("moments"))}</button></div><div class="recent-moment-row" data-moment-slideshow>${moments.map((item) => momentCard(item, true)).join("")}</div></section>`;
}
function findPlant(id) {
  return state.data.plants.find((item) => item.id === id) || null;
}

function findAlbum(id) {
  return state.data.albums.find((item) => item.id === id) || null;
}

function findCustomer(id) {
  return state.data.customers.find((item) => item.id === id) || null;
}

function plantCard(item) {
  return `<article class="plant-card" data-open-plant="${esc(item.id)}">
    <div class="plant-photo">${photo(item.photos?.[0], item.name)}</div>
    <div class="plant-body">
      <h3>${esc(item.name)}</h3>
      <div class="card-tags">
        <span>${plantTag(item)}</span>
        ${state.data.settings.showPrices && item.price ? `<b>${esc(formatPrice(item.price))}</b>` : ""}
      </div>
      ${item.note ? `<p class="card-note">${esc(item.note)}</p>` : `<p class="card-note"></p>`}
      <div class="card-actions">
        <button class="card-cta" type="button" data-open-plant="${esc(item.id)}">${esc(ft("detail"))}</button>
        <button class="card-edit" type="button" data-edit-plant="${esc(item.id)}">&#9998;</button>
      </div>
    </div>
  </article>`;
}

function albumCard(item) {
  return `<article class="album-card" data-open-album="${esc(item.id)}">
    <div class="album-cover">${photo(item.photos?.[0], item.name)}<span>${esc(ft("photoCount", { count: item.photos?.length || 0 }))}</span></div>
    <div class="album-body">
      <h3>${esc(item.name)}</h3>
      ${item.note ? `<p>${esc(item.note)}</p>` : ""}
      <div class="card-actions">
        <button class="card-cta" type="button" data-open-album="${esc(item.id)}">${esc(ft("open"))}</button>
        <button class="card-edit" type="button" data-edit-album="${esc(item.id)}">&#9998;</button>
      </div>
    </div>
  </article>`;
}

function customerTotal(customer) {
  const wants = customer.wants || [];
  const plants = new Map(state.data.plants.map((item) => [item.id, item]));
  const plantTotal = wants.reduce((sum, want) => sum + ((Number(want.price || plants.get(want.id)?.price || 0) || 0) * (Number(want.qty || 1) || 1)), 0);
  const feeTotal = (customer.fees || []).reduce((sum, fee) => sum + (Number(fee.price || 0) || 0), 0);
  return plantTotal + feeTotal;
}

function customerCard(item) {
  const plantNames = (item.wants || []).map((want) => { const plant = findPlant(want.id); return plant ? `${plant.name}${Number(want.qty || 1) > 1 ? ` × ${want.qty}` : ""}` : ""; }).filter(Boolean);
  return `<article class="customer-card">
    <div>
      <h3>${esc(item.name)}</h3>
      ${state.data.settings.showPrices ? `<b>${esc(formatPrice(customerTotal(item)))}</b>` : ""}
    </div>
    ${plantNames.length ? `<p>${plantNames.map(esc).join(", ")}</p>` : `<p class="muted">${esc(ft("noSelectedPlants"))}</p>`}
    ${item.contact ? `<p>${esc(item.contact)}</p>` : ""}
    <button class="card-edit" type="button" data-edit-customer="${esc(item.id)}">&#9998;</button>
  </article>`;
}

function plantDetail(item) {
  const thumbs = (item.photos || []).map((src, index) => `<button type="button" data-photo-open="${index}"><img src="${esc(src)}" alt="${esc(item.name)} ${index + 1}"></button>`).join("");
  const storyItems = momentsForPlant(item.id);
  const story = storyItems.map((moment) => {
    const src = moment.photos?.[0] || "";
    return `<article class="story-item">
      <button type="button" class="story-photo" ${src ? `data-open-moment-photo="${esc(moment.id)}"` : `data-edit-moment="${esc(moment.id)}"`}>${photo(src, moment.note || ft("plantStory"))}</button>
      <div><time>${esc(formatDate(moment.date || moment.createdAt))}</time>${moment.note ? `<p>${esc(moment.note)}</p>` : `<p class="muted">${esc(t("newMoment"))}</p>`}</div>
      <button class="story-edit" type="button" data-edit-moment="${esc(moment.id)}">&#9998;</button>
    </article>`;
  }).join("");
  return `<div class="detail-top"><button class="soft-close" type="button" data-detail-close>&times;</button></div>
    <button class="detail-hero profile-hero" type="button" data-photo-open="0">${photo(item.photos?.[0], item.name)}</button>
    <div class="detail-body plant-profile">
      <h2>${esc(item.name)}</h2>
      <div class="card-tags detail-tags"><span>${plantTag(item)}</span>${state.data.settings.showPrices && item.price ? `<b>${esc(formatPrice(item.price))}</b>` : ""}</div>
      ${item.note ? `<p class="detail-note">${esc(item.note)}</p>` : ""}
      ${thumbs ? `<div class="detail-thumbs">${thumbs}</div>` : ""}
      <section class="plant-story"><h3>${esc(ft("plantStory"))}</h3>${story || `<p class="story-empty">${esc(ft("noPlantStory"))}</p>`}</section>
      <button class="detail-edit-bottom" type="button" data-detail-edit>&#9998; ${esc(ft("edit"))}</button>
    </div>`;
}
function categoryEditorRow(category = "", icon = "") {
  const currentIcon = icon || categoryIcon(category || "Plants");
  return `<div class="category-editor-row" data-category-row>
    <select data-category-icon aria-label="${esc(t("categoryEmoji"))}">
      ${PLANT_EMOJIS.map((emoji) => `<option value="${esc(emoji)}" ${currentIcon === emoji ? "selected" : ""}>${esc(emoji)}</option>`).join("")}
    </select>
    <input name="categoryName" value="${esc(category)}" placeholder="${esc(t("categoryName"))}" autocomplete="off">
    <button type="button" data-remove-category aria-label="${esc(ft("remove"))}">&times;</button>
  </div>`;
}

function settingsView() {
  const theme = state.data.settings.theme || "forest";
  const mode = ["light", "dark"].includes(state.data.settings.themeMode) ? state.data.settings.themeMode : "dark";
  const language = state.data.settings.language || "en";
  const currency = CURRENCIES[state.data.settings.currency] ? state.data.settings.currency : "EUR";
  return `<form id="settingsForm" class="settings-card">
    <section class="settings-section primary">
      <h3>${esc(t("languageCurrency"))}</h3>
      <fieldset class="mode-picker">
        <legend>${t("language")}</legend>
        ${[["cs", "CZ"], ["sk", "SK"], ["en", "EN"], ["pl", "PL"]].map(([value, label]) => `<label class="mode-choice">
          <input type="radio" name="language" value="${value}" ${language === value ? "checked" : ""}>
          <span>${label}</span>
        </label>`).join("")}
      </fieldset>
      <fieldset class="mode-picker">
        <legend>${t("currency")}</legend>
        ${Object.entries(CURRENCIES).map(([value, item]) => `<label class="mode-choice">
          <input type="radio" name="currency" value="${value}" ${currency === value ? "checked" : ""}>
          <span>${item.label}</span>
        </label>`).join("")}
      </fieldset>
    </section>
    <section class="settings-section">
      <h3>${esc(t("appIdentity"))}</h3>
      <label>${t("appTitle")}<input name="title" value="${esc(state.data.settings.title)}" autocomplete="off"></label>
    </section>
    <details class="settings-section">
      <summary>${esc(t("appearance"))}</summary>
      <fieldset class="theme-picker">
        <legend>${t("colors")}</legend>
        ${THEMES.map(([value, label, color]) => `<label class="theme-choice">
          <input type="radio" name="theme" value="${value}" ${theme === value ? "checked" : ""}>
          <span style="--swatch:${color}"></span>
          <b>${esc(t(label))}</b>
        </label>`).join("")}
        <label class="custom-theme-row">
          <span>${t("customColor")}</span>
          <input name="customColor" type="color" value="${esc(normalizeHex(state.data.settings.customColor))}" aria-label="${t("customColor")}">
        </label>
        <input type="radio" name="theme" value="custom" ${theme === "custom" ? "checked" : ""} hidden>
      </fieldset>
      <fieldset class="mode-picker">
        <legend>${t("mode")}</legend>
        ${[["light", t("light")], ["dark", t("dark")]].map(([value, label]) => `<label class="mode-choice">
          <input type="radio" name="themeMode" value="${value}" ${mode === value ? "checked" : ""}>
          <span>${label}</span>
        </label>`).join("")}
      </fieldset>
    </details>
    <details class="settings-section">
      <summary>${esc(t("visibleSections"))}</summary>
      <label class="toggle-row"><span>${t("showPrices")}</span><input name="showPrices" type="checkbox" ${state.data.settings.showPrices ? "checked" : ""}></label>
      <label class="toggle-row"><span>${t("showGallery")}</span><input name="showGallery" type="checkbox" ${state.data.settings.showGallery ? "checked" : ""}></label>
      <label class="toggle-row"><span>${t("showMoments")}</span><input name="showMoments" type="checkbox" ${state.data.settings.showMoments ? "checked" : ""}></label>
      <label class="toggle-row"><span>${t("showSeedlings")}</span><input name="showSeedlings" type="checkbox" ${state.data.settings.showSeedlings ? "checked" : ""}></label>
      <label class="toggle-row"><span>${t("showCustomers")}</span><input name="showCustomers" type="checkbox" ${state.data.settings.showCustomers ? "checked" : ""}></label>
      <label class="toggle-row"><span>${t("showAllCategory")}</span><input name="showAllCategory" type="checkbox" ${state.data.settings.showAllCategory !== false ? "checked" : ""}></label>
    </details>
    <button class="soft-action full" type="button" data-open-wizard>${esc(wt("runWizard"))}</button>
    <button class="save-pill" type="submit">${t("saveSettings")}</button>
  </form>`;
}

function wizardProgress() {
  return `<div class="wizard-progress">${[0, 1, 2, 3].map((step) => `<i class="${state.wizardStep === step ? "active" : ""}"></i>`).join("")}</div>`;
}

function wizardNav(last = false) {
  return `<div class="wizard-nav">
    ${state.wizardStep > 0 ? `<button type="button" class="soft-action" data-wizard-back>${esc(wt("back"))}</button>` : `<span></span>`}
    <button type="button" class="save-pill" ${last ? "data-wizard-finish" : "data-wizard-next"}>${esc(last ? wt("finish") : wt("next"))}</button>
  </div>`;
}

function wizardView() {
  const s = state.data.settings;
  const language = s.language || "en";
  const currency = CURRENCIES[s.currency] ? s.currency : "EUR";
  const theme = s.theme || "forest";
  const mode = ["light", "dark"].includes(s.themeMode) ? s.themeMode : "dark";
  const title = esc(s.title || "My Plant Collection");
  if (state.wizardStep === 0) {
    return `<div class="wizard-head"><img src="assets/app-logo.png" alt=""><button type="button" data-wizard-close>&times;</button></div>
      ${wizardProgress()}<h2>${esc(wt("welcome"))}</h2><p>${esc(wt("intro"))}</p>
      <form id="wizardForm" class="wizard-form">
        <section><h3>${esc(wt("languageTitle"))}</h3><div class="wizard-pills">${[["cs", "CZ"], ["sk", "SK"], ["en", "EN"], ["pl", "PL"]].map(([value, label]) => `<label><input type="radio" name="wizardLanguage" value="${value}" ${language === value ? "checked" : ""}><span>${label}</span></label>`).join("")}</div><div class="wizard-pills">${Object.entries(CURRENCIES).map(([value, item]) => `<label><input type="radio" name="wizardCurrency" value="${value}" ${currency === value ? "checked" : ""}><span>${item.label}</span></label>`).join("")}</div></section>
        <section><h3>${esc(wt("nameTitle"))}</h3><input name="wizardTitle" value="${title}" autocomplete="off"><p>${esc(wt("nameHint"))}</p></section>
      </form>${wizardNav()}`;
  }
  if (state.wizardStep === 1) {
    return `<div class="wizard-head"><img src="assets/app-logo.png" alt=""><button type="button" data-wizard-close>&times;</button></div>
      ${wizardProgress()}<h2>${esc(wt("lookTitle"))}</h2>
      <form id="wizardForm" class="wizard-form">
        <div class="theme-picker wizard-theme-grid">${THEMES.map(([value, label, color]) => `<label class="theme-choice"><input type="radio" name="wizardTheme" value="${value}" ${theme === value ? "checked" : ""}><span style="--swatch:${color}"></span><b>${esc(t(label))}</b></label>`).join("")}</div>
        <div class="wizard-pills">${[["light", t("light")], ["dark", t("dark")]].map(([value, label]) => `<label><input type="radio" name="wizardMode" value="${value}" ${mode === value ? "checked" : ""}><span>${esc(label)}</span></label>`).join("")}</div>
      </form>${wizardNav()}`;
  }
  if (state.wizardStep === 2) {
    const toggles = [["showPrices", t("showPrices")], ["showGallery", t("showGallery")], ["showMoments", t("showMoments")], ["showSeedlings", t("showSeedlings")], ["showCustomers", t("showCustomers")]];
    return `<div class="wizard-head"><img src="assets/app-logo.png" alt=""><button type="button" data-wizard-close>&times;</button></div>
      ${wizardProgress()}<h2>${esc(wt("sectionsTitle"))}</h2>
      <form id="wizardForm" class="wizard-form wizard-toggles">${toggles.map(([name, label]) => `<label class="toggle-row"><span>${esc(label)}</span><input name="${name}" type="checkbox" ${s[name] ? "checked" : ""}></label>`).join("")}<section class="wizard-template-section"><h3>${esc(wt("templatesTitle"))}</h3><div class="wizard-template-grid">${[["indoor", wt("templateIndoor")], ["garden", wt("templateGarden")], ["coleus", wt("templateColeus")], ["begonia", wt("templateBegonia")], ["cactus", wt("templateCactus")], ["custom", wt("templateCustom")]].map(([key, label]) => `<button type="button" class="${s.categoryTemplate === key ? "active" : ""}" data-category-template="${key}">${esc(label)}</button>`).join("")}</div></section></form>${wizardNav()}`;
  }
  return `<div class="wizard-head"><img src="assets/app-logo.png" alt=""><button type="button" data-wizard-close>&times;</button></div>
    ${wizardProgress()}<h2>${esc(wt("startTitle"))}</h2><p>${esc(wt("startText"))}</p>
    <div class="wizard-start">
      <button type="button" class="save-pill" data-wizard-start="plant">${esc(wt("addPlant"))}</button>
      <button type="button" class="soft-action full" data-wizard-start="category">${esc(wt("createCategory"))}</button>
    </div>${wizardNav(true)}`;
}


function renderWizard() {
  if (!els.wizard || !els.wizardContent) return;
  els.wizard.hidden = !state.wizardOpen;
  els.wizardContent.innerHTML = state.wizardOpen ? wizardView() : "";
}

function applyWizardForm() {
  const form = document.querySelector("#wizardForm");
  if (!form) return;
  const s = state.data.settings;
  if (form.elements.wizardLanguage) {
    s.language = form.elements.wizardLanguage.value || s.language || "en";
    s.currency = CURRENCIES[form.elements.wizardCurrency.value] ? form.elements.wizardCurrency.value : s.currency;
    s.title = form.elements.wizardTitle.value.trim() || "My Plant Collection";
  }
  if (form.elements.wizardTheme) {
    s.theme = form.elements.wizardTheme.value || s.theme || "forest";
    s.themeMode = ["light", "dark"].includes(form.elements.wizardMode.value) ? form.elements.wizardMode.value : "dark";
  }
  ["showPrices", "showGallery", "showMoments", "showSeedlings", "showCustomers"].forEach((name) => {
    if (form.elements[name]) s[name] = form.elements[name].checked;
  });
  applyTheme();
}

function closeWizardOnly() {
  applyWizardForm();
  state.data.settings.onboardingDone = true;
  state.wizardOpen = false;
  state.wizardStep = 0;
  if (els.wizard) els.wizard.hidden = true;
  if (els.wizardContent) els.wizardContent.innerHTML = "";
  save();
}

function finishWizard() {
  closeWizardOnly();
  render();
}

function fitHeaderTitle() {
  if (!els.title) return;
  const length = String(els.title.textContent || "").trim().length;
  let size = "";
  if (length > 34) size = "1.02rem";
  else if (length > 27) size = "1.12rem";
  else if (length > 21) size = "1.26rem";
  else if (length > 15) size = "1.42rem";
  els.title.style.fontSize = size;
}
function renderCategories() {
  if (state.view !== "plants") {
    els.categoryStrip.innerHTML = "";
    return;
  }
  const buttons = state.data.settings.categories
    .map((category) => `<button type="button" class="${state.category === category ? "active" : ""}" data-category="${esc(category)}">${categoryLabel(category)}</button>`);
  if (state.data.settings.showAllCategory !== false) {
    buttons.push(`<button type="button" class="${state.category === "all" ? "active" : ""}" data-category="all">${categoryLabel("all")}</button>`);
  }
  els.categoryStrip.innerHTML = buttons.join("");
}

function emptyStateView() {
  const primaryKind = state.view === "gallery" ? "album" : state.view === "moments" ? "moment" : state.view === "seedlings" ? "seedling" : state.view === "customers" ? "customer" : "plant";
  const primaryLabel = state.view === "gallery" ? t("newAlbum") : state.view === "moments" ? t("newMoment") : state.view === "seedlings" ? t("newSeedling") : state.view === "customers" ? t("newCustomer") : t("emptyAddPlant");
  return `<div class="empty-card">
    <p class="empty-eyebrow">${esc(labelsForEmpty()[0])}</p>
    <h3>${esc(t("empty"))}</h3>
    <p>${esc(t("emptyHint"))}</p>
    <div class="empty-actions">
      <button type="button" data-empty-add="${esc(primaryKind)}">${esc(primaryLabel)}</button>
    </div>
  </div>`;
}

function labelsForEmpty() {
  const labels = { plants: t("plants"), seedlings: t("seedlings"), gallery: t("gallery"), moments: t("moments"), customers: t("customers") };
  return [labels[state.view] || t("plants")];
}

function quickAddKind() {
  if (state.view === "seedlings") return "seedling";
  if (state.view === "gallery") return "album";
  if (state.view === "moments") return "moment";
  if (state.view === "customers") return "customer";
  return "plant";
}

function quickAddLabel(kind = quickAddKind()) {
  if (kind === "seedling") return t("newSeedling");
  if (kind === "album") return t("newAlbum");
  if (kind === "moment") return t("newMoment");
  if (kind === "customer") return t("newCustomer");
  return t("emptyAddPlant");
}

function renderQuickAdd() {
  if (!els.quickAdd) return;
  const hidden = !!state.editing || state.addOpen || state.detail || state.view === "settings";
  const kind = quickAddKind();
  els.quickAdd.hidden = hidden;
  els.quickAdd.dataset.quickAdd = kind;
  els.quickAdd.innerHTML = "<span>+</span><strong>" + esc(quickAddLabel(kind)) + "</strong>";
}
function maybeScrollEditIntoView() {
  const key = state.editing ? `${state.editing.kind}:${state.editing.id || state.editing.name || "new"}` : "";
  if (!key) {
    state.lastEditingKey = "";
    return;
  }
  if (state.lastEditingKey === key) return;
  state.lastEditingKey = key;
  requestAnimationFrame(() => {
    if (!els.editPanel.hidden) els.editPanel.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}
function startMomentSlideshow() {
  if (state.momentSlideTimer) {
    clearInterval(state.momentSlideTimer);
    state.momentSlideTimer = null;
  }
  const hero = document.querySelector("[data-moment-hero]");
  const slides = [...document.querySelectorAll("[data-moment-slide]")];
  const dots = [...document.querySelectorAll("[data-moment-dot]")];
  if (!hero || slides.length < 2) return;
  let index = Math.max(0, slides.findIndex((slide) => slide.classList.contains("active")));
  const show = (next) => {
    index = (next + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => slide.classList.toggle("active", slideIndex === index));
    dots.forEach((dot, dotIndex) => dot.classList.toggle("active", dotIndex === index));
  };
  state.momentSlideTimer = setInterval(() => {
    if (!document.body.contains(hero)) {
      clearInterval(state.momentSlideTimer);
      state.momentSlideTimer = null;
      return;
    }
    show(index + 1);
  }, 2800);
}
function renderDetail() {
  const item = state.detail?.kind === "plant" ? findPlant(state.detail.id) : null;
  els.detailSheet.hidden = !item;
  els.detailContent.innerHTML = item ? plantDetail(item) : "";
}

function render() {
  renderLock();
  if (!state.unlocked) return;
  if (!state.data.settings.showGallery && state.view === "gallery") state.view = "plants";
  if (!state.data.settings.showMoments && state.view === "moments") state.view = "plants";
  if (!state.data.settings.showSeedlings && state.view === "seedlings") state.view = "plants";
  if (!state.data.settings.showCustomers && state.view === "customers") state.view = "plants";
  if (state.data.settings.showAllCategory === false && state.category === "all") state.category = state.data.settings.categories[0] || "all";
  if (state.category !== "all" && !state.data.settings.categories.includes(state.category)) state.category = state.data.settings.showAllCategory === false ? (state.data.settings.categories[0] || "all") : "all";
  document.body.dataset.view = state.view;
  els.title.textContent = state.data.settings.title || "My Plant Collection";
  fitHeaderTitle();
  els.search.placeholder = t("search");
  els.empty.innerHTML = emptyStateView();
  applyTheme();
  const labels = {
    plants: t("plants"),
    seedlings: t("seedlings"),
    gallery: t("gallery"),
    moments: t("moments"),
    customers: t("customers"),
    settings: t("settings"),
  };
  els.kicker.textContent = labels[state.view] || t("plants");
  els.sectionTitle.textContent = "";
  renderCategories();

  els.editPanel.hidden = !state.editing;
  els.editPanel.innerHTML = state.editing ? editForm() : "";
  maybeScrollEditIntoView();

  const plants = activePlants();
  const seedlings = activeSeedlings();
  const albums = activeAlbums();
  const customers = activeCustomers();
  const moments = activeMoments();
  els.cardGrid.hidden = state.view !== "plants" && state.view !== "seedlings";
  els.albumGrid.hidden = state.view !== "gallery";
  els.customerList.hidden = state.view !== "customers";
  els.momentList.hidden = state.view !== "moments";
  els.settingsPanel.hidden = state.view !== "settings";
  els.cardGrid.innerHTML = state.view === "plants" ? plants.map(plantCard).join("") : state.view === "seedlings" ? seedlings.map(plantCard).join("") : "";
  els.albumGrid.innerHTML = state.view === "gallery" ? albums.map(albumCard).join("") : "";
  els.customerList.innerHTML = state.view === "customers" ? customers.map(customerCard).join("") : "";
  els.momentList.innerHTML = state.view === "moments" ? momentHero(moments) + moments.map((item) => momentCard(item)).join("") : "";
  els.settingsPanel.innerHTML = state.view === "settings" ? settingsView() : "";

  document.querySelectorAll("[data-gallery-nav], [data-gallery-choice]").forEach((el) => { el.hidden = !state.data.settings.showGallery; });
  document.querySelectorAll("[data-moment-nav], [data-moment-choice]").forEach((el) => { el.hidden = !state.data.settings.showMoments; });
  document.querySelectorAll("[data-seedling-nav], [data-seedling-choice]").forEach((el) => { el.hidden = !state.data.settings.showSeedlings; });
  document.querySelectorAll("[data-customer-nav], [data-customer-choice]").forEach((el) => { el.hidden = !state.data.settings.showCustomers; });
  const visibleNav = 3 + (state.data.settings.showSeedlings ? 1 : 0) + (state.data.settings.showGallery ? 1 : 0) + (state.data.settings.showMoments ? 1 : 0) + (state.data.settings.showCustomers ? 1 : 0);
  document.querySelector("#bottomDock").style.setProperty("--dock-count", visibleNav);
  document.querySelector("[data-view='plants'] span:not(.dock-icon)").textContent = t("plants");
  document.querySelector("[data-view='seedlings'] span:not(.dock-icon)").textContent = t("seedlings");
  document.querySelector("[data-view='gallery'] span:not(.dock-icon)").textContent = t("gallery");
  document.querySelector("[data-view='moments'] span:not(.dock-icon)").textContent = t("moments");
  document.querySelector("[data-view='customers'] span:not(.dock-icon)").textContent = t("customers");
  document.querySelector("[data-view='settings'] span:not(.dock-icon)").textContent = t("settings");
  document.querySelector("[data-add-main] span:not(.dock-icon)").textContent = t("add");
  document.querySelector("[data-add-choice='plant'] strong").textContent = t("newPlant");
  document.querySelector("[data-add-choice='seedling'] strong").textContent = t("newSeedling");
  document.querySelector("[data-add-choice='album'] strong").textContent = t("newAlbum");
  document.querySelector("[data-add-choice='moment'] strong").textContent = t("newMoment");
  document.querySelector("[data-add-choice='customer'] strong").textContent = t("newCustomer");
  document.querySelector("[data-add-choice='category'] strong").textContent = t("newCategory");
  document.querySelectorAll("[data-view]").forEach((button) => button.classList.toggle("active", button.dataset.view === state.view));
  const emptyCount = state.view === "plants" ? plants.length : state.view === "seedlings" ? seedlings.length : state.view === "gallery" ? albums.length : state.view === "moments" ? moments.length : state.view === "customers" ? customers.length : 1;
  els.empty.hidden = emptyCount > 0 || !!state.editing;
  els.addSheet.hidden = !state.addOpen;
  renderWizard();
  renderQuickAdd();
  renderDetail();
  startMomentSlideshow();
}

function renderSelectedPhotoPreview(form) {
  const preview = form?.querySelector("[data-photo-preview]");
  if (!preview) return;
  const files = [...(form.elements.cameraPhoto?.files || []), ...(form.elements.photos?.files || [])];
  preview.hidden = files.length === 0;
  preview.innerHTML = files.map((file) => `<span><img src="${esc(URL.createObjectURL(file))}" alt=""><b>${esc(file.name)}</b></span>`).join("");
}
function readFiles(input) {
  const files = [...(input?.files || [])];
  return Promise.all(files.map(readPhoto));
}

function readPhoto(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => compressPhoto(String(reader.result || ""), resolve);
    reader.readAsDataURL(file);
  });
}

function compressPhoto(src, resolve) {
  const img = new Image();
  img.onload = () => {
    const max = 2600;
    const scale = Math.min(1, max / Math.max(img.width, img.height));
    const canvas = document.createElement("canvas");
    canvas.width = Math.max(1, Math.round(img.width * scale));
    canvas.height = Math.max(1, Math.round(img.height * scale));
    canvas.getContext("2d").drawImage(img, 0, 0, canvas.width, canvas.height);
    resolve(canvas.toDataURL("image/jpeg", 0.92));
  };
  img.onerror = () => resolve(src);
  img.src = src;
}

async function submitEdit(form) {
  let saveMessage = ft("saved");
  const kind = form.dataset.kind;
  const id = form.dataset.id || "";
  const fields = form.elements;
  const name = fields.name?.value.trim();
  if (kind !== "moment" && !name) {
    fields.name?.focus();
    alert(ft("fillName"));
    return;
  }
  if (kind === "category") {
    const original = form.dataset.original || "";
    const categories = cleanCategories([...(state.data.settings.categories || []), name]).filter((category) => category !== SEEDLING_CATEGORY);
    state.data.settings.categoryIcons = state.data.settings.categoryIcons || {};
    if (original === "all") {
      state.data.settings.categoryIcons[ALL_CATEGORY_KEY] = fields.categoryIcon?.value || ALL_ICON;
      state.category = "all";
      state.view = "plants";
      state.editing = null;
      save();
      render();
      return;
    }
    if (original && original !== name) {
      state.data.plants.forEach((item) => {
        if (!item.seedling && item.category === original) item.category = name;
      });
      delete state.data.settings.categoryIcons[original];
    }
    state.data.settings.categories = original ? categories.map((category) => category === original ? name : category).filter((category, index, list) => list.indexOf(category) === index) : categories;
    state.data.settings.categoryIcons[name] = fields.categoryIcon?.value || DEFAULT_CATEGORY_ICON;
    state.category = name;
    state.view = "plants";
    state.editing = null;
    save();
    render();
    return;
  }

  const photos = await readFiles(fields.photos);
  const extraPhotos = kind === "moment" ? await readFiles(fields.cameraPhoto) : [];

  if (kind === "plant") {
    let item = findPlant(id);
    const wasNewPlant = !item;
    if (!item) {
      item = { id: uid("plant"), type: "plant", photos: [] };
      state.data.plants.push(item);
    }
    const isSeedling = fields.seedling?.value === "1";
    item.name = name;
    item.seedling = isSeedling;
    item.category = isSeedling ? (item.category && item.category !== SEEDLING_CATEGORY ? item.category : state.data.settings.categories[0] || "Plants") : fields.category?.value || state.data.settings.categories[0] || "Plants";
    item.price = fields.price?.value.trim() || "";
    item.note = fields.note?.value.trim() || "";
    item.photos = [...(item.photos || []), ...photos];
    if (wasNewPlant && !isSeedling) {
      const count = state.data.plants.filter((plant) => !plant.seedling).length;
      if (count === 1) saveMessage = ft("firstPlantJoy");
      if (count === 10) saveMessage = ft("tenPlantsJoy");
    }
    state.view = isSeedling ? "seedlings" : "plants";
  }

  if (kind === "album") {
    let item = findAlbum(id);
    if (!item) {
      item = { id: uid("album"), type: "album", photos: [] };
      state.data.albums.push(item);
    }
    item.name = name;
    item.note = fields.note?.value.trim() || "";
    item.photos = [...(item.photos || []), ...photos];
    state.view = "gallery";
  }

  if (kind === "moment") {
    let item = findMoment(id);
    if (!item) {
      item = { id: uid("moment"), type: "moment", photos: [], createdAt: new Date().toISOString() };
      state.data.moments.push(item);
    }
    const allPhotos = [...extraPhotos, ...photos];
    const note = fields.note?.value.trim() || "";
    if (!note && !allPhotos.length && !(item.photos || []).length) {
      alert(ft("fillMoment"));
      return;
    }
    item.date = fields.date?.value || new Date().toISOString().slice(0, 10);
    item.plantId = fields.plantId?.value || "";
    item.category = fields.momentCategory?.value || "";
    item.note = note;
    item.photos = [...(item.photos || []), ...allPhotos];
    state.view = "moments";
  }

  if (kind === "customer") {
    let item = findCustomer(id);
    if (!item) {
      item = { id: uid("customer"), type: "customer", wants: [], fees: [] };
      state.data.customers.push(item);
    }
    item.name = name;
    item.contact = fields.contact?.value.trim() || "";
    item.note = fields.note?.value.trim() || "";
    item.wants = [...form.querySelectorAll("[data-want-id]")].map((row) => ({ id: row.dataset.wantId, qty: fields[`want-qty-${row.dataset.wantId}`]?.value.trim() || "1", price: fields[`want-price-${row.dataset.wantId}`]?.value.trim() || "" }));
    item.fees = [...form.querySelectorAll(".fee-row")].map((row, index) => ({ label: fields[`fee-label-${index}`]?.value.trim() || "", price: fields[`fee-price-${index}`]?.value.trim() || "" })).filter((fee) => fee.label || fee.price);
    state.view = "customers";
  }

  state.editing = null;
  state.detailMode = "view";
  save();
  render();
  showToast(saveMessage);
}

function submitSettings(form) {
  state.data.settings.title = form.elements.title.value.trim() || "My Plant Collection";
  state.data.settings.theme = form.elements.theme.value || "forest";
  state.data.settings.themeMode = ["light", "dark"].includes(form.elements.themeMode.value) ? form.elements.themeMode.value : "dark";
  state.data.settings.currency = CURRENCIES[form.elements.currency.value] ? form.elements.currency.value : "EUR";
  state.data.settings.customColor = normalizeHex(form.elements.customColor.value);
  state.data.settings.language = form.elements.language.value || "en";
  state.data.settings.showSeedlings = form.elements.showSeedlings.checked;
  state.data.settings.categories = cleanCategories(state.data.settings.categories).filter((category) => category !== SEEDLING_CATEGORY);
  if (!state.data.settings.categories.length) state.data.settings.categories = ["Plants"];
  state.data.settings.showPrices = form.elements.showPrices.checked;
  state.data.settings.showGallery = form.elements.showGallery.checked;
  state.data.settings.showMoments = form.elements.showMoments.checked;
  state.data.settings.showCustomers = form.elements.showCustomers.checked;
  state.data.settings.showAllCategory = form.elements.showAllCategory?.checked !== false;
  if (!state.data.settings.showGallery && state.view === "gallery") state.view = "plants";
  if (!state.data.settings.showSeedlings && state.view === "seedlings") state.view = "plants";
  if (!state.data.settings.showCustomers && state.view === "customers") state.view = "plants";
  if (state.data.settings.showAllCategory === false && state.category === "all") state.category = state.data.settings.categories[0] || "all";
  state.data.plants.forEach((plant) => {
    if (!state.data.settings.categories.includes(plant.category)) plant.category = state.data.settings.categories[0];
  });
  state.view = "plants";
  state.editing = null;
  state.addOpen = false;
  save();
  render();
  showToast(ft("saved"));
}

function currentEditItem() {
  if (!state.editing) return null;
  if (state.editing.kind === "plant") return findPlant(state.editing.id);
  if (state.editing.kind === "album") return findAlbum(state.editing.id);
  if (state.editing.kind === "moment") return findMoment(state.editing.id);
  return null;
}

function deletePhoto(index) {
  const item = currentEditItem();
  if (!item?.photos?.[index]) return;
  if (!confirm(ft("confirmDeletePhoto"))) return;
  item.photos.splice(index, 1);
  save();
  render();
}

function makePhotoMain(index) {
  const item = currentEditItem();
  if (!item?.photos?.[index] || index === 0) return;
  const [src] = item.photos.splice(index, 1);
  item.photos.unshift(src);
  save();
  render();
}

function deleteCategoryByName(name) {
  if (!name) return;
  const confirmed = confirm((ft("confirmDelete") || "Delete {name}?").replace("{name}", name));
  if (!confirmed) return;
  const remaining = (state.data.settings.categories || []).filter((category) => category !== name);
  state.data.settings.categories = remaining;
  if (state.data.settings.categoryIcons) delete state.data.settings.categoryIcons[name];
  const fallback = remaining[0] || "Plants";
  state.data.plants.forEach((item) => {
    if (!item.seedling && item.category === name) item.category = fallback;
  });
  state.category = remaining.includes(state.category) ? state.category : "all";
  state.editing = null;
  save();
  render();
}
function deleteCurrent() {
  if (!state.editing?.id) return;
  if (state.editing.kind === "plant") {
    const item = findPlant(state.editing.id);
    if (!item || !confirm(ft("confirmDelete", { name: item.name }))) return;
    state.data.plants = state.data.plants.filter((plant) => plant.id !== item.id);
    state.data.customers.forEach((customer) => { customer.wants = (customer.wants || []).filter((want) => want.id !== item.id); });
  }
  if (state.editing.kind === "album") {
    const item = findAlbum(state.editing.id);
    if (!item || !confirm(ft("confirmDelete", { name: item.name }))) return;
    state.data.albums = state.data.albums.filter((album) => album.id !== item.id);
  }
  if (state.editing.kind === "moment") {
    const item = findMoment(state.editing.id);
    if (!item || !confirm(ft("confirmDelete", { name: item.note || t("moments") }))) return;
    state.data.moments = state.data.moments.filter((moment) => moment.id !== item.id);
  }
  if (state.editing.kind === "customer") {
    const item = findCustomer(state.editing.id);
    if (!item || !confirm(ft("confirmDelete", { name: item.name }))) return;
    state.data.customers = state.data.customers.filter((customer) => customer.id !== item.id);
  }
  state.editing = null;
  save();
  render();
}

function openAdd(kind) {
  if (kind === "customer" && !state.data.settings.showCustomers) return;
  if (kind === "album" && !state.data.settings.showGallery) return;
  if (kind === "moment" && !state.data.settings.showMoments) return;
  if (kind === "seedling" && !state.data.settings.showSeedlings) return;
  state.addOpen = false;
  state.detail = null;
  state.editing = { kind: kind === "seedling" ? "new-seedling" : kind === "plant" ? "new-plant" : kind === "album" ? "new-album" : kind === "moment" ? "new-moment" : kind === "category" ? "new-category" : "new-customer" };
  state.view = kind === "seedling" ? "seedlings" : kind === "album" ? "gallery" : kind === "moment" ? "moments" : kind === "customer" ? "customers" : "plants";
  render();
}

function openViewer(source, index = 0) {
  const item = source.kind === "plant" ? findPlant(source.id) : source.kind === "moment" ? findMoment(source.id) : findAlbum(source.id);
  if (!item?.photos?.length) return;
  state.viewer = source;
  state.viewerIndex = Math.max(0, Math.min(index, item.photos.length - 1));
  resetViewerZoom();
  updateViewer();
  els.viewer.hidden = false;
}

function viewerItem() {
  if (!state.viewer) return null;
  return state.viewer.kind === "plant" ? findPlant(state.viewer.id) : state.viewer.kind === "moment" ? findMoment(state.viewer.id) : findAlbum(state.viewer.id);
}

function updateViewer() {
  const item = viewerItem();
  if (!item?.photos?.length) return;
  els.viewerImage.src = item.photos[state.viewerIndex];
  els.viewerCaption.textContent = `${item.name} Â· ${state.viewerIndex + 1}/${item.photos.length}`;
}

function moveViewer(step) {
  const item = viewerItem();
  if (!item?.photos?.length) return;
  resetViewerZoom();
  state.viewerIndex = (state.viewerIndex + step + item.photos.length) % item.photos.length;
  updateViewer();
}

function closeViewer() {
  resetViewerZoom();
  state.viewer = null;
  els.viewer.hidden = true;
}

function applyViewerZoom() {
  els.viewerImage.style.transform = `scale(${state.zoomScale})`;
}

function resetViewerZoom() {
  clearViewerLongPress();
  state.zoomScale = 1;
  state.pinchDistance = 0;
  state.pinchStartScale = 1;
  state.isPinching = false;
  state.suppressViewerTap = false;
  applyViewerZoom();
}

function clearViewerLongPress() {
  if (state.viewerLongPressTimer) clearTimeout(state.viewerLongPressTimer);
  state.viewerLongPressTimer = 0;
}

function startViewerLongPress() {
  clearViewerLongPress();
  state.viewerLongPressFired = false;
  state.viewerLongPressTimer = setTimeout(() => {
    state.viewerLongPressFired = true;
    state.suppressViewerTap = true;
    shareViewerPhoto();
  }, 650);
}

function touchDistance(touches) {
  const dx = touches[0].clientX - touches[1].clientX;
  const dy = touches[0].clientY - touches[1].clientY;
  return Math.hypot(dx, dy);
}

function toggleViewerZoom() {
  state.zoomScale = state.zoomScale > 1.05 ? 1 : 2.5;
  applyViewerZoom();
}

function dataUrlToBlob(dataUrl) {
  const [head, body] = String(dataUrl).split(",");
  const mime = head.match(/data:([^;]+)/)?.[1] || "image/jpeg";
  const binary = atob(body || "");
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
  return new Blob([bytes], { type: mime });
}

function safeFileName(name = "rostlina") {
  return `${String(name || "rostlina").normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/gi, "-").replace(/^-+|-+$/g, "").toLowerCase() || "rostlina"}.jpg`;
}

async function shareViewerPhoto() {
  const item = viewerItem();
  const src = item?.photos?.[state.viewerIndex];
  if (!src) return;
  try {
    const blob = src.startsWith("data:") ? dataUrlToBlob(src) : await fetch(src).then((response) => response.blob());
    const file = new File([blob], safeFileName(`${item.name}-${state.viewerIndex + 1}`), { type: blob.type || "image/jpeg" });
    if (navigator.canShare?.({ files: [file] })) {
      await navigator.share({ title: item.name, files: [file] });
      return;
    }
  } catch (error) {
    console.warn(error);
  }
}

function openCategoryEditor(name) {
  if (!name) return;
  state.editing = { kind: "category", name };
  state.addOpen = false;
  state.detail = null;
  render();
}
function bind() {
  let categoryHoldTimer = null;
  let categoryHoldOpened = false;
  const clearCategoryHold = () => {
    if (categoryHoldTimer) clearTimeout(categoryHoldTimer);
    categoryHoldTimer = null;
  };

  els.copyDeviceId.addEventListener("click", async () => {
    await copyText(state.deviceId, "Copy device ID:");
    els.copyDeviceId.textContent = "ID copied";
    setTimeout(() => { els.copyDeviceId.textContent = "Copy ID"; }, 1400);
  });

  els.lockForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    els.lockError.hidden = true;
    const license = await verifyUnlockCode(els.lockInput.value, state.deviceId);
    if (!license) {
      els.lockError.hidden = false;
      els.lockInput.focus();
      return;
    }
    writeLicense(license);
    state.license = license;
    state.unlocked = true;
    renderLock();
    render();
    hydrate();
  });

  els.search.addEventListener("input", (event) => {
    state.search = event.target.value;
    render();
  });

  document.querySelectorAll("[data-view]").forEach((button) => {
    button.addEventListener("click", () => {
      state.view = button.dataset.view || "plants";
      state.editing = null;
      state.detail = null;
      state.addOpen = false;
      render();
    });
  });

  const quickAddClickHandler = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const kind = els.quickAdd?.dataset.quickAdd || quickAddKind();
    openAdd(kind);
  };
  els.quickAdd?.addEventListener("click", quickAddClickHandler);
  els.quickAdd?.addEventListener("pointerup", quickAddClickHandler);
  document.querySelector("[data-add-main]").addEventListener("click", () => {
    state.addOpen = true;
    state.editing = null;
    render();
  });

  document.addEventListener("pointerdown", (event) => {
    const category = event.target.closest("[data-category]");
    const name = category?.dataset.category;
    if (!category || !name) return;
    categoryHoldOpened = false;
    clearCategoryHold();
    categoryHoldTimer = setTimeout(() => {
      categoryHoldOpened = true;
      openCategoryEditor(name);
    }, 650);
  });
  ["pointerup", "pointermove", "pointercancel", "scroll"].forEach((type) => {
    document.addEventListener(type, clearCategoryHold, { passive: true });
  });
  document.addEventListener("contextmenu", (event) => {
    const category = event.target.closest("[data-category]");
    const name = category?.dataset.category;
    if (!category || !name) return;
    event.preventDefault();
    openCategoryEditor(name);
  });

  document.addEventListener("click", (event) => {
    if (event.target.closest("[data-open-wizard]")) {
      state.wizardOpen = true;
      state.wizardStep = 0;
      renderWizard();
      return;
    }
    if (event.target.closest("[data-wizard-close]")) {
      closeWizardOnly();
      render();
      return;
    }
    if (event.target.closest("[data-wizard-back]")) {
      applyWizardForm();
      state.wizardStep = Math.max(0, state.wizardStep - 1);
      renderWizard();
      return;
    }
    const categoryTemplate = event.target.closest("[data-category-template]");
    if (categoryTemplate) {
      applyWizardForm();
      applyCategoryTemplate(categoryTemplate.dataset.categoryTemplate);
      save();
      renderWizard();
      showToast(wt("templateApplied"));
      return;
    }    if (event.target.closest("[data-wizard-next]")) {
      applyWizardForm();
      state.wizardStep = Math.min(3, state.wizardStep + 1);
      renderWizard();
      return;
    }
    if (event.target.closest("[data-wizard-finish]")) {
      finishWizard();
      return;
    }
    const wizardStart = event.target.closest("[data-wizard-start]");
    if (wizardStart) {
      const action = wizardStart.dataset.wizardStart;
      closeWizardOnly();
      state.addOpen = false;
      state.detail = null;
      state.editing = null;
      if (action === "plant") {
        openAdd("plant");
        return;
      }
      if (action === "category") {
        openAdd("category");
        return;
      }
      render();
      return;
    }
    if (event.target.closest("[data-add-close]")) {
      state.addOpen = false;
      render();
      return;
    }
    const choice = event.target.closest("[data-add-choice]");
    if (choice) return openAdd(choice.dataset.addChoice);
    const quick = event.target.closest("[data-quick-add]");
    if (quick) {
      event.preventDefault();
      return openAdd(quick.dataset.quickAdd || quickAddKind());
    }
    const emptyAdd = event.target.closest("[data-empty-add]");
    if (emptyAdd) return openAdd(emptyAdd.dataset.emptyAdd);
    const jump = event.target.closest("[data-view-jump]");
    if (jump) { state.view = jump.dataset.viewJump; render(); return; }

    const category = event.target.closest("[data-category]");
    if (category) {
      if (categoryHoldOpened) {
        categoryHoldOpened = false;
        return;
      }
      state.category = category.dataset.category || "all";
      state.editing = null;
      render();
      return;
    }
    const editPlant = event.target.closest("[data-edit-plant]");
    if (editPlant) {
      state.editing = { kind: "plant", id: editPlant.dataset.editPlant };
      render();
      return;
    }
    const editAlbum = event.target.closest("[data-edit-album]");
    if (editAlbum) {
      state.editing = { kind: "album", id: editAlbum.dataset.editAlbum };
      render();
      return;
    }
    const editCustomer = event.target.closest("[data-edit-customer]");
    const editMoment = event.target.closest("[data-edit-moment]");
    if (editMoment) {
      state.editing = { kind: "moment", id: editMoment.dataset.editMoment };
      render();
      return;
    }
    if (editCustomer) {
      state.editing = { kind: "customer", id: editCustomer.dataset.editCustomer };
      render();
      return;
    }
    const openPlant = event.target.closest("[data-open-plant]");
    if (openPlant) {
      state.detail = { kind: "plant", id: openPlant.dataset.openPlant };
      render();
      return;
    }
    const openAlbum = event.target.closest("[data-open-album]");
    if (openAlbum) return openViewer({ kind: "album", id: openAlbum.dataset.openAlbum }, 0);
    const openMomentPhoto = event.target.closest("[data-open-moment-photo]");
    if (openMomentPhoto) return openViewer({ kind: "moment", id: openMomentPhoto.dataset.openMomentPhoto }, Number(openMomentPhoto.dataset.photoIndex || 0));
    const photoOpen = event.target.closest("[data-photo-open]");
    if (photoOpen && state.detail) return openViewer(state.detail, Number(photoOpen.dataset.photoOpen || 0));
    if (event.target.closest("[data-detail-close]")) {
      state.detail = null;
      render();
      return;
    }
    if (event.target.closest("[data-detail-edit]") && state.detail?.kind === "plant") {
      state.editing = { kind: "plant", id: state.detail.id };
      state.detail = null;
      render();
      return;
    }
    if (event.target.closest("[data-cancel-edit]")) {
      state.editing = null;
      render();
      return;
    }
    const plantOption = event.target.closest("[data-plant-option]");
    if (plantOption) {
      const form = plantOption.closest("#editForm");
      if (form) addCustomerWant(form, plantOption.dataset.plantOption);
      return;
    }    const removeWant = event.target.closest("[data-remove-want]");
    if (removeWant) {
      const form = removeWant.closest("#editForm");
      removeWant.closest("[data-want-id]")?.remove();
      const list = form?.querySelector("[data-wanted-list]");
      if (list && !list.querySelector("[data-want-id]")) list.innerHTML = `<p class="muted">${esc(ft("noSelectedPlants"))}</p>`;
      if (form) {
        refreshPlantPicker(form);
        updateCustomerTotal(form);
      }
      return;
    }
    const photoDelete = event.target.closest("[data-photo-delete]");
    if (photoDelete) return deletePhoto(Number(photoDelete.dataset.photoDelete));
    const photoMain = event.target.closest("[data-photo-main]");
    if (photoMain) return makePhotoMain(Number(photoMain.dataset.photoMain));
    const deleteCategory = event.target.closest("[data-delete-category]");
    if (deleteCategory) return deleteCategoryByName(deleteCategory.dataset.deleteCategory);
    if (event.target.closest("[data-delete-current]")) return deleteCurrent();
  });

  document.addEventListener("submit", (event) => {
    if (event.target?.id === "wizardForm") {
      event.preventDefault();
      applyWizardForm();
      state.wizardStep = Math.min(3, state.wizardStep + 1);
      renderWizard();
      return;
    }
    if (event.target?.id === "editForm") {
      event.preventDefault();
      submitEdit(event.target);
    }
    if (event.target?.id === "settingsForm") {
      event.preventDefault();
      submitSettings(event.target);
    }
  });

  document.addEventListener("input", (event) => {
    if (event.target.closest("#wizardForm")) {
      applyWizardForm();
      if (event.target.name === "wizardLanguage") renderWizard();
      else applyTheme();
      return;
    }
    const editFormEl = event.target.closest("#editForm");
    if (["plant", "album", "moment"].includes(editFormEl?.dataset.kind) && (event.target.name === "photos" || event.target.name === "cameraPhoto")) {
      renderSelectedPhotoPreview(editFormEl);
      return;
    }
    if (editFormEl?.dataset.kind === "customer") {
      if (event.target.name === "plantPickerSearch") refreshPlantPicker(editFormEl);
      if (event.target.name?.startsWith("want-price-") || event.target.name?.startsWith("want-qty-") || event.target.name?.startsWith("fee-price-")) updateCustomerTotal(editFormEl);
      return;
    }
    const form = event.target.closest("#settingsForm");
    if (!form) return;
    if (event.target.name === "customColor") {
      form.elements.theme.value = "custom";
      state.data.settings.theme = "custom";
      state.data.settings.customColor = normalizeHex(event.target.value);
      applyTheme();
    }
  });

  document.addEventListener("change", (event) => {
    if (event.target.closest("#wizardForm")) {
      applyWizardForm();
      if (event.target.name === "wizardLanguage") renderWizard();
      else applyTheme();
      return;
    }
    const editFormEl = event.target.closest("#editForm");
    if (["plant", "album", "moment"].includes(editFormEl?.dataset.kind) && (event.target.name === "photos" || event.target.name === "cameraPhoto")) {
      renderSelectedPhotoPreview(editFormEl);
      return;
    }
    if (editFormEl?.dataset.kind === "customer") {
      if (event.target.name === "plantPicker") addCustomerWant(editFormEl, event.target.value);
      if (event.target.name?.startsWith("want-price-") || event.target.name?.startsWith("want-qty-") || event.target.name?.startsWith("fee-price-")) updateCustomerTotal(editFormEl);
      return;
    }
    const form = event.target.closest("#settingsForm");
    if (!form) return;
    if (event.target.name === "theme" || event.target.name === "themeMode") {
      state.data.settings.theme = form.elements.theme.value || "forest";
      state.data.settings.themeMode = ["light", "dark"].includes(form.elements.themeMode.value) ? form.elements.themeMode.value : "dark";
      state.data.settings.customColor = normalizeHex(form.elements.customColor.value);
      applyTheme();
    }
    if (event.target.name === "language") {
      state.data.settings.language = form.elements.language.value || "en";
      render();
    }
  });

  $("#viewerClose").addEventListener("click", closeViewer);
  $("#viewerPrev").addEventListener("click", () => moveViewer(-1));
  $("#viewerNext").addEventListener("click", () => moveViewer(1));

  els.viewer.addEventListener("touchstart", (event) => {
    if (event.touches.length === 2) {
      clearViewerLongPress();
      state.isPinching = true;
      state.suppressViewerTap = true;
      state.pinchDistance = touchDistance(event.touches);
      state.pinchStartScale = state.zoomScale;
      return;
    }
    state.touchX = event.changedTouches[0].clientX;
    startViewerLongPress();
  }, { passive: true });

  els.viewer.addEventListener("touchmove", (event) => {
    if (event.touches.length === 2 && state.isPinching && state.pinchDistance) {
      event.preventDefault();
      const ratio = touchDistance(event.touches) / state.pinchDistance;
      state.zoomScale = Math.min(4, Math.max(1, state.pinchStartScale * ratio));
      applyViewerZoom();
      return;
    }
    if (state.viewerLongPressTimer && event.changedTouches?.length) {
      const dx = event.changedTouches[0].clientX - state.touchX;
      if (Math.abs(dx) > 12) clearViewerLongPress();
    }
  }, { passive: false });

  els.viewer.addEventListener("touchend", (event) => {
    clearViewerLongPress();
    if (state.viewerLongPressFired) {
      state.viewerLongPressFired = false;
      return;
    }
    if (state.isPinching || state.suppressViewerTap) {
      if (event.touches.length === 0) {
        state.isPinching = false;
        state.suppressViewerTap = false;
      }
      return;
    }
    const dx = event.changedTouches[0].clientX - state.touchX;
    if (state.zoomScale <= 1.05 && Math.abs(dx) > 40) moveViewer(dx < 0 ? 1 : -1);
  }, { passive: true });

  els.viewerImage.addEventListener("dblclick", toggleViewerZoom);
  window.addEventListener("keydown", (event) => {
    if (els.viewer.hidden) return;
    if (event.key === "ArrowLeft") moveViewer(-1);
    if (event.key === "ArrowRight") moveViewer(1);
    if (event.key === "Escape") closeViewer();
  });
}

function handleBackStep() {
  if (state.viewer) { closeViewer(); return true; }
  if (state.addOpen) { state.addOpen = false; render(); return true; }
  if (state.detail) { state.detail = null; render(); return true; }
  if (state.editing) { state.editing = null; render(); return true; }
  if (state.category !== "all") { state.category = "all"; render(); return true; }
  if (state.view !== "plants") { state.view = "plants"; state.search = ""; render(); return true; }
  return true;
}

function setupBackGuard() {
  if (state.backGuardReady || !window.history?.pushState) return;
  state.backGuardReady = true;
  history.replaceState({ plantApp: true }, "");
  history.pushState({ plantApp: true, guard: true }, "");
  window.addEventListener("popstate", () => {
    handleBackStep();
    history.pushState({ plantApp: true, guard: true }, "");
  });
}
function init() {
  state.deviceId = getDeviceId();
  state.license = readLicense();
  state.unlocked = !!state.license;
  bind();
  setupBackGuard();
  renderLock();
  if (state.unlocked) {
    render();
    hydrate();
  }
}

init();

























































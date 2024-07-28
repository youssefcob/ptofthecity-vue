type Language = 'EN' | 'ES' | 'AR';

interface PhraseDictionary {
  [key: string]: {
    [lang in Language]: string;
  };
}

const phrase: PhraseDictionary = {
  // navbar
    services: {
      EN: 'Services',
      ES: 'Servicios',
      AR: 'خدمات'
    },
    insurance: {
      EN: 'Insurance',
      ES: 'Seguro',
      AR: 'تأمين'
    },
    whoWeAre: {
      EN: 'Who We Are',
      ES: 'Quiénes Somos',
      AR: 'من نحن'
    },
    blog: {
      EN: 'Blog',
      ES: 'Blog',
      AR: 'مدونة'
    },
    careers: {
      EN: 'Careers',
      ES: 'Carreras',
      AR: 'وظائف'
    },
    trustedBy: {
      EN: 'Trusted by',
      ES: 'Confiado por',
      AR: 'موثوق من قبل'
    },
    faqs: {
      EN: 'FAQs',
      ES: 'Preguntas Frecuentes',
      AR: 'أسئلة مكررة'
    },
    contactUs: {
      EN: 'Contact us',
      ES: 'Contáctenos',
      AR: 'اتصل بنا'
    },
    search: {
      EN: 'Search...',
      ES: 'Buscar...',
      AR: '...بحث'
    },
    menu:{
      EN: 'Menu',
      ES: 'Menú',
      AR: 'قائمة'
    },
    }
    
  

let language: Language = (localStorage.getItem('lang') as Language) || 'EN';

function translate(phraseKey: keyof PhraseDictionary): string {
    const lowerCaseKey = (phraseKey as string).toLowerCase() as keyof PhraseDictionary;
    let phraseName = phrase[phraseKey];
    if (phraseName) {
      let translatedPhrase = phraseName[language];
      if (translatedPhrase) {
        return translatedPhrase;
      }
    } 
  return phraseKey as string;
}

function lang():string{
  return language.toLowerCase();
}

function dir():string {
  return language === 'AR' ? 'rtl' : 'ltr';
}
export { translate,lang, dir };
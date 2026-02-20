import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <section className="relative overflow-hidden border-b border-emerald-100 bg-[radial-gradient(circle_at_top_right,#d2f1df_0%,#ecfaf2_32%,#ffffff_70%)]">
        <div className="pointer-events-none absolute inset-0 opacity-65" aria-hidden="true">
          <div className="absolute -left-16 top-8 h-48 w-48 rounded-full bg-emerald-200/40 blur-3xl" />
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-sky-100/60 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-4xl px-4 py-14 md:py-20">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-emerald-700 hover:text-emerald-800 transition-colors mb-6"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Начало
          </Link>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Политика за поверителност
          </h1>
          <p className="mt-4 text-neutral-600">
            Уведомление относно обработването на лични данни
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-4 py-12 md:py-16">
        <div className="prose prose-neutral prose-emerald max-w-none">
          <section className="mb-10">
            <h2 className="text-xl font-bold text-neutral-900 mb-4">Администратор на лични данни:</h2>
            <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6 space-y-2">
              <p><strong>1. Наименование:</strong> Клийнинг Айдиъс ООД</p>
              <p><strong>2. ЕИК:</strong> 208150160</p>
              <p><strong>3. Седалище и адрес на управление:</strong> гр. София, кв. Лозенец, ул. Милин камък 41</p>
              <p><strong>4. Телефон:</strong> +359884918067</p>
              <p><strong>5. Адрес на електронна поща:</strong> office@cleaningideas.bg</p>
              <p><strong>6. Интернет страница:</strong> www.cleaningideas.bg</p>
            </div>
          </section>

          <p className="text-neutral-700 leading-relaxed">
            Клийнинг Айдиъс ООД („Дружеството" или „Администраторът") осъществява дейността си в съответствие със Закона за защита на личните данни и Регламент (ЕС) 2016/679 на Европейския парламент и на Съвета от 27 април 2016 година относно защитата на физическите лица във връзка с обработването на лични данни („Общ регламент относно защитата на данните" или „Регламентът"). Настоящата „Политика за поверителност" има за цел да информира всеки Клиент на Дружеството относно обработването на данни, чрез които се идентифицира или може да се идентифицира конкретния Клиент.
          </p>

          <p className="text-neutral-700 leading-relaxed mt-4">
            За целите на Политиката „Клиент" е всяко физическо лице страна по договор с Дружеството за предоставяне на услуги, както и физическо лице изразило воля за встъпване в преддоговорни отношения с Администратора и/или ползвател на интернет страницата www.cleaningideas.bg.
          </p>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-neutral-900 mb-4">1. Какви лични данни обработваме?</h2>
            <p className="text-neutral-700 mb-3">Дружеството обработва, като администратор на лични данни, следните групи лични данни на Клиентите:</p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700">
              <li><strong>Физическа идентичност</strong> – имена, адрес, телефон, адрес на електронна поща;</li>
              <li><strong>Икономическа идентичност</strong> – информация за номер на банкова сметка (при необходимост).</li>
            </ul>
            <p className="text-neutral-700 mt-3">Личните данни се събират от Администратора от лицата, за които се отнасят.</p>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-neutral-900 mb-4">2. Как събираме лични данни?</h2>
            <p className="text-neutral-700 mb-3">Ние събираме лични данни:</p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700">
              <li>при използване на контактната форма на нашата интернет страница;</li>
              <li>при осъществяване на кореспонденция с Клиента, която може да включва комуникация в писмена форма, включително електронна форма и устна форма;</li>
              <li>чрез „бисквитки" при използване или разглеждане на нашата интернет страница.</li>
            </ul>
            <p className="text-neutral-700 mt-4">
              Нашата интернет страница събира данни в лог файлове. Тази информация съдържа данни за вашия IP адрес, интернет доставчик, браузъра, който използвате, вашата операционна система, кога сте посетили нашата интернет страница, посетените страници.
            </p>
            <p className="text-neutral-700 mt-3">
              „Бисквитките" представляват малки файлове с информация, която интернет страницата изпраща до браузъра на посетителя. Те ни помагат да направим интернет страницата ни да работи по-добре за вас.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-neutral-900 mb-4">3. Обработваме ли специални категории лични данни?</h2>
            <p className="text-neutral-700">Дружеството не обработва специални категории лични данни на Клиентите.</p>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-neutral-900 mb-4">4. За какви цели обработваме личните данни?</h2>
            <p className="text-neutral-700 mb-3">Дружеството обработва личните данни на Клиентите за следните цели:</p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700">
              <li>предоставяне на информация и съдействие, което сте поискали от нас;</li>
              <li>индивидуализиране и контакт с клиентите;</li>
              <li>за всички дейности, свързани със съществуването, изменението и прекратяването на отношенията между Дружеството и Клиента;</li>
              <li>предлагане и промотиране на допълнителни услуги;</li>
              <li>спазване на регулаторните изисквания;</li>
              <li>осъществяване на защита при възникнал спор и сътрудничество с регулаторните органи до степента, изисквана от закона.</li>
            </ul>
            <p className="text-neutral-700 mt-3">Ако не обработваме тези лични данни, може да не бъдем в състояние да ви предоставим нашите услуги или поисканото от вас съдействие.</p>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-neutral-900 mb-4">5. На какво правно основание обработваме личните данни?</h2>
            <p className="text-neutral-700 mb-3">Личните данни на Клиентите се събират, обработват и използват на база няколко основания за обработване:</p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700">
              <li>За изпълнението на договор или за встъпване в преддоговорни отношения;</li>
              <li>За спазването на законово задължение, което се прилага спрямо Дружеството;</li>
              <li>За целите на легитимните интереси на Дружеството или на трета страна;</li>
              <li>При условията на доброволно дадено съгласие, когато това се изисква съгласно действащото законодателство.</li>
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-neutral-900 mb-4">6. За какъв срок съхраняваме личните данни?</h2>
            <p className="text-neutral-700">
              Дружеството съхранява личните данни по време на договорното правоотношение и до погасяване на вземането по договора и по време на преходен период (напр. за спазване на задълженията във връзка с архивиране и съхраняване на счетоводни данни). Различните носители на счетоводна и данъчна информация, съдържащи лични данни се съхраняват за срок от 10 години, считано от 1 януари на отчетния период, следващ отчетния период, за който се отнасят.
            </p>
            <p className="text-neutral-700 mt-3">
              В случаите, когато вашите лични данни са получени и се обработват на основание дадено от вас съгласие, ние ще обработваме вашите лични данни само доколкото имаме вашето съгласие.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-neutral-900 mb-4">7. С кого споделяме личните данни?</h2>
            <p className="text-neutral-700 mb-3">Дружеството споделя личните данни с:</p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700">
              <li>трети лица – доставчици на услуги, ангажирани от нас да изпълняват функции или дейности от наше име;</li>
              <li>трети лица: регулаторни органи, данъчни, финансови органи, съдебни, административни и правоприлагащи органи, всички в съответствие с приложимото право.</li>
            </ul>
            <p className="text-neutral-700 mt-3">
              Дружеството уведомява субекта на лични данни в случай на намерение да предаде част или всички негови лични данни на трети държави или международни организации.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-neutral-900 mb-4">8. Защитени ли са личните данни?</h2>
            <p className="text-neutral-700">
              Дружеството осигурява и поддържа подходящи технически и организационни мерки за защита на личните данни срещу неправомерен достъп или незаконосъобразно използване на личните данни и/или срещу тяхното инцидентно загубване, изменение, разкриване, достъп и/или повреждане или копиране.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-neutral-900 mb-4">9. Извършваме ли автоматизирано вземане на решения?</h2>
            <p className="text-neutral-700">Дружеството не извършва автоматизирано взимане на решения с данни.</p>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-neutral-900 mb-4">10. Какви са правата на Клиентите?</h2>
            <p className="text-neutral-700 mb-4">Всеки Клиент може да упражни следните права с писмено съобщение до Дружеството:</p>
            
            <div className="space-y-4">
              <div className="rounded-lg border border-neutral-200 bg-white p-4">
                <h3 className="font-semibold text-neutral-900">Оттегляне на съгласието</h3>
                <p className="text-neutral-600 text-sm mt-1">Имате право да оттеглите своето съгласие по всяко време. Оттеглянето не засяга законосъобразността на обработването преди него.</p>
              </div>
              
              <div className="rounded-lg border border-neutral-200 bg-white p-4">
                <h3 className="font-semibold text-neutral-900">Право на достъп</h3>
                <p className="text-neutral-600 text-sm mt-1">Имате право да получите потвърждение дали личните ви данни се обработват и да получите копие от тях.</p>
              </div>
              
              <div className="rounded-lg border border-neutral-200 bg-white p-4">
                <h3 className="font-semibold text-neutral-900">Право на коригиране</h3>
                <p className="text-neutral-600 text-sm mt-1">Имате право да коригирате неточни, непълни или остарели лични данни.</p>
              </div>
              
              <div className="rounded-lg border border-neutral-200 bg-white p-4">
                <h3 className="font-semibold text-neutral-900">Право на изтриване („да бъдеш забравен")</h3>
                <p className="text-neutral-600 text-sm mt-1">Имате право да поискате изтриване на личните ви данни при определени условия.</p>
              </div>
              
              <div className="rounded-lg border border-neutral-200 bg-white p-4">
                <h3 className="font-semibold text-neutral-900">Право на ограничаване на обработването</h3>
                <p className="text-neutral-600 text-sm mt-1">Имате право да изискате ограничаване на обработването на личните ви данни в определени случаи.</p>
              </div>
              
              <div className="rounded-lg border border-neutral-200 bg-white p-4">
                <h3 className="font-semibold text-neutral-900">Право на възражение</h3>
                <p className="text-neutral-600 text-sm mt-1">Имате право да възразите срещу обработването на лични данни на основания, свързани с вашата конкретна ситуация.</p>
              </div>
              
              <div className="rounded-lg border border-neutral-200 bg-white p-4">
                <h3 className="font-semibold text-neutral-900">Право на преносимост на данните</h3>
                <p className="text-neutral-600 text-sm mt-1">Имате право да получите личните си данни в структуриран, машинно четим формат.</p>
              </div>
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-neutral-900 mb-4">Право на жалба</h2>
            <p className="text-neutral-700 mb-4">Всеки Клиент има право да подаде жалба до Комисията за защита на личните данни:</p>
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6">
              <p className="font-semibold text-emerald-900">Комисия за защита на личните данни</p>
              <p className="text-emerald-800 mt-2">Адрес: гр. София, п. к. 1592, бул. „Проф. Цветан Лазаров" № 2</p>
              <p className="text-emerald-800">Тел: (02) 91 53 519</p>
              <p className="text-emerald-800">Имейл: kzld@cpdp.bg</p>
              <p className="text-emerald-800">Уебсайт: www.cpdp.bg</p>
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-neutral-900 mb-4">11. Какво става в случай на промяна?</h2>
            <p className="text-neutral-700">
              В случай на съществена промяна в начина, по който Дружеството обработва личните данни на Клиенти, Дружеството ще уведоми Клиентите за съответната промяна веднага, като издаде актуализирана версия на уведомлението.
            </p>
          </section>

          <div className="mt-12 pt-8 border-t border-neutral-200 text-center">
            <p className="text-sm text-neutral-500">Последна актуализация: Февруари 2026</p>
          </div>
        </div>
      </article>
    </main>
  );
}

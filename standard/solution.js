/**
 * Zadanie
 *
 * Stwórz funkcje która wygeneruje 50 losowych pracowników i zapisze je w tablicy obiektów
 * gdzie obiektem jest pracownik
 *
 * docelowy kształt obiektu usera (czyli to pola ma mieć obiekt user) jest następjący
 *
 * const przykladowyUser = {
 *      name: "Test1",
 *      sallary: 2000,
 *      seniority: "senior",
 *      prefession: "developer"
 * }
 *
 * możliwe wartości dla pola seniority są określone w następującej tablicy:
 * ["senior", "regular", "junior"]
 *
 * możliwe wartości dla pola profession są określone w następującej tablicy:
 * ["developer", "tester", "designer"]
 *
 * w pierwszej części zadania należy stworzyć 50 obiektów takich jak wyżej
 * przyczym pola które trzeba określić to name oraz sallary
 * Pole name należy spopulować słowem Test oraz index
 * np.
 * Test1
 * Test2
 * Test3
 * itd.
 *
 * Pole salary należy spopulować następującą wartością: Math.round(10000 * Math.random())
 * dzięki temu dane nie będą takie nudne :)
 *
 * wynik należy przypisać do zmiennej o nazwie staff
 *
 *
 */

/**
 * MIEJSCE NA TWÓJ KOD START
 */

/**
 * MIEJSCE NA TWÓJ KOD END
 */

/**
 * Zadanie
 *
 * Nasi nowo zatrudnieni/wygenerowani pracownicy nie mają przypisanych profesji oraz seniority
 * Twoim zadaniem jest zaktualizowanie wygenerowanej tablicy i przypisanie odpowiednich wartości
 * do pól profession oraz seniority na podstawie dostępnych wartości z kolejnych tablic
 *
 * ["senior", "regular", "junior"]
 * ["developer", "tester", "designer"]
 *
 * Przypisanie należy wykonać losowo tzn dla każdego pracownika należy przypisać
 * losową wartość z tablic określnych wyżej - oczywiście z zachowaniem sensu tzn z tablicy z profesjami
 * wybieramy wartość dla pola profession.
 *
 * Żeby to wykonać polecam stworzyć funkcję generującą randomową wartość z wybranego zakresu np od 0 do 2 bo tyle
 * indexów mamy w powyższych tablicach
 *
 * Zachęcam do pogooglowania jak taką funkcje stworzyć ewentualnie możesz skorzysać z następującego linku
 * https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
 *
 *
 * po stworzeniu tej funkcji trzeba jej użyć przy procesie mapowania po pracowników (tablica staff)
 * i dodać nowe pola oraz wylosować wartości z tablic przy pomocy stworzonej funkcji losującej
 * ALE SKĄD MAM WZIĄĆ TE TABLICE Z WARTOŚCAMI? należy użyć tablic z opisu je stworzyć na górze w tym pliku
 *
 * Ważne wymaganie
 *
 * Mapując się stowrzysz nową tablicę ale zamiast tworzyć nową zmienną przypisz ją do zmiennej staff (staff musi mieć słowo let w tym przypadku);
 *
 */

/**
 * MIEJSCE NA TWÓJ KOD START
 */

/**
 * MIEJSCE NA TWÓJ KOD END
 */

/**
 * Zadanie
 *
 * Suche dane i widok tylko w konsoli - nuda - zmienmy to
 *
 * Stwórz funkcje (createTableRows) która stworzy strukturę HTMLową w JSie zapisaną w stringu
 * funckja createTableRows powinna przyjmować w parametrze tablice pracowników
 *
 * np.
 *
 * const user = {
 *  name: 'John',
 *  lastName: 'Doe'
 * }
 *
 * const htmlWStringu = `
 *  <ul>
 *      <li>Name: <b>${user.name}</b></li>
 *      <li>Last name: <b>${user.lastName}</b></li>
 *  </ul>
 * `
 *
 * W odróżnieniu od tego prostego przykładu Twoim zadaniem jest stworzenie struktury tabelarycznej
 * tzn stwórz dynamiczną część tabelki w kodzie JS i dodatkowo strukture spopuluj danymi pracowników
 *
 * struktura jaką należy stworzyć to
 *
 *     <tr>
 *          <td></td> // miejsce na index
 *          <td></td> // miejsce na name
 *          <td></td> // miejsce na profesje
 *          <td></td> // miejsce na salary
 *          <td></td> // miejsce na przycisk z akcją
 *     </tr>
 *
 * finalnie struktura powinna zawierać tyle elementów tr ile jest pracowników czyli zgodnie z poleceniem 50
 * w każdym elemncie tr powinno być 5 elementów td z odpowiednimi danymi - w razie potrzeby podejrzenia ostetecznego rezultatu
 * możesz spojrzeć na tablkę w dokumencie html - oczywiście tamtejsza tabelka jest statyczna tu pracujemy nad dynamiczną wersją
 * zbudowaną na podstawie danych z tablicy JSowej
 *
 * Funkja ta jeszcze nie wyświetli danych ale przygotuje strukturę którą za chwile osadzimy w dokumencie
 * i ujżymy listę pracowników
 *
 * użycie funkcji powinno wyglądać następująco
 *
 * const htmlStruture = createTableRows(staff); // htmlStruture === string zawierający 50 elementów tr z danymi
 *
 *
 */

/**
 * MIEJSCE NA TWÓJ KOD START
 */

/**
 * MIEJSCE NA TWÓJ KOD END
 */

/**
 * Zadanie
 *
 * Wyświetlenie użytkowników na ekranie - osadzenie ciała tabelki w tabelce
 *
 * stwórz funkcje (renderHTML) która w pierwszym parametrze przyjme strukture html jako string
 * a drugim id elementu w którym chcemy osadzić przekazaną strukture
 * niech funckja ta pobierze element tbody z dokumentu html - element ten posiada atrybut id="output"
 * dzięki temu śmiało możesz pobrać element za pomocą metody getElementById
 *
 * następnie do pobranego elementu za pomocą property innerHtml przypisz struture html pochodzącą z parametru
 *
 * przykład działania innerHtml https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_innerhtml
 *
 * dzięki temu funkcja z poprzedniego zadania wygeneruje strukturę htmlową
 * którą uzyjemy jako argumentu dla funkcji z tego zadania
 *
 * użycie funkcji powinno wyglądać następująco
 *
 * const htmlStruture = createTableRows(staff); // htmlStruture === string zawierający 50 elementów tr z danymi
 *
 * renderHTML(htmlStruture, "output"); // funkcja nic nie zwraca ale powinna wyświetlić na ekranie wiersze tabelki w elmencie o id = "output"
 */

/**
 * MIEJSCE NA TWÓJ KOD START
 */

/**
 * MIEJSCE NA TWÓJ KOD END
 */

/**
 *
 * Zarządzanie danymi - sortowanie - filtrowanie etc.
 *
 * Do każdego z poniższych zadań należy stworzyć funkcje (nazwa adekwatna do tego co funckja robi)
 * np. sortBySalary
 * Niech każda funkcja przyjmuje aktualny stan pracowników (zmienna staff) w parametrze
 * w przypadku sortowania do funckji należy przekazać parametr kierunku sortowania
 * tzn czy sortowanie ma być rosnące czy malejące możesz użyć stringów "asc" oraz "desc"
 *
 * przykładwoe wywołanie funkji będzie wyglądało następująco:
 *
 * const sortedBySalary = sortBySalary(staff, "asc");
 *
 * ALBO
 *
 * const filtredByAmount = filterByAmount(staff, 34); // filtrowanie po max ilosci pracowników
 *
 * UWAGA każda z poniższych funkcji powinna zwracać nową tablicę stworzoną na podstawie tablicy z parametru
 *
 * Zadanie: sortowanie po zarobkach
 *
 * Zadanie: sortowanie po profesjii
 *
 * Zadanie: filtrowanie po ilości pracowników - funkcja powinna przyjmować parametr staff oraz maxAmount
 * gdzie staff to tablica pracowników a maxAmount to liczba do kórej trzeba ograniczyć nową tablice
 *
 * Zadanie: filtrowanie po max i min zarobkach - funkcja powinna przyjmować parametr staff oraz max i min
 * dzięki czemu wyświetlanych pracowników będzie można ograniczyć/odfiltrować zakresem od do
 *
 * Zadanie: filtrowanie po profesjii - funkcja powinna przyjmować parametr staff oraz nazwę profesji którą
 * chce się wyświetlić lub słowo "all" któro zresetuje widok do wszystkich użytkowników
 *
 */

/**
 * MIEJSCE NA TWÓJ KOD START
 */

/**
 * MIEJSCE NA TWÓJ KOD END
 */

/**
 * CIĄG DALSZY NASTĄPI :)
 *
 */

/**
 * SPOILER
 */

/**
 * OBSŁUGA ELEMENTÓW w dokumencie i podłączanie wcześniej napisanych funkcji
 */

/**
 * STATYSTYKI
 *
 * Ćwiczenie filtrowania i liczenia - sprtyne podejscie do zliczania
 */

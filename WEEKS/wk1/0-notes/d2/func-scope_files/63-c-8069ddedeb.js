(window["canvasWebpackJsonp"] = window["canvasWebpackJsonp"] || []).push([
  [63],
  {
    "Cf/T": function (e, t, a) {
      "use strict";
      var o = a("17x9");
      const _ = Object(o["shape"])({
        id: o["string"].isRequired,
        title: o["string"].isRequired,
        groupId: o["string"],
      });
      const l = Object(o["shape"])({
        id: o["string"].isRequired,
        title: o["string"].isRequired,
        items: Object(o["arrayOf"])(_),
      });
      Object(o["oneOfType"])([
        Object(o["shape"])({ siblings: Object(o["arrayOf"])(_).isRequired }),
        Object(o["shape"])({
          groupsLabel: o["string"].isRequired,
          groups: Object(o["arrayOf"])(l).isRequired,
          excludeCurrent: o["bool"],
        }),
      ]);
    },
    Dhzb: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return u;
      });
      a.d(t, "b", function () {
        return h;
      });
      var o = a("An8g");
      var _ = a("q1tI");
      var l = a.n(_);
      a("17x9");
      var c = a("pQTu");
      var i = a("m0r6");
      Object(i["a"])(
        JSON.parse(
          '{"ar":{"item_select_fe0f320a":"تحديد عنصر","place_b128fa94":"وضع","place_title_2c183274":"وضع \\"%{title}\\"","position_select_c2dd3980":"تحديد موضع","select_one_b647b384":"تحديد عنصر واحد"},"ca":{"item_select_fe0f320a":"Element seleccionat","place_b128fa94":"Lloc","place_title_2c183274":"Lloc \\"%{title}\\"","position_select_c2dd3980":"Selecció de la posició","select_one_b647b384":"Selecciona\'n un"},"cy":{"item_select_fe0f320a":"Dewis Eitem","place_b128fa94":"Rhoi","place_title_2c183274":"Rhoi \\"%{title}\\"","position_select_c2dd3980":"Dewis Safle","select_one_b647b384":"Dewiswch un"},"da":{"item_select_fe0f320a":"Vælg element","place_b128fa94":"Anbring","place_title_2c183274":"Anbring \\"%{title}\\"","position_select_c2dd3980":"Vælg position","select_one_b647b384":"Vælg en"},"da-x-k12":{"item_select_fe0f320a":"Vælg element","place_b128fa94":"Anbring","place_title_2c183274":"Anbring \\"%{title}\\"","position_select_c2dd3980":"Vælg position","select_one_b647b384":"Vælg en"},"de":{"item_select_fe0f320a":"Elementauswahl","place_b128fa94":"Ort","place_title_2c183274":"Ort \\"%{title}\\"","position_select_c2dd3980":"Positionsauswahl","select_one_b647b384":"Eine auswählen"},"en-AU":{"item_select_fe0f320a":"Item Select","place_b128fa94":"Place","place_title_2c183274":"Place \\"%{title}\\"","position_select_c2dd3980":"Position Select","select_one_b647b384":"Select one"},"en-AU-x-unimelb":{"item_select_fe0f320a":"Item Select","place_b128fa94":"Place","place_title_2c183274":"Place \\"%{title}\\"","position_select_c2dd3980":"Position Select","select_one_b647b384":"Select one"},"en-CA":{"item_select_fe0f320a":"Item Select","place_b128fa94":"Place","place_title_2c183274":"Place \\"%{title}\\"","position_select_c2dd3980":"Position Select","select_one_b647b384":"Select one"},"en-GB":{"item_select_fe0f320a":"Item Select","place_b128fa94":"Place","place_title_2c183274":"Place \\"%{title}\\"","position_select_c2dd3980":"Position select","select_one_b647b384":"Select one"},"en-GB-x-lbs":{"item_select_fe0f320a":"Item Select","place_b128fa94":"Place","place_title_2c183274":"Place \\"%{title}\\"","position_select_c2dd3980":"Position select","select_one_b647b384":"Select one"},"en-GB-x-ukhe":{"item_select_fe0f320a":"Item Select","place_b128fa94":"Place","place_title_2c183274":"Place \\"%{title}\\"","position_select_c2dd3980":"Position select","select_one_b647b384":"Select one"},"es":{"item_select_fe0f320a":"Seleccionar elemento","place_b128fa94":"Lugar","place_title_2c183274":"Colocar \\"%{title}\\"","position_select_c2dd3980":"Seleccionar posición","select_one_b647b384":"Seleccionar uno"},"fa":{"item_select_fe0f320a":"انتخاب مورد","place_b128fa94":"مکان","place_title_2c183274":"\\"%{title}\\" را قرار دهید","position_select_c2dd3980":"انتخاب موقعیت","select_one_b647b384":"یکی را انتخاب کنید"},"fi":{"item_select_fe0f320a":"Kohteen valinta","place_b128fa94":"Sijoita","place_title_2c183274":"Sijoita \\"%{title}\\"","position_select_c2dd3980":"Sijainnin valinta","select_one_b647b384":"Valitse yksi"},"fr":{"item_select_fe0f320a":"Sélection d\'élément","place_b128fa94":"Placer","place_title_2c183274":"Placer \\"%{title}\\"","position_select_c2dd3980":"Sélection de la position","select_one_b647b384":"En sélectionner une"},"fr-CA":{"item_select_fe0f320a":"Sélection d’éléments","place_b128fa94":"Placer","place_title_2c183274":"Placer « %{title} »\\"","position_select_c2dd3980":"Sélection de position","select_one_b647b384":"Sélectionner un élément"},"he":{"item_select_fe0f320a":"בחירת פריט","place_b128fa94":"מיקום"},"ht":{"item_select_fe0f320a":"Eleman Seleksyone","place_b128fa94":"Plas","place_title_2c183274":"Plas \\"%{title}\\"","position_select_c2dd3980":"Seleksyone Pozisyon","select_one_b647b384":"Seleksyone yonn"},"hu":{"item_select_fe0f320a":"Elem kiválasztása","place_b128fa94":"Elhelyezés","select_one_b647b384":"Válasszon egyet"},"is":{"item_select_fe0f320a":"Atriðaval","place_b128fa94":"Staður","place_title_2c183274":"Staður \\"%{title}\\"","position_select_c2dd3980":"Velja stöðu","select_one_b647b384":"Veldu eitt"},"it":{"item_select_fe0f320a":"Selezione elemento","place_b128fa94":"Posiziona","place_title_2c183274":"Posiziona \\"%{title}\\"","position_select_c2dd3980":"Selezione posizione","select_one_b647b384":"Scegli un\'opzione"},"ja":{"item_select_fe0f320a":"項目選択","place_b128fa94":"場所","place_title_2c183274":"%{title}を設置する","position_select_c2dd3980":"位置選択","select_one_b647b384":"ひとつ選んでください"},"mi":{"item_select_fe0f320a":"Tūemi Tīpako","place_b128fa94":"Wāhi","place_title_2c183274":"Wāhi \\"%{title}\\"","position_select_c2dd3980":"Whakatau Tīpako","select_one_b647b384":"Tīpako kotahi"},"nb":{"item_select_fe0f320a":"Elementvalg","place_b128fa94":"Sted","place_title_2c183274":"Sted \\"%{title}\\"","position_select_c2dd3980":"Posisjonsvalg","select_one_b647b384":"Velg en"},"nb-x-k12":{"item_select_fe0f320a":"Elementvalg","place_b128fa94":"Sted","place_title_2c183274":"Sted \\"%{title}\\"","position_select_c2dd3980":"Posisjonsvalg","select_one_b647b384":"Velg en"},"nl":{"item_select_fe0f320a":"Item selecteren","place_b128fa94":"Locatie","place_title_2c183274":"Plaats \\"%{title}\\"","position_select_c2dd3980":"Positie selecteren","select_one_b647b384":"Selecteer er één"},"nn":{"item_select_fe0f320a":"Elementval","place_b128fa94":"Plassering","place_title_2c183274":"Plassering \\"%{title}\\"","position_select_c2dd3980":"Vel plassering","select_one_b647b384":"Vel ein"},"pl":{"item_select_fe0f320a":"Wybór elementu","place_b128fa94":"Umieść","place_title_2c183274":"Umieść \\"%{title}\\"","position_select_c2dd3980":"Wybór pozycji","select_one_b647b384":"Wybierz jeden"},"pt":{"item_select_fe0f320a":"Seleção de Item","place_b128fa94":"Colocar","place_title_2c183274":"Colocar \\"%{title}\\"","position_select_c2dd3980":"Seleção de posição","select_one_b647b384":"Selecionar um"},"pt-BR":{"item_select_fe0f320a":"Seleção de itens","place_b128fa94":"Lugar","place_title_2c183274":"Colocar \\"%{title}\\"","position_select_c2dd3980":"Seleção de posição","select_one_b647b384":"Selecionar um"},"ru":{"item_select_fe0f320a":"Выбор элемента","place_b128fa94":"Разместить","place_title_2c183274":"Поместите \\"%{title}\\"","position_select_c2dd3980":"Выбор позиции","select_one_b647b384":"Выбрать один"},"sl":{"item_select_fe0f320a":"Izbira elementa","place_b128fa94":"Umesti","place_title_2c183274":"Umesti »%{title}«","position_select_c2dd3980":"Izbira položaja","select_one_b647b384":"Izberi eno"},"sv":{"item_select_fe0f320a":"Val av objekt","place_b128fa94":"Placera","place_title_2c183274":"Placera \\"%{title}\\"","position_select_c2dd3980":"Positionsval","select_one_b647b384":"Välj ett alternativ"},"sv-x-k12":{"item_select_fe0f320a":"Val av objekt","place_b128fa94":"Placera","place_title_2c183274":"Placera \\"%{title}\\"","position_select_c2dd3980":"Positionsval","select_one_b647b384":"Välj ett alternativ"},"tr":{"place_b128fa94":"Yerleştir","place_title_2c183274":"\\"%{title}\\" yerleştir"},"uk":{"item_select_fe0f320a":"Вибір елементу","place_b128fa94":"Місце","place_title_2c183274":"Місце \\"%{title}\\"","position_select_c2dd3980":"Вибір позиції","select_one_b647b384":"Вибрати один"},"zh-Hans":{"item_select_fe0f320a":"项目选择","place_b128fa94":"放在","place_title_2c183274":"放在\\"%{title}\\"","position_select_c2dd3980":"位置选择","select_one_b647b384":"选择一个"},"zh-Hant":{"item_select_fe0f320a":"選擇項目","place_b128fa94":"放置","place_title_2c183274":"放置「%{title}\\"","position_select_c2dd3980":"選擇位置","select_one_b647b384":"選擇一個"}}'
        )
      );
      a("jQeR");
      a("0sPK");
      var s = c["default"].scoped("selectPosition");
      var n;
      const r = (e) =>
        l.a.createElement(
          "span",
          e,
          n ||
            (n = Object(o["a"])(
              "svg",
              {
                width: "15px",
                height: "57px",
                viewBox: "0 0 15 57",
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink",
              },
              void 0,
              Object(o["a"])(
                "g",
                {
                  id: "Page-1",
                  stroke: "none",
                  strokeWidth: "1",
                  fill: "none",
                  fillRule: "evenodd",
                },
                void 0,
                Object(o["a"])(
                  "g",
                  {
                    id: "Alt-Move-Module-To-02",
                    transform: "translate(-1174.000000, -193.000000)",
                    fillRule: "nonzero",
                    fill: "#A5AFB5",
                  },
                  void 0,
                  Object(o["a"])(
                    "g",
                    {
                      id: "Group",
                      transform: "translate(1174.000000, 193.000000)",
                    },
                    void 0,
                    Object(o["a"])("path", {
                      d: "M2.08984375,50.4040286 L2.08984375,2.140625 L14.2460937,2.140625 L14.2460937,0.140625 L0.08984375,0.140625 L0.08984375,52.4040286 L12.3117575,52.4040286 L12.3117575,50.4040286 L2.08984375,50.4040286 Z M8.75061079,46.8029894 C8.34904169,46.401618 7.70214858,46.397441 7.29950809,46.7998832 L7.29950809,46.7998832 C6.8996553,47.1995392 6.89963974,47.8474939 7.30261575,48.2502716 L11.1577205,52.1034784 C11.5592896,52.5048499 12.2061828,52.5090268 12.6088232,52.1065846 L12.6088232,52.1065846 C13.008676,51.7069286 13.0086916,51.0589739 12.6057156,50.6561963 L8.75061079,46.8029894 L8.75061079,46.8029894 Z M8.75061079,56.1970106 C8.34904169,56.598382 7.70214858,56.602559 7.29950809,56.2001168 L7.29950809,56.2001168 C6.8996553,55.8004608 6.89963974,55.1525061 7.30261575,54.7497284 L11.1577205,50.8965216 C11.5592896,50.4951501 12.2061828,50.4909732 12.6088232,50.8934154 L12.6088232,50.8934154 C13.008676,51.2930714 13.0086916,51.9410261 12.6057156,52.3438037 L8.75061079,56.1970106 L8.75061079,56.1970106 Z",
                      id: "connector",
                    })
                  )
                )
              )
            ))
        );
      var f = r;
      var b = a("ZbPE");
      var d = a("sTNg");
      var m = a("S4Kx");
      var p = a("6SzX");
      var v = a("ToY9");
      a("Cf/T");
      u.defaultProps = {
        options: [],
        className: "",
        selectOneDefault: false,
        testId: null,
      };
      function u({
        label: e,
        onChange: t,
        options: a,
        className: _,
        selectOneDefault: l,
        testId: c,
      }) {
        return Object(o["a"])(
          m["a"],
          { margin: "medium 0", display: "block", className: _ },
          void 0,
          Object(o["a"])(
            d["a"],
            {
              id: "move-select-form",
              label: Object(o["a"])(p["a"], {}, void 0, e),
            },
            void 0,
            Object(o["a"])(
              "select",
              {
                "data-testid": c,
                onChange: t,
                className: "move-select-form",
                style: { margin: "0", width: "100%" },
              },
              void 0,
              l && Object(o["a"])("option", {}, void 0, s.t("Select one")),
              a
            )
          )
        );
      }
      h.defaultProps = {
        selectedPosition: { type: "absolute" },
        selectPosition: () => {},
        selectSibling: () => {},
      };
      function h({
        items: e,
        siblings: t,
        selectedPosition: a,
        selectPosition: _,
        selectSibling: l,
      }) {
        const c = !!(a && "relative" === a.type);
        function i() {
          const a = t.filter((t) => {
            var a;
            return (
              t.id !== (null === (a = e[0]) || void 0 === a ? void 0 : a.id)
            );
          });
          return Object(o["a"])(u, {
            label: s.t("Item Select"),
            className: "move-select__sibling",
            onChange: l,
            options: a.map((e, t) =>
              Object(o["a"])("option", { value: t }, e.id, e.title)
            ),
            selectOneDefault: false,
            testId: "select-sibling",
          });
        }
        function n() {
          const t =
            1 === e.length
              ? s.t('Place "%{title}"', { title: e[0].title })
              : s.t("Place");
          return Object(o["a"])(b["a"], { weight: "bold" }, void 0, t);
        }
        return Object(o["a"])(
          "div",
          {},
          void 0,
          n(),
          Object(o["a"])(u, {
            label: s.t("Position Select"),
            className: "move-select__position",
            onChange: _,
            options: Object.keys(v["a"]).map((e) =>
              Object(o["a"])("option", { value: e }, e, v["a"][e].label)
            ),
            selectOneDefault: false,
            testId: "select-position",
          }),
          c
            ? Object(o["a"])(
                "div",
                {},
                void 0,
                Object(o["a"])(f, {
                  "aria-hidden": true,
                  style: {
                    position: "absolute",
                    transform: "translate(-15px, -35px)",
                  },
                }),
                i(e)
              )
            : null
        );
      }
    },
    ToY9: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return s;
      });
      var o = a("pQTu");
      var _ = a("m0r6");
      Object(_["a"])(
        JSON.parse(
          '{"ar":{"after_48b9d69":"بعد..","at_the_bottom_a6a5f0fe":"في الأسفل","at_the_top_fa836591":"في الأعلى","before_cb32fc0":"قبل.."},"ca":{"after_48b9d69":"Després...","at_the_bottom_a6a5f0fe":"Al final","at_the_top_fa836591":"Al principi","before_cb32fc0":"Abans..."},"cy":{"after_48b9d69":"Ar ôl...","at_the_bottom_a6a5f0fe":"Ar y Gwaelod","at_the_top_fa836591":"Ar y Brig","before_cb32fc0":"Cyn..."},"da":{"after_48b9d69":"Efter ...","at_the_bottom_a6a5f0fe":"Nederst","at_the_top_fa836591":"Øverst","before_cb32fc0":"Før ..."},"da-x-k12":{"after_48b9d69":"Efter ...","at_the_bottom_a6a5f0fe":"Nederst","at_the_top_fa836591":"Øverst","before_cb32fc0":"Før ..."},"de":{"after_48b9d69":"Nach ...","at_the_bottom_a6a5f0fe":"Ganz unteren","at_the_top_fa836591":"Ganz oben","before_cb32fc0":"Vor ..."},"el":{"after_48b9d69":"Έπειτα..."},"en-AU":{"after_48b9d69":"After..","at_the_bottom_a6a5f0fe":"At the Bottom","at_the_top_fa836591":"At the Top","before_cb32fc0":"Before.."},"en-AU-x-unimelb":{"after_48b9d69":"After..","at_the_bottom_a6a5f0fe":"At the Bottom","at_the_top_fa836591":"At the Top","before_cb32fc0":"Before.."},"en-CA":{"after_48b9d69":"After..","at_the_bottom_a6a5f0fe":"At the Bottom","at_the_top_fa836591":"At the Top","before_cb32fc0":"Before.."},"en-GB":{"after_48b9d69":"After...","at_the_bottom_a6a5f0fe":"At the bottom","at_the_top_fa836591":"At the top","before_cb32fc0":"Before…"},"en-GB-x-lbs":{"after_48b9d69":"After...","at_the_bottom_a6a5f0fe":"At the bottom","at_the_top_fa836591":"At the top","before_cb32fc0":"Before…"},"en-GB-x-ukhe":{"after_48b9d69":"After...","at_the_bottom_a6a5f0fe":"At the bottom","at_the_top_fa836591":"At the top","before_cb32fc0":"Before…"},"es":{"after_48b9d69":"Después...","at_the_bottom_a6a5f0fe":"En la parte inferior","at_the_top_fa836591":"En la parte superior","before_cb32fc0":"Antes..."},"fa":{"after_48b9d69":"بعد از ..","at_the_bottom_a6a5f0fe":"در پایین","at_the_top_fa836591":"در بالا","before_cb32fc0":"قبل از.."},"fi":{"after_48b9d69":"Jälkeen...","at_the_bottom_a6a5f0fe":"Alaosassa","at_the_top_fa836591":"Yläosassa","before_cb32fc0":"Ennen..."},"fr":{"after_48b9d69":"Après...","at_the_bottom_a6a5f0fe":"En bas","at_the_top_fa836591":"En haut","before_cb32fc0":"Avant..."},"fr-CA":{"after_48b9d69":"Après..","at_the_bottom_a6a5f0fe":"En bas","at_the_top_fa836591":"En haut","before_cb32fc0":"Avant.."},"he":{"after_48b9d69":"לאחר...","at_the_bottom_a6a5f0fe":"בתחתית","at_the_top_fa836591":"בכותרת","before_cb32fc0":"לפני.."},"ht":{"after_48b9d69":"Aprè...","at_the_bottom_a6a5f0fe":"Anba","at_the_top_fa836591":"Anlè","before_cb32fc0":"Anvan..."},"hu":{"after_48b9d69":"Után...","at_the_bottom_a6a5f0fe":"A lap alján","at_the_top_fa836591":"A lap tetején","before_cb32fc0":"Előtte..."},"is":{"after_48b9d69":"Eftir...","at_the_bottom_a6a5f0fe":"Neðst","at_the_top_fa836591":"Efst","before_cb32fc0":"Áður..."},"it":{"after_48b9d69":"Dopo...","at_the_bottom_a6a5f0fe":"In basso","at_the_top_fa836591":"In alto","before_cb32fc0":"Prima..."},"ja":{"after_48b9d69":"...後","at_the_bottom_a6a5f0fe":"下へ","at_the_top_fa836591":"上へ","before_cb32fc0":"...前"},"mi":{"after_48b9d69":"I muri ake..","at_the_bottom_a6a5f0fe":"I raro","at_the_top_fa836591":"I runga","before_cb32fc0":"I mua ....."},"nb":{"after_48b9d69":"Etter..","at_the_bottom_a6a5f0fe":"Ved bunnen","at_the_top_fa836591":"Ved toppen","before_cb32fc0":"Før.."},"nb-x-k12":{"after_48b9d69":"Etter..","at_the_bottom_a6a5f0fe":"Ved bunnen","at_the_top_fa836591":"Ved toppen","before_cb32fc0":"Før.."},"nl":{"after_48b9d69":"Na...","at_the_bottom_a6a5f0fe":"Onderaan","at_the_top_fa836591":"Bovenaan","before_cb32fc0":"Voor..."},"nn":{"after_48b9d69":"Etter..","at_the_bottom_a6a5f0fe":"Nedst","at_the_top_fa836591":"Øvst","before_cb32fc0":"Før..."},"pl":{"after_48b9d69":"Po...","at_the_bottom_a6a5f0fe":"Na dole","at_the_top_fa836591":"Na górze","before_cb32fc0":"Przed..."},"pt":{"after_48b9d69":"Após...","at_the_bottom_a6a5f0fe":"No fundo","at_the_top_fa836591":"No topo","before_cb32fc0":"Antes..."},"pt-BR":{"after_48b9d69":"Depois...","at_the_bottom_a6a5f0fe":"No final","at_the_top_fa836591":"No topo","before_cb32fc0":"Antes..."},"ru":{"after_48b9d69":"После...","at_the_bottom_a6a5f0fe":"В нижней части","at_the_top_fa836591":"В верхней части","before_cb32fc0":"До..."},"sl":{"after_48b9d69":"Po ...","at_the_bottom_a6a5f0fe":"Na dnu","at_the_top_fa836591":"Na vrhu","before_cb32fc0":"Pred ..."},"sv":{"after_48b9d69":"Efter ...","at_the_bottom_a6a5f0fe":"Längst ned","at_the_top_fa836591":"Längst upp","before_cb32fc0":"Före ..."},"sv-x-k12":{"after_48b9d69":"Efter ...","at_the_bottom_a6a5f0fe":"Längst ned","at_the_top_fa836591":"Längst upp","before_cb32fc0":"Före ..."},"tr":{"after_48b9d69":"..den sonra","at_the_bottom_a6a5f0fe":"Alt kısımda","at_the_top_fa836591":"Üst kısımda","before_cb32fc0":"Önce.."},"uk":{"after_48b9d69":"Після...","at_the_bottom_a6a5f0fe":"Внизу","at_the_top_fa836591":"Наверху","before_cb32fc0":"Перед.."},"zh-Hans":{"after_48b9d69":"...之后","at_the_bottom_a6a5f0fe":"位于底部","at_the_top_fa836591":"位于顶部","before_cb32fc0":"...之前"},"zh-Hant":{"after_48b9d69":"之後...","at_the_bottom_a6a5f0fe":"在底部","at_the_top_fa836591":"在頂部","before_cb32fc0":"之前..."}}'
        )
      );
      a("jQeR");
      a("0sPK");
      var l = o["default"].scoped("move_positions");
      function c(e, t) {
        const a = e.slice();
        const o = a.indexOf(t);
        -1 !== o && a.splice(o, 1);
        return a;
      }
      function i(e, t) {
        let a = e.slice();
        t.forEach((e) => {
          a = c(a, e);
        });
        return a;
      }
      const s = {
        first: {
          type: "absolute",
          get label() {
            return l.t("At the Top");
          },
          apply: ({ items: e, order: t }) => [...e, ...i(t, e)],
        },
        before: {
          type: "relative",
          get label() {
            return l.t("Before..");
          },
          apply: ({ order: e, items: t, relativeTo: a }) => {
            const o = i(e, t);
            return [...o.slice(0, a), ...t, ...o.slice(a)];
          },
        },
        after: {
          type: "relative",
          get label() {
            return l.t("After..");
          },
          apply: ({ order: e, items: t, relativeTo: a }) => {
            const o = i(e, t);
            return [...o.slice(0, a + 1), ...t, ...o.slice(a + 1)];
          },
        },
        last: {
          type: "absolute",
          get label() {
            return l.t("At the Bottom");
          },
          apply: ({ order: e, items: t }) => [...i(e, t), ...t],
        },
      };
    },
    bmrg: function (e, t, a) {
      "use strict";
      a.d(t, "b", function () {
        return O;
      });
      a.d(t, "a", function () {
        return C;
      });
      a.d(t, "c", function () {
        return x;
      });
      var o = a("q1tI");
      var _ = a.n(o);
      var l = a("i8i4");
      var c = a.n(l);
      var i = a("An8g");
      var s = a("pQTu");
      var n = a("m0r6");
      Object(n["a"])(
        JSON.parse(
          '{"ar":{"close_move_tray_8609e988":"إغلاق نقل العلبة","move_item_failed_8e4c1db6":"فشل نقل العنصر","move_to_25d7ef11":"نقل إلى"},"ca":{"close_move_tray_8609e988":"tanca la safata de desplaçament","move_item_failed_8e4c1db6":"No s\'ha pogut desplaçar l\'element","move_to_25d7ef11":"Desplaça a"},"cy":{"close_move_tray_8609e988":"cau’r ardal symud","move_item_failed_8e4c1db6":"Wedi methu Symud Eitem","move_to_25d7ef11":"Symud I"},"da":{"close_move_tray_8609e988":"luk flytte-bakken","move_item_failed_8e4c1db6":"Flytning af element ikke udført","move_to_25d7ef11":"Flyt til"},"da-x-k12":{"close_move_tray_8609e988":"luk flytte-bakken","move_item_failed_8e4c1db6":"Flytning af element ikke udført","move_to_25d7ef11":"Flyt til"},"de":{"close_move_tray_8609e988":"Fach schließen/verschieben","move_item_failed_8e4c1db6":"Objekt verschieben fehlgeschlagen","move_to_25d7ef11":"Verschieben nach"},"en-AU":{"close_move_tray_8609e988":"close move tray","move_item_failed_8e4c1db6":"Move Item Failed","move_to_25d7ef11":"Move To"},"en-AU-x-unimelb":{"close_move_tray_8609e988":"close move tray","move_item_failed_8e4c1db6":"Move Item Failed","move_to_25d7ef11":"Move To"},"en-CA":{"close_move_tray_8609e988":"close move tray","move_item_failed_8e4c1db6":"Move Item Failed","move_to_25d7ef11":"Move To"},"en-GB":{"close_move_tray_8609e988":"close move tray","move_item_failed_8e4c1db6":"Move item failed","move_to_25d7ef11":"Move to"},"en-GB-x-lbs":{"close_move_tray_8609e988":"close move tray","move_item_failed_8e4c1db6":"Move item failed","move_to_25d7ef11":"Move to"},"en-GB-x-ukhe":{"close_move_tray_8609e988":"close move tray","move_item_failed_8e4c1db6":"Move item failed","move_to_25d7ef11":"Move to"},"es":{"close_move_tray_8609e988":"cerrar la bandeja de movimiento","move_item_failed_8e4c1db6":"Ha fallado Mover item","move_to_25d7ef11":"Mover a"},"fa":{"close_move_tray_8609e988":"بستن سینی انتقال","move_item_failed_8e4c1db6":"انتقال مورد ناموفق بود.","move_to_25d7ef11":"انتقال به "},"fi":{"close_move_tray_8609e988":"sulje siirtotyökalun valintaruutu","move_item_failed_8e4c1db6":"Kohteen siirto epäonnistui","move_to_25d7ef11":"Siirrä kohteeseen"},"fr":{"close_move_tray_8609e988":"fermer le bac des déplacements","move_item_failed_8e4c1db6":"Échec du déplacement de l’élément","move_to_25d7ef11":"Déplacer vers"},"fr-CA":{"close_move_tray_8609e988":"fermer le plateau de déplacement","move_item_failed_8e4c1db6":"Déplacement d’élément en échec","move_to_25d7ef11":"Déplacer vers"},"he":{"close_move_tray_8609e988":"סגירת העברת תיבה","move_item_failed_8e4c1db6":"העברת פריט נכשלה","move_to_25d7ef11":"העבר ל"},"ht":{"close_move_tray_8609e988":"Fèmen plato deplasman","move_item_failed_8e4c1db6":"Echèk Deplasman Eleman","move_to_25d7ef11":"Ale nan"},"hu":{"move_item_failed_8e4c1db6":"Elem áthelyezése sikertelen","move_to_25d7ef11":"Áthelyezés ide"},"is":{"close_move_tray_8609e988":"loka færslubakka","move_item_failed_8e4c1db6":"Ekki tókst að færa atriði","move_to_25d7ef11":"Færa til"},"it":{"close_move_tray_8609e988":"chiudi/sposta riquadro","move_item_failed_8e4c1db6":"Spostamento elemento non riuscito","move_to_25d7ef11":"Passa a"},"ja":{"close_move_tray_8609e988":"移動トレイを閉じる","move_item_failed_8e4c1db6":"アイテム移動に失敗","move_to_25d7ef11":"移動先"},"mi":{"close_move_tray_8609e988":"katia neke pereki","move_item_failed_8e4c1db6":"Neke Tūemi i Rahua","move_to_25d7ef11":"Nuku ki"},"nb":{"close_move_tray_8609e988":"nær flytt brett","move_item_failed_8e4c1db6":"Flytting av element feilet","move_to_25d7ef11":"Flytt til"},"nb-x-k12":{"close_move_tray_8609e988":"nær flytt brett","move_item_failed_8e4c1db6":"Flytting av element feilet","move_to_25d7ef11":"Flytt til"},"nl":{"close_move_tray_8609e988":"menu verplaatsen sluiten","move_item_failed_8e4c1db6":"Item verplaatsen mislukt","move_to_25d7ef11":"Verplaatsen naar"},"nn":{"close_move_tray_8609e988":"lukk flyttmeny","move_item_failed_8e4c1db6":"Flytting av element mislukkast","move_to_25d7ef11":"Flytt til"},"pl":{"close_move_tray_8609e988":"zamknij panel","move_item_failed_8e4c1db6":"Nie przeniesiono elementu","move_to_25d7ef11":"Przenieś do"},"pt":{"close_move_tray_8609e988":"bandeja de movimento fechado","move_item_failed_8e4c1db6":"Mover item falhou","move_to_25d7ef11":"Mover para"},"pt-BR":{"close_move_tray_8609e988":"fechar mover bandeja","move_item_failed_8e4c1db6":"Mover item com falha","move_to_25d7ef11":"Mover para"},"ru":{"close_move_tray_8609e988":"закрыть лоток отправки","move_item_failed_8e4c1db6":"Не удалось переместить элемент","move_to_25d7ef11":"Переместить в"},"sl":{"close_move_tray_8609e988":"Zapri trak za premikanje","move_item_failed_8e4c1db6":"Premikanje predmeta ni uspelo","move_to_25d7ef11":"Premakni v"},"sv":{"close_move_tray_8609e988":"Stäng flyttfacket","move_item_failed_8e4c1db6":"Det gick inte att flytta objektet","move_to_25d7ef11":"Flytta till"},"sv-x-k12":{"close_move_tray_8609e988":"Stäng flyttfacket","move_item_failed_8e4c1db6":"Det gick inte att flytta objektet","move_to_25d7ef11":"Flytta till"},"tr":{"close_move_tray_8609e988":"taşı yan menüsünü kapat","move_to_25d7ef11":"Şuraya Taşı"},"uk":{"close_move_tray_8609e988":"закрити панель переміщення","move_item_failed_8e4c1db6":"Невдале переміщення елементу ","move_to_25d7ef11":"Перемістити до"},"zh-Hans":{"close_move_tray_8609e988":"关闭移动托盘","move_item_failed_8e4c1db6":"移动项目失败","move_to_25d7ef11":"移动到"},"zh-Hant":{"close_move_tray_8609e988":"關閉移動收集箱","move_item_failed_8e4c1db6":"移動項目失敗","move_to_25d7ef11":"移至"}}'
        )
      );
      a("jQeR");
      a("0sPK");
      var r = s["default"].scoped("move_item_tray");
      var f = a("x1Tw");
      a("17x9");
      var b = a("7Hz5");
      var d = a("gSD+");
      var m = a("S4Kx");
      var p = a("Mmr1");
      var v = a("dqQ7");
      a("Cf/T");
      Object(n["a"])(
        JSON.parse(
          '{"ar":{"cancel_caeb1e68":"إلغاء","group_select_330df8bd":"تحديد المجموعة","move_abf00365":"نقل"},"ca":{"cancel_caeb1e68":"Cancel·la","group_select_330df8bd":"Selecció de grup","move_abf00365":"Desplaça"},"cy":{"cancel_caeb1e68":"Canslo","group_select_330df8bd":"Dewis Grŵp","move_abf00365":"Symud"},"da":{"cancel_caeb1e68":"Annuller","group_select_330df8bd":"Vælg gruppe","move_abf00365":"Flyt"},"da-x-k12":{"cancel_caeb1e68":"Annuller","group_select_330df8bd":"Vælg gruppe","move_abf00365":"Flyt"},"de":{"cancel_caeb1e68":"Abbrechen","group_select_330df8bd":"Gruppenauswahl","move_abf00365":"Verschieben"},"el":{"cancel_caeb1e68":"Ακύρωση","move_abf00365":"Μετακίνησε"},"en-AU":{"cancel_caeb1e68":"Cancel","group_select_330df8bd":"Group Select","move_abf00365":"Move"},"en-AU-x-unimelb":{"cancel_caeb1e68":"Cancel","group_select_330df8bd":"Group Select","move_abf00365":"Move"},"en-CA":{"cancel_caeb1e68":"Cancel","group_select_330df8bd":"Group Select","move_abf00365":"Move"},"en-GB":{"cancel_caeb1e68":"Cancel","group_select_330df8bd":"Group select","move_abf00365":"Move"},"en-GB-x-lbs":{"cancel_caeb1e68":"Cancel","group_select_330df8bd":"Group select","move_abf00365":"Move"},"en-GB-x-ukhe":{"cancel_caeb1e68":"Cancel","group_select_330df8bd":"Group select","move_abf00365":"Move"},"es":{"cancel_caeb1e68":"Cancelar","group_select_330df8bd":"Seleccionar grupo","move_abf00365":"Mover"},"fa":{"cancel_caeb1e68":"لغو","group_select_330df8bd":"گروه انتخاب شد","move_abf00365":"انتقال"},"fi":{"cancel_caeb1e68":"Peruuta","group_select_330df8bd":"Ryhmän valinta","move_abf00365":"Siirrä"},"fr":{"cancel_caeb1e68":"Annuler","group_select_330df8bd":"Sélection de groupe","move_abf00365":"Déplacer"},"fr-CA":{"cancel_caeb1e68":"Annuler","group_select_330df8bd":"Sélection d\'un groupe","move_abf00365":"Déplacer"},"he":{"cancel_caeb1e68":"ביטול","group_select_330df8bd":"בחירה קבוצתית","move_abf00365":"העברה"},"ht":{"cancel_caeb1e68":"Anile","group_select_330df8bd":"Seleksyon Gwoup","move_abf00365":"Deplase"},"hu":{"cancel_caeb1e68":"Mégse","move_abf00365":"Áthelyezés"},"hy":{"cancel_caeb1e68":"Չեղյալ համարել","move_abf00365":"Տեղափոխել"},"is":{"cancel_caeb1e68":"Hætta við","group_select_330df8bd":"Hópval","move_abf00365":"Færa"},"it":{"cancel_caeb1e68":"Annulla","group_select_330df8bd":"Selezione gruppo","move_abf00365":"Sposta"},"ja":{"cancel_caeb1e68":"キャンセル","group_select_330df8bd":"グループ選択","move_abf00365":"移動"},"ko":{"cancel_caeb1e68":"취소","move_abf00365":"이동"},"mi":{"cancel_caeb1e68":"Whakakore","group_select_330df8bd":"Rōpū Tīpako","move_abf00365":"Nuku"},"nb":{"cancel_caeb1e68":"Avbryt","group_select_330df8bd":"Gruppevalg","move_abf00365":"Flytt"},"nb-x-k12":{"cancel_caeb1e68":"Avbryt","group_select_330df8bd":"Gruppevalg","move_abf00365":"Flytt"},"nl":{"cancel_caeb1e68":"Annuleren","group_select_330df8bd":"Groep selecteren","move_abf00365":"Verplaatsen"},"nn":{"cancel_caeb1e68":"Avbryt","group_select_330df8bd":"Vel gruppevis","move_abf00365":"Flytt"},"pl":{"cancel_caeb1e68":"Anuluj","group_select_330df8bd":"Wybór grupowy","move_abf00365":"Przenieś"},"pt":{"cancel_caeb1e68":"Cancelar","group_select_330df8bd":"Seleção de grupo","move_abf00365":"Mover"},"pt-BR":{"cancel_caeb1e68":"Cancelar","group_select_330df8bd":"Seleção de grupo","move_abf00365":"Mover"},"ru":{"cancel_caeb1e68":"Отменить","group_select_330df8bd":"Выбор группы","move_abf00365":"Переместить"},"sl":{"cancel_caeb1e68":"Prekliči","group_select_330df8bd":"Izbira skupine","move_abf00365":"Premakni"},"sv":{"cancel_caeb1e68":"Avbryt","group_select_330df8bd":"Gruppval","move_abf00365":"Flytta"},"sv-x-k12":{"cancel_caeb1e68":"Avbryt","group_select_330df8bd":"Gruppval","move_abf00365":"Flytta"},"tr":{"cancel_caeb1e68":"İptal","move_abf00365":"Taşı"},"uk":{"cancel_caeb1e68":"Скасувати","group_select_330df8bd":"Вибір групи","move_abf00365":"Перемітитися"},"zh-Hans":{"cancel_caeb1e68":"取消","group_select_330df8bd":"小组选择","move_abf00365":"移动"},"zh-Hant":{"cancel_caeb1e68":"取消","group_select_330df8bd":"選擇群組","move_abf00365":"移動"}}'
        )
      );
      var u = s["default"].scoped("move_select");
      var h = a("ToY9");
      var g = a("Dhzb");
      var y = a("Xx/m");
      var S = a("5JRF");
      var k;
      class A extends _.a.Component {
        constructor(e) {
          super(e);
          this.selectGroup = (e) => {
            this.setState({
              selectedGroup:
                this.props.moveOptions.groups.find(
                  (t) => t.id === e.target.value
                ) || null,
            });
          };
          this.selectPosition = (e) => {
            this.setState({ selectedPosition: h["a"][e.target.value] || null });
          };
          this.selectSibling = (e) => {
            this.setState({
              selectedSibling:
                "" === e.target.value ? 0 : Number(e.target.value),
            });
          };
          this.submitSelection = () => {
            const e = this.props,
              t = e.items,
              a = e.moveOptions;
            const o = this.state,
              _ = o.selectedGroup,
              l = o.selectedPosition,
              c = o.selectedSibling;
            let i = t.map(({ id: e }) => e);
            if (l) {
              const e = _ ? _.items : a.siblings;
              i = l.apply({
                items: t.map(({ id: e }) => e),
                order: e.map(({ id: e }) => e),
                relativeTo: c,
              });
            }
            this.props.onSelect({
              groupId: a.groups ? _.id : null,
              itemIds: t.map(({ id: e }) => e),
              order: i,
            });
          };
          this.state = {
            selectedGroup:
              this.props.moveOptions.groups && this.getFilteredGroups()[0],
            selectedPosition: h["a"].first,
            selectedSibling: 0,
          };
        }
        hasSelectedPosition() {
          const e = this.state,
            t = e.selectedSibling,
            a = e.selectedPosition;
          const o = a && "absolute" === a.type;
          return !!a && (o || null !== t);
        }
        getFilteredGroups() {
          const e = this.props,
            t = e.moveOptions,
            a = e.items;
          let o = t.groups;
          t.excludeCurrent &&
            a[0].groupId &&
            (o = o.filter((e) => e.id !== a[0].groupId));
          return o;
        }
        isDoneSelecting() {
          const e = this.state.selectedGroup;
          return this.props.moveOptions.groups
            ? e && e.items && e.items.length
              ? this.hasSelectedPosition()
              : !!e
            : this.hasSelectedPosition();
        }
        renderSelectGroup() {
          const e = this.state,
            t = e.selectedGroup,
            a = e.selectedPosition;
          const o = this.props.items;
          const _ = !!(t && t.items && t.items.length);
          const l = this.getFilteredGroups(this.props);
          return Object(i["a"])(
            "div",
            {},
            void 0,
            Object(i["a"])(g["a"], {
              label: u.t("Group Select"),
              className: "move-select__group",
              onChange: this.selectGroup,
              options: l.map((e) =>
                Object(i["a"])("option", { value: e.id }, e.id, e.title)
              ),
              selectOneDefault: false,
            }),
            _
              ? Object(i["a"])(g["b"], {
                  items: o,
                  siblings: t.items,
                  selectedPosition: a,
                  selectPosition: this.selectPosition,
                  selectSibling: this.selectSibling,
                })
              : null
          );
        }
        render() {
          const e = this.props.moveOptions,
            t = e.groups,
            a = e.siblings;
          const o = this.props.items;
          const _ = this.state.selectedPosition;
          return Object(i["a"])(
            "div",
            { className: "move-select" },
            void 0,
            this.props.moveOptions.groupsLabel &&
              Object(i["a"])(
                S["a"],
                { weight: "bold" },
                void 0,
                this.props.moveOptions.groupsLabel
              ),
            t
              ? this.renderSelectGroup()
              : Object(i["a"])(g["b"], {
                  items: o,
                  siblings: a,
                  selectedPosition: _,
                  selectPosition: this.selectPosition,
                  selectSibling: this.selectSibling,
                }),
            Object(i["a"])(
              m["a"],
              { textAlign: "end", display: "block" },
              void 0,
              k || (k = Object(i["a"])("hr", { "aria-hidden": "true" })),
              Object(i["a"])(
                y["a"],
                {
                  id: "move-item-tray-cancel-button",
                  onClick: this.props.onClose,
                  margin: "0 x-small 0 0",
                },
                void 0,
                u.t("Cancel")
              ),
              Object(i["a"])(
                y["a"],
                {
                  id: "move-item-tray-submit-button",
                  disabled: !this.isDoneSelecting(),
                  type: "submit",
                  variant: "primary",
                  onClick: this.submitSelection,
                  margin: "0 x-small 0 0",
                },
                void 0,
                u.t("Move")
              )
            )
          );
        }
      }
      class P extends _.a.Component {
        constructor(...e) {
          super(...e);
          this.state = { open: true };
          this.onExited = () => {
            setTimeout(() => {
              const e = this.props.focusOnExit(this.props.items[0]);
              e && e.focus();
            });
            this.props.onExited && this.props.onExited();
          };
          this.onMoveSelect = ({
            order: e,
            itemId: t,
            groupId: a,
            itemIds: o,
          }) => {
            const _ = this.props.formatSaveUrl({ itemId: t, groupId: a });
            const l = _
              ? f["a"].post(_, this.props.formatSaveData(e))
              : Promise.resolve({ data: e });
            l.then((e) => {
              this.props.onMoveSuccess({
                data: e.data,
                groupId: a,
                itemId: t,
                itemIds: o,
              });
              this.close();
            }).catch(Object(v["b"])(r.t("Move Item Failed")));
          };
          this.open = () => {
            this.setState({ open: true });
          };
          this.close = () => {
            this.setState({ open: false });
          };
        }
        render() {
          return Object(i["a"])(
            b["a"],
            {
              label: this.props.title,
              open: this.state.open,
              onDismiss: this.close,
              onExited: this.onExited,
              placement: "end",
              shouldContainFocus: true,
            },
            void 0,
            Object(i["a"])(
              p["a"],
              { placement: "start", onClick: this.close },
              void 0,
              r.t("close move tray")
            ),
            Object(i["a"])(
              d["a"],
              { margin: "small xx-large", level: "h4", as: "h2" },
              void 0,
              this.props.title
            ),
            Object(i["a"])(
              m["a"],
              { display: "block", padding: "medium medium large" },
              void 0,
              Object(i["a"])(A, {
                items: this.props.items,
                moveOptions: this.props.moveOptions,
                onSelect: this.onMoveSelect,
                onClose: this.close,
              })
            )
          );
        }
      }
      P.defaultProps = {
        get title() {
          return r.t("Move To");
        },
        focusOnExit: () => null,
        formatSaveUrl: () => null,
        formatSaveData: (e) => ({ order: e.join(",") }),
        onExited: () => {},
        onMoveSuccess: () => {},
      };
      const j = "move_item_tray";
      function O(e, t = document.body) {
        let a = document.getElementById(j);
        if (!a) {
          a = document.createElement("div");
          a.setAttribute("id", j);
          t.appendChild(a);
        }
        c.a.render(
          _.a.createElement(
            P,
            Object.assign({}, e, { ref: (e) => e && e.open() })
          ),
          a
        );
      }
      const C = {
        collectionToItems: (e, t = (e) => e.models) =>
          t(e).map((e) => ({
            id: e.attributes.id,
            title: e.attributes.name || e.attributes.title,
          })),
        collectionToGroups(e, t, a = () => true) {
          return e.models.filter(a).map((e) => ({
            id: e.attributes.id,
            title: e.attributes.name || e.attributes.title,
            items: this.collectionToItems(t(e)),
          }));
        },
        reorderInCollection(e, t, a = t.collection) {
          e.forEach((e, t) => {
            const o = a.get(e);
            o && o.set("position", t + 1);
          });
          a.sort();
          a.reset(a.models);
        },
        reorderAcrossCollections(e, t, a, o) {
          let _ = a.collection.view.parentCollection.get(t).get(o.model);
          if (_ && _ !== a.collection) {
            a.collection.remove(a);
            _.add(a);
            o.parent && a.set(o.parent, t);
          } else _ = a.collection;
          this.reorderInCollection(e, a, _);
        },
        reorderAllItemsIntoNewCollection(e, t, a, o) {
          let _ = a.collection.get(t).get(o.model);
          if (_ && _ !== a.collection) {
            const e = a.get(o.model).models.slice();
            e.forEach((e) => {
              a.get(o.model).remove(e);
              _.add(e);
            });
            o.parent && a.set(o.parent, t);
          } else _ = a.collection;
          this.reorderInCollection(e, a, _);
        },
      };
      function x(e, t, a = (e) => "#" + e) {
        const o = e.reduce((e, o) => {
          const _ = t.querySelector(a(o));
          if (null == _) return e;
          e[o] = _;
          t.removeChild(_);
          return e;
        }, {});
        e.forEach((e) => {
          null != o[e] && t.appendChild(o[e]);
        });
      }
    },
  },
]);

//# sourceMappingURL=63-c-8069ddedeb.js.map

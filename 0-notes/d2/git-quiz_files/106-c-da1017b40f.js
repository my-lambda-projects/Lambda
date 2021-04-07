( window[ "canvasWebpackJsonp" ] = window[ "canvasWebpackJsonp" ] || [] ).push( [
  [ 106 ], {
    "3UD+": function ( e, t ) {
      e.exports = function ( e ) {
        if ( !e.webpackPolyfill ) {
          var t = Object.create( e )
          t.children || ( t.children = [] )
          Object.defineProperty( t, "loaded", {
            enumerable: true,
            get: function () {
              return t.l
            }
          } )
          Object.defineProperty( t, "id", {
            enumerable: true,
            get: function () {
              return t.i
            }
          } )
          Object.defineProperty( t, "exports", {
            enumerable: true
          } )
          t.webpackPolyfill = 1
        }
        return t
      }
    },
    "5nFh": function ( e, t, a ) {
      "use strict"
      a.d( t, "a", ( function () {
        return g
      } ) )
      var n = a( "VTBJ" )
      var s = a( "1OyB" )
      var d = a( "vuIU" )
      var i = a( "Ji7U" )
      var r = a( "LK+K" )
      var o = a( "q1tI" )
      var _ = a( "17x9" )
      var c = a.n( _ )
      var l = a( "cClk" )
      var u = a( "BTe1" )
      var b = a( "w0Sv" )
      var f = a( "9yTY" )
      var p = function ( e ) {
        var t = e.expanded
        return {
          expanded: !t
        }
      }
      var g = function ( e ) {
        Object( i[ "a" ] )( a, e )
        var t = Object( r[ "a" ] )( a )

        function a( e ) {
          var n
          Object( s[ "a" ] )( this, a )
          n = t.call( this )
          n.handleToggle = function ( e ) {
            n.isControlled() || n.setState( p )
            n.props.onToggle( e, !n.expanded )
          }
          n.state = {
            expanded: n.isControlled( e ) ? e.expanded : !!e.defaultExpanded
          }
          n._contentId = Object( u[ "a" ] )( "Expandable__content" )
          return n
        }
        Object( d[ "a" ] )( a, [ {
          key: "isControlled",
          value: function () {
            var e = arguments.length > 0 && void 0 !== arguments[ 0 ] ? arguments[ 0 ] : this.props
            return "boolean" === typeof e.expanded
          }
        }, {
          key: "render",
          value: function () {
            var e = this
            var t = this.props,
              a = t.children,
              s = t.render,
              d = void 0 === s ? a : s
            return "function" === typeof d ? d( {
              expanded: this.expanded,
              getToggleProps: function () {
                var t = arguments.length > 0 && void 0 !== arguments[ 0 ] ? arguments[ 0 ] : {}
                return Object( n[ "a" ] )( {
                  "aria-controls": e._contentId,
                  "aria-expanded": e.expanded,
                  onClick: Object( f[ "a" ] )( e.handleToggle, t.onClick )
                }, t )
              },
              getDetailsProps: function ( t ) {
                return {
                  id: e._contentId
                }
              }
            } ) : null
          }
        }, {
          key: "expanded",
          get: function () {
            return this.isControlled() ? this.props.expanded : this.state.expanded
          }
        } ], [ {
          key: "getDerivedStateFromProps",
          value: function ( e, t ) {
            return "boolean" === typeof e.expanded && e.expanded !== t.expanded ? {
              expanded: e.expanded
            } : null
          }
        } ] )
        a.displayName = "Expandable"
        return a
      }( o[ "Component" ] )
      g.propTypes = {
        expanded: Object( l[ "a" ] )( c.a.bool, "onToggle", "defaultExpanded" ),
        defaultExpanded: c.a.bool,
        onToggle: c.a.func,
        children: c.a.func,
        render: c.a.func
      }
      g.defaultProps = {
        defaultExpanded: false,
        onToggle: function ( e, t ) {},
        expanded: void 0,
        children: null,
        render: void 0
      }
      Object( b[ "a" ] )( g )
    },
    CyXg: function ( e, t, a ) {
      "use strict"
      a.d( t, "a", ( function () {
        return u
      } ) )
      var n = a( "VTBJ" )
      var s = a( "1OyB" )
      var d = a( "vuIU" )
      var i = a( "Ji7U" )
      var r = a( "LK+K" )
      var o = a( "q1tI" )
      var _ = a.n( o )
      var c = a( "CSQ8" )
      var l = _.a.createElement( "path", {
        d: "M925.966182,1226.25955 C944.762449,1253.5558 975.234883,1253.55919 994.033486,1226.25955 L1345.1073,716.424242 C1363.90357,689.127987 1352.28747,667 1319.14817,667 L600.851498,667 C567.718398,667 556.093763,689.124596 574.892365,716.424242 L925.966182,1226.25955 Z",
        fillRule: "evenodd",
        stroke: "none",
        strokeWidth: "1",
        transform: "matrix(-1 0 0 1 1920 0)"
      } )
      var u = function ( e ) {
        Object( i[ "a" ] )( a, e )
        var t = Object( r[ "a" ] )( a )

        function a() {
          Object( s[ "a" ] )( this, a )
          return t.apply( this, arguments )
        }
        Object( d[ "a" ] )( a, [ {
          key: "render",
          value: function () {
            return _.a.createElement( c[ "a" ], Object.assign( {}, this.props, {
              name: "IconMiniArrowDown",
              viewBox: "0 0 1920 1920"
            } ), l )
          }
        } ] )
        a.displayName = "IconMiniArrowDownSolid"
        return a
      }( o[ "Component" ] )
      u.glyphName = "mini-arrow-down"
      u.variant = "Solid"
      u.propTypes = Object( n[ "a" ] )( {}, c[ "a" ].propTypes )
    },
    GXQz: function ( e, t, a ) {
      "use strict"
      a.r( t )
      var n = a( "ANjH" )
      var s = a( "An8g" )
      var d = a( "q1tI" )
      var i = a.n( d )
      var r = a( "i8i4" )
      var o = a.n( r )
      var _ = a( "/MKj" )
      var c = a( "17x9" )
      var l = a.n( c )
      var u = a( "uSnb" )
      var b = a( "pQTu" )
      var f = a( "m0r6" )
      Object( f[ "a" ] )( JSON.parse( '{"ar":{"loading_bde52856":"يتم الآن التحميل...","loading_data_ecd89ba":"جاري تحميل البيانات..","mastery_paths_breakdown_6e0b5fce":"تصنيف مسارات الإتقان"},"ca":{"loading_bde52856":"S\'està carregant","loading_data_ecd89ba":"S\'estan carregant les dades...","mastery_paths_breakdown_6e0b5fce":"Desglossament dels camins cap al domini"},"cy":{"loading_bde52856":"Wrthi’n llwytho","loading_data_ecd89ba":"Wrthi’n llwytho data...","mastery_paths_breakdown_6e0b5fce":"Dadansoddi Llwybrau Meistroli"},"da":{"loading_bde52856":"Indlæser","loading_data_ecd89ba":"Indlæsning af data ...","mastery_paths_breakdown_6e0b5fce":"Opdeling af læringsstier"},"da-x-k12":{"loading_bde52856":"Indlæser","loading_data_ecd89ba":"Indlæsning af data ...","mastery_paths_breakdown_6e0b5fce":"Opdeling af læringsstier"},"de":{"loading_bde52856":"Wird geladen","loading_data_ecd89ba":"Daten werden geladen ...","mastery_paths_breakdown_6e0b5fce":"Übersicht der Leistungsziel-Pfade"},"el":{"loading_bde52856":"Φόρτωση"},"en-AU":{"loading_bde52856":"Loading","loading_data_ecd89ba":"Loading Data","mastery_paths_breakdown_6e0b5fce":"Mastery Paths Breakdown"},"en-AU-x-unimelb":{"loading_bde52856":"Loading","loading_data_ecd89ba":"Loading Data","mastery_paths_breakdown_6e0b5fce":"Mastery Paths Breakdown"},"en-CA":{"loading_bde52856":"Loading","loading_data_ecd89ba":"Loading Data..","mastery_paths_breakdown_6e0b5fce":"Mastery Paths Breakdown"},"en-GB":{"loading_bde52856":"Loading","loading_data_ecd89ba":"Loading Data…","mastery_paths_breakdown_6e0b5fce":"Mastery paths breakdown"},"en-GB-x-lbs":{"loading_bde52856":"Loading","loading_data_ecd89ba":"Loading Data…","mastery_paths_breakdown_6e0b5fce":"Mastery paths breakdown"},"en-GB-x-ukhe":{"loading_bde52856":"Loading","loading_data_ecd89ba":"Loading Data…","mastery_paths_breakdown_6e0b5fce":"Mastery paths breakdown"},"es":{"loading_bde52856":"Cargando","loading_data_ecd89ba":"Cargando datos...","mastery_paths_breakdown_6e0b5fce":"Desglose de los caminos del dominio"},"fa":{"loading_bde52856":"در حال بارگذاری","loading_data_ecd89ba":"در حال بارگذاری داده ها ...","mastery_paths_breakdown_6e0b5fce":"از کار افتادن مسیرهای تسلط"},"fi":{"loading_bde52856":"Ladataan","loading_data_ecd89ba":"Ladataan tietoja...","mastery_paths_breakdown_6e0b5fce":"Personoitujen oppimispolkujen erittely"},"fr":{"loading_bde52856":"En cours de chargement","loading_data_ecd89ba":"Chargement des données...","mastery_paths_breakdown_6e0b5fce":"Répartition des parcours de maîtrise"},"fr-CA":{"loading_bde52856":"Chargement","loading_data_ecd89ba":"Chargement des données...","mastery_paths_breakdown_6e0b5fce":"Répartition des parcours de maîtrise"},"he":{"loading_bde52856":"טוען","loading_data_ecd89ba":"טוען נתונים...","mastery_paths_breakdown_6e0b5fce":"מסלולי התמחות לא תקינים"},"ht":{"loading_bde52856":"Chajman","loading_data_ecd89ba":"Chajman Done...","mastery_paths_breakdown_6e0b5fce":"Repatisyon Pakou Prensipal"},"hu":{"loading_bde52856":"Töltődik","loading_data_ecd89ba":"Adatok betöltése...","mastery_paths_breakdown_6e0b5fce":"Jártassági útvonal üzemzavar"},"hy":{"loading_bde52856":"Բեռնում է"},"is":{"loading_bde52856":"Sæki","loading_data_ecd89ba":"Sæki gögn...","mastery_paths_breakdown_6e0b5fce":"Sundurliðun tileinkunarslóðar"},"it":{"loading_bde52856":"Caricamento in corso","loading_data_ecd89ba":"Caricamento dei dati in corso...","mastery_paths_breakdown_6e0b5fce":"Analisi percorsi di acquisizione padronanza"},"ja":{"loading_bde52856":"読み込み中","loading_data_ecd89ba":"データをロード中...","mastery_paths_breakdown_6e0b5fce":"熟達の過程の内訳"},"mi":{"loading_bde52856":"E tukuake ana","loading_data_ecd89ba":"Te utanga raraunga","mastery_paths_breakdown_6e0b5fce":"Papatau Mana Ara"},"nb":{"loading_bde52856":"Laster","loading_data_ecd89ba":"Laster data...","mastery_paths_breakdown_6e0b5fce":"Læringsstier Sammendrag"},"nb-x-k12":{"loading_bde52856":"Laster","loading_data_ecd89ba":"Laster data...","mastery_paths_breakdown_6e0b5fce":"Læringsstier Sammendrag"},"nl":{"loading_bde52856":"Bezig met laden...","loading_data_ecd89ba":"Gegevens laden..","mastery_paths_breakdown_6e0b5fce":"Uitsplitsing Mastery Paths"},"nn":{"loading_bde52856":"Lastar","loading_data_ecd89ba":"Lastar data..","mastery_paths_breakdown_6e0b5fce":"Sjå meistringssti-detaljar"},"pl":{"loading_bde52856":"Trwa ładowanie","loading_data_ecd89ba":"Wczytywanie danych...","mastery_paths_breakdown_6e0b5fce":"Podział ścieżek biegłości na grupy"},"pt":{"loading_bde52856":"Carregando","loading_data_ecd89ba":"A carregar dados...","mastery_paths_breakdown_6e0b5fce":"Falhas no Circuito Principal"},"pt-BR":{"loading_bde52856":"Carregando","loading_data_ecd89ba":"Carregando dados...","mastery_paths_breakdown_6e0b5fce":"Quebra de Caminhos de Domínio"},"ru":{"loading_bde52856":"Загрузка","loading_data_ecd89ba":"Загрузка данных...","mastery_paths_breakdown_6e0b5fce":"Разбивка Пути усвоения"},"sl":{"loading_bde52856":"Nalaganje","loading_data_ecd89ba":"Nalaganje podatkov ...","mastery_paths_breakdown_6e0b5fce":"Razčlenitev napredovanj v odličnosti"},"sv":{"loading_bde52856":"Laddar","loading_data_ecd89ba":"Läser in data ...","mastery_paths_breakdown_6e0b5fce":"Detaljerad information om måluppfyllelse"},"sv-x-k12":{"loading_bde52856":"Laddar","loading_data_ecd89ba":"Läser in data ...","mastery_paths_breakdown_6e0b5fce":"Detaljerad information om måluppfyllelse"},"tr":{"loading_bde52856":"Yükleniyor","mastery_paths_breakdown_6e0b5fce":"Yeterlilik Süreçleri Dökümü"},"uk":{"loading_bde52856":"Завантаження","loading_data_ecd89ba":"Завантаження даних...","mastery_paths_breakdown_6e0b5fce":"Розподіл Шляхів Майстерності"},"zh-Hans":{"loading_bde52856":"加载","loading_data_ecd89ba":"正在加载数据……","mastery_paths_breakdown_6e0b5fce":"掌握途径故障"},"zh-Hant":{"loading_bde52856":"正在載入","loading_data_ecd89ba":"載入資料中..","mastery_paths_breakdown_6e0b5fce":"精通路徑分解"}}' ) )
      a( "jQeR" )
      a( "0sPK" )
      var p = b[ "default" ].scoped( "cyoe_assignment_sidebar_breakdown_graphs" )
      var g = a( "MdYG" )
      Object( f[ "a" ] )( JSON.parse( '{"ar":{"lowerbound_to_upperbound_352a3c0b":"من %{lowerBound}+ إلى %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} من إجمالي %{totalStudents} طالب","view_range_student_details_8116d68a":"عرض تفاصيل نطاق الطالب"},"ca":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ a %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} de %{totalStudents} estudiants","view_range_student_details_8116d68a":"Visualitza els detalls dels estudiants de l\'interval"},"cy":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ at %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} allan o %{totalStudents} o fyfyrwyr","view_range_student_details_8116d68a":"Gweld manylion defnyddiwr ar gyfer yr ystod"},"da":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ til %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} ud af %{totalStudents} studerende","view_range_student_details_8116d68a":"Se område i studerendes detaljer"},"da-x-k12":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ til %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} ud af %{totalStudents} elever","view_range_student_details_8116d68a":"Se område i elevens detaljer"},"de":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ bis %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} von %{totalStudents} Studenten","view_range_student_details_8116d68a":"Studentendetails nach Bereichen anzeigen"},"en-AU":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ to %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} out of %{totalStudents} students","view_range_student_details_8116d68a":"View range student details"},"en-AU-x-unimelb":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ to %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} out of %{totalStudents} students","view_range_student_details_8116d68a":"View range student details"},"en-CA":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ to %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} out of %{totalStudents} students","view_range_student_details_8116d68a":"View range student details"},"en-GB":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ to %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} out of %{totalStudents} students","view_range_student_details_8116d68a":"View range student details"},"en-GB-x-lbs":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ to %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} out of %{totalStudents} students","view_range_student_details_8116d68a":"View range student details"},"en-GB-x-ukhe":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ to %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} out of %{totalStudents} students","view_range_student_details_8116d68a":"View range student details"},"es":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ hasta %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} de %{totalStudents} estudiantes","view_range_student_details_8116d68a":"Ver la gama de detalles del estudiante"},"fa":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ به %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} از %{totalStudents} دانشجو","view_range_student_details_8116d68a":"مشاهده بازه بندی اطلاعات دانشجو"},"fi":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ kohteeseen %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents}/%{totalStudents} opiskelijaa","view_range_student_details_8116d68a":"Tarkastele opiskelijatietojen vaihteluväliä"},"fr":{"lowerbound_to_upperbound_352a3c0b":"de %{lowerBound}+ à %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} sur %{totalStudents} élèves","view_range_student_details_8116d68a":"Voir les détails de l\'ensemble d\'élèves"},"fr-CA":{"lowerbound_to_upperbound_352a3c0b":"de %{lowerBound}+ à %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} sur %{totalStudents} étudiants","view_range_student_details_8116d68a":"Voir les détails de l\'ensemble d\'étudiant"},"he":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ ל %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} מתוך %{totalStudents} תלמידים","view_range_student_details_8116d68a":"הצגת פרטי קבוצת תלמידים"},"ht":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ a %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} sou %{totalStudents} elèv","view_range_student_details_8116d68a":"Afichaj detay gam elèv"},"hu":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ - %{upperBound}"},"is":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ til %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} af  %{totalStudents} nemendum","view_range_student_details_8116d68a":"Skoða upplýsingar um nemendahóp"},"it":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ a %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} su %{totalStudents} studenti","view_range_student_details_8116d68a":"Visualizza dettagli studenti intervallo"},"ja":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ から%{upperBound} へ","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} %{totalStudents} の受講生","view_range_student_details_8116d68a":"範囲の受講生の詳細を見る"},"mi":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ ki %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} I roto i %{totalStudents} ngā akonga","view_range_student_details_8116d68a":"Tiro whānui ngā taipitopito ākonga"},"nb":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ til %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} av %{totalStudents} studenter","view_range_student_details_8116d68a":"Vis studentdetaljserie"},"nb-x-k12":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ til %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} av %{totalStudents} elever","view_range_student_details_8116d68a":"Vis elevdetaljserie"},"nl":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ naar %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} van %{totalStudents} cursisten","view_range_student_details_8116d68a":"Weergavebereik cursistgegevens"},"nn":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ til %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} av %{totalStudents} studentar","view_range_student_details_8116d68a":"Sjå studentdetaljar innan området"},"pl":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ do %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} z %{totalStudents} uczestników","view_range_student_details_8116d68a":"Wyświetl szczegóły uczestników z zakresu"},"pt":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ a %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} de %{totalStudents} alunos","view_range_student_details_8116d68a":"Ver intervalo de detalhes do aluno"},"pt-BR":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ para %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} de %{totalStudents} alunos","view_range_student_details_8116d68a":"Visualizar detalhes do aluno do intervalo"},"ru":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ до %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} из %{totalStudents} учащихся","view_range_student_details_8116d68a":"Просмотреть сведения об учащихся из диапазона"},"sl":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ do %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} od %{totalStudents} študentov","view_range_student_details_8116d68a":"Ogled podrobnosti o študentu za razpon"},"sv":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ till %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} av %{totalStudents} studenter","view_range_student_details_8116d68a":"Visa intervall för studentdetaljer"},"sv-x-k12":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ till %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} av %{totalStudents} elever","view_range_student_details_8116d68a":"Visa intervall för elevdetaljer"},"uk":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ до %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents}з %{totalStudents}студентів","view_range_student_details_8116d68a":"Переглянути детальну інформацію про студента"},"zh-Hans":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ 到 %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} %{totalStudents}个学生","view_range_student_details_8116d68a":"查看学生详细信息范围"},"zh-Hant":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ 至 %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents}  %{totalStudents} 個學生","view_range_student_details_8116d68a":"查看範圍學生詳細資料"}}' ) )
      var m = b[ "default" ].scoped( "cyoe_assignment_sidebar_breakdown_graph_bar" )
      var v
      l.a.string, l.a.number, l.a.func
      class h extends i.a.Component {
        constructor( ...e ) {
          super( ...e )
          this.selectRange = e => {
            this.props.openSidebar( e.target )
            this.props.selectRange( this.props.rangeIndex )
          }
        }
        renderInnerBar() {
          const e = Math.min( this.props.rangeStudents / this.props.totalStudents * 100, 100 )
          const t = {
            width: e + "%"
          }
          return e > 0 ? Object( s[ "a" ] )( "div", {
            style: t,
            className: "crs-bar__horizontal-inside-fill"
          } ) : null
        }
        render() {
          const e = this.props,
            t = e.rangeStudents,
            a = e.totalStudents
          return Object( s[ "a" ] )( "div", {
            className: "crs-bar__container"
          }, void 0, Object( s[ "a" ] )( "div", {
            className: "crs-bar__horizontal-outside"
          }, void 0, v || ( v = Object( s[ "a" ] )( "div", {
            className: "crs-bar__horizontal-inside"
          } ) ), this.renderInnerBar() ), Object( s[ "a" ] )( "div", {
            className: "crs-bar__bottom"
          }, void 0, Object( s[ "a" ] )( "span", {
            className: "crs-bar__info"
          }, void 0, m.t( "%{lowerBound}+ to %{upperBound}", {
            upperBound: this.props.upperBound,
            lowerBound: this.props.lowerBound
          } ) ), Object( s[ "a" ] )( "button", {
            className: "crs-link-button",
            onClick: this.selectRange,
            title: m.t( "View range student details" )
          }, void 0, m.t( "%{rangeStudents} out of %{totalStudents} students", {
            rangeStudents: t,
            totalStudents: a
          } ) ) ) )
        }
      }
      var w = h
      l.a.object, l.a.array, l.a.func, l.a.number, l.a.bool
      class k extends i.a.Component {
        renderContent() {
          return this.props.isLoading ? Object( s[ "a" ] )( "div", {
            className: "crs-breakdown-graph__loading"
          }, void 0, Object( s[ "a" ] )( u[ "a" ], {
            renderTitle: p.t( "Loading" ),
            size: "small"
          } ), Object( s[ "a" ] )( "p", {}, void 0, p.t( "Loading Data.." ) ) ) : this.renderBars()
        }
        renderBars() {
          const e = this.props,
            t = e.ranges,
            a = e.assignment,
            n = e.enrolled,
            d = e.openSidebar,
            i = e.selectRange
          return t.map( ( {
            size: e,
            scoring_range: t
          }, r ) => Object( s[ "a" ] )( w, {
            rangeIndex: r,
            rangeStudents: e,
            totalStudents: n,
            upperBound: Object( g[ "b" ] )( t.upper_bound, a, true ),
            lowerBound: Object( g[ "b" ] )( t.lower_bound, a, false ),
            openSidebar: d,
            selectRange: i
          }, r ) )
        }
        render() {
          return Object( s[ "a" ] )( "div", {
            className: "crs-breakdown-graph"
          }, void 0, Object( s[ "a" ] )( "h2", {}, void 0, p.t( "Mastery Paths Breakdown" ) ), this.renderContent() )
        }
      }
      var y = k
      var S = a( "Xx/m" )
      var j = a( "7Hz5" )
      var z = a( "IRk9" )
      Object( f[ "a" ] )( JSON.parse( '{"ar":{"close_details_sidebar_ff8f663d":"إغلاق الشريط الجانبي للتفاصيل"},"ca":{"close_details_sidebar_ff8f663d":"Tanca la barra lateral de detalls"},"cy":{"close_details_sidebar_ff8f663d":"Cau’r bar manylion ar yr ochr"},"da":{"close_details_sidebar_ff8f663d":"Luk sidepaneldetaljer"},"da-x-k12":{"close_details_sidebar_ff8f663d":"Luk sidepaneldetaljer"},"de":{"close_details_sidebar_ff8f663d":"Details-Seitenleiste schließen"},"en-AU":{"close_details_sidebar_ff8f663d":"Close details sidebar"},"en-AU-x-unimelb":{"close_details_sidebar_ff8f663d":"Close details sidebar"},"en-CA":{"close_details_sidebar_ff8f663d":"Close details sidebar"},"en-GB":{"close_details_sidebar_ff8f663d":"Close details sidebar"},"en-GB-x-lbs":{"close_details_sidebar_ff8f663d":"Close details sidebar"},"en-GB-x-ukhe":{"close_details_sidebar_ff8f663d":"Close details sidebar"},"es":{"close_details_sidebar_ff8f663d":"Cerrar la barra lateral de detalles"},"fa":{"close_details_sidebar_ff8f663d":"بستن نوار کناری جزئیات"},"fi":{"close_details_sidebar_ff8f663d":"Sulje tietojen sivupalkki"},"fr":{"close_details_sidebar_ff8f663d":"Fermer la barre latérale des détails"},"fr-CA":{"close_details_sidebar_ff8f663d":"Fermer la barre latérale des détails"},"he":{"close_details_sidebar_ff8f663d":"סגירת פירוט סרגל צדי"},"ht":{"close_details_sidebar_ff8f663d":"Fèmen detay ba lateral yo"},"is":{"close_details_sidebar_ff8f663d":"Loka hliðarslárupplýsingum"},"it":{"close_details_sidebar_ff8f663d":"Chiudi barra laterale dettagli"},"ja":{"close_details_sidebar_ff8f663d":"詳細のサイドバーを閉じる"},"mi":{"close_details_sidebar_ff8f663d":"Katia kōrero paetaha"},"nb":{"close_details_sidebar_ff8f663d":"Lukk detaljsidefeltet"},"nb-x-k12":{"close_details_sidebar_ff8f663d":"Lukk detaljsidefeltet"},"nl":{"close_details_sidebar_ff8f663d":"Zijbalk met details sluiten"},"nn":{"close_details_sidebar_ff8f663d":"Lukk detalj-sidestolpen"},"pl":{"close_details_sidebar_ff8f663d":"Zamknij pasek boczny ze szczegółami"},"pt":{"close_details_sidebar_ff8f663d":"Fechar detalhes da barra lateral"},"pt-BR":{"close_details_sidebar_ff8f663d":"Fechar barra lateral de detalhes"},"ru":{"close_details_sidebar_ff8f663d":"Закрыть боковую панель с деталями"},"sl":{"close_details_sidebar_ff8f663d":"Zapri stransko vrstico s podrobnostmi"},"sv":{"close_details_sidebar_ff8f663d":"Stäng sidofältet för detaljer"},"sv-x-k12":{"close_details_sidebar_ff8f663d":"Stäng sidofältet för detaljer"},"tr":{"close_details_sidebar_ff8f663d":"Ayrıntılar kenar çubuğunu kapat"},"uk":{"close_details_sidebar_ff8f663d":"Закрити деталі бічної панелі"},"zh-Hans":{"close_details_sidebar_ff8f663d":"关闭详细信息侧边栏"},"zh-Hant":{"close_details_sidebar_ff8f663d":"關閉詳細側邊欄"}}' ) )
      var O = b[ "default" ].scoped( "cyoe_assignment_sidebar_breakdown_details" )
      var x = a( "KIj7" )
      var A = a( "S4Kx" )
      var B = a( "CyXg" )
      var D = a( "HsON" )
      var T = a( "TSYQ" )
      var E = a.n( T )
      Object( f[ "a" ] )( JSON.parse( '{"ar":{"mastery_paths_breakdown_6e0b5fce":"تصنيف مسارات الإتقان"},"ca":{"mastery_paths_breakdown_6e0b5fce":"Desglossament dels camins cap al domini"},"cy":{"mastery_paths_breakdown_6e0b5fce":"Dadansoddi Llwybrau Meistroli"},"da":{"mastery_paths_breakdown_6e0b5fce":"Opdeling af læringsstier"},"da-x-k12":{"mastery_paths_breakdown_6e0b5fce":"Opdeling af læringsstier"},"de":{"mastery_paths_breakdown_6e0b5fce":"Übersicht der Leistungsziel-Pfade"},"en-AU":{"mastery_paths_breakdown_6e0b5fce":"Mastery Paths Breakdown"},"en-AU-x-unimelb":{"mastery_paths_breakdown_6e0b5fce":"Mastery Paths Breakdown"},"en-CA":{"mastery_paths_breakdown_6e0b5fce":"Mastery Paths Breakdown"},"en-GB":{"mastery_paths_breakdown_6e0b5fce":"Mastery paths breakdown"},"en-GB-x-lbs":{"mastery_paths_breakdown_6e0b5fce":"Mastery paths breakdown"},"en-GB-x-ukhe":{"mastery_paths_breakdown_6e0b5fce":"Mastery paths breakdown"},"es":{"mastery_paths_breakdown_6e0b5fce":"Desglose de los caminos del dominio"},"fa":{"mastery_paths_breakdown_6e0b5fce":"از کار افتادن مسیرهای تسلط"},"fi":{"mastery_paths_breakdown_6e0b5fce":"Personoitujen oppimispolkujen erittely"},"fr":{"mastery_paths_breakdown_6e0b5fce":"Répartition des parcours de maîtrise"},"fr-CA":{"mastery_paths_breakdown_6e0b5fce":"Répartition des parcours de maîtrise"},"he":{"mastery_paths_breakdown_6e0b5fce":"מסלולי התמחות לא תקינים"},"ht":{"mastery_paths_breakdown_6e0b5fce":"Repatisyon Pakou Prensipal"},"hu":{"mastery_paths_breakdown_6e0b5fce":"Jártassági útvonal üzemzavar"},"is":{"mastery_paths_breakdown_6e0b5fce":"Sundurliðun tileinkunarslóðar"},"it":{"mastery_paths_breakdown_6e0b5fce":"Analisi percorsi di acquisizione padronanza"},"ja":{"mastery_paths_breakdown_6e0b5fce":"熟達の過程の内訳"},"mi":{"mastery_paths_breakdown_6e0b5fce":"Papatau Mana Ara"},"nb":{"mastery_paths_breakdown_6e0b5fce":"Læringsstier Sammendrag"},"nb-x-k12":{"mastery_paths_breakdown_6e0b5fce":"Læringsstier Sammendrag"},"nl":{"mastery_paths_breakdown_6e0b5fce":"Uitsplitsing Mastery Paths"},"nn":{"mastery_paths_breakdown_6e0b5fce":"Sjå meistringssti-detaljar"},"pl":{"mastery_paths_breakdown_6e0b5fce":"Podział ścieżek biegłości na grupy"},"pt":{"mastery_paths_breakdown_6e0b5fce":"Falhas no Circuito Principal"},"pt-BR":{"mastery_paths_breakdown_6e0b5fce":"Quebra de Caminhos de Domínio"},"ru":{"mastery_paths_breakdown_6e0b5fce":"Разбивка Пути усвоения"},"sl":{"mastery_paths_breakdown_6e0b5fce":"Razčlenitev napredovanj v odličnosti"},"sv":{"mastery_paths_breakdown_6e0b5fce":"Detaljerad information om måluppfyllelse"},"sv-x-k12":{"mastery_paths_breakdown_6e0b5fce":"Detaljerad information om måluppfyllelse"},"tr":{"mastery_paths_breakdown_6e0b5fce":"Yeterlilik Süreçleri Dökümü"},"uk":{"mastery_paths_breakdown_6e0b5fce":"Розподіл Шляхів Майстерності"},"zh-Hans":{"mastery_paths_breakdown_6e0b5fce":"掌握途径故障"},"zh-Hant":{"mastery_paths_breakdown_6e0b5fce":"精通路徑分解"}}' ) )
      var N = b[ "default" ].scoped( "cyoe_assignment_sidebar_student_ranges_view" )
      const C = l.a.shape,
        M = l.a.string
      C( {
        course_id: M.isRequired,
        trigger_assignment: M.isRequired
      } )
      const L = l.a.shape,
        I = l.a.arrayOf,
        P = l.a.string,
        J = l.a.number
      L( {
        course_id: J,
        name: P,
        title: P,
        grading_scheme: P,
        grading_type: P.isRequired,
        points_possible: J.isRequired,
        submission_types: I( P )
      } )
      const G = l.a.shape,
        R = l.a.number
      G( {
        range: R,
        student: R
      } )
      const W = l.a.shape,
        V = l.a.string,
        U = l.a.number
      W( {
        id: U.isRequired,
        name: V.isRequired,
        avatar_url: V
      } )
      Object( f[ "a" ] )( JSON.parse( '{"ar":{"select_student_name_caaff244":"تحديد طالب %{name}"},"ca":{"select_student_name_caaff244":"Selecciona l\'estudiant %{name}"},"cy":{"select_student_name_caaff244":"Dewiswch fyfyriwr %{name}"},"da":{"select_student_name_caaff244":"Vælg studerende %{name}"},"da-x-k12":{"select_student_name_caaff244":"Vælg elev %{name}"},"de":{"select_student_name_caaff244":"Student auswählen %{name}"},"en-AU":{"select_student_name_caaff244":"Select student %{name}"},"en-AU-x-unimelb":{"select_student_name_caaff244":"Select student %{name}"},"en-CA":{"select_student_name_caaff244":"Select student %{name}"},"en-GB":{"select_student_name_caaff244":"Select student %{name}"},"en-GB-x-lbs":{"select_student_name_caaff244":"Select student %{name}"},"en-GB-x-ukhe":{"select_student_name_caaff244":"Select student %{name}"},"es":{"select_student_name_caaff244":"Seleccionar estudiante %{name}"},"fa":{"select_student_name_caaff244":"انتخاب دانشجوی %{name}"},"fi":{"select_student_name_caaff244":"Valitse opiskelija %{name}"},"fr":{"select_student_name_caaff244":"Sélectionner un élève %{name}"},"fr-CA":{"select_student_name_caaff244":"Sélectionner un étudiant %{name}"},"he":{"select_student_name_caaff244":"בחירת התלמיד %{name}"},"ht":{"select_student_name_caaff244":"Seleksyone elèv %{name}"},"is":{"select_student_name_caaff244":"Velja nemanda %{name}"},"it":{"select_student_name_caaff244":"Seleziona studente %{name}"},"ja":{"select_student_name_caaff244":"受講生の選択%{name}"},"mi":{"select_student_name_caaff244":"Tīpako ākonga %{name}"},"nb":{"select_student_name_caaff244":"Velg student %{name}"},"nb-x-k12":{"select_student_name_caaff244":"Velg elev %{name}"},"nl":{"select_student_name_caaff244":"Cursist selecteren %{name}"},"nn":{"select_student_name_caaff244":"Vel student %{name}"},"pl":{"select_student_name_caaff244":"Wybierz uczestnika %{name}"},"pt":{"select_student_name_caaff244":"Seleccionar aluno %{name}"},"pt-BR":{"select_student_name_caaff244":"Selecionar aluno %{name}"},"ru":{"select_student_name_caaff244":"Выбрать учащегося %{name}"},"sl":{"select_student_name_caaff244":"Izberi študenta %{name}"},"sv":{"select_student_name_caaff244":"Välj student %{name}"},"sv-x-k12":{"select_student_name_caaff244":"Välj elev %{name}"},"uk":{"select_student_name_caaff244":"Вибрати студента %{name}"},"zh-Hans":{"select_student_name_caaff244":"选择学生%{name}"},"zh-Hant":{"select_student_name_caaff244":"選取學生%{name}"}}' ) )
      var q = b[ "default" ].scoped( "cyoe_assignment_sidebar_student_range_itme" )
      class F extends i.a.Component {
        constructor( ...e ) {
          super( ...e )
          this.selectStudent = () => {
            this.props.selectStudent( this.props.studentIndex )
          }
        }
        render() {
          const e = this.props.student.user.avatar_image_url || "/images/messages/avatar-50.png"
          const t = this.props.student.trend
          const a = E()( {
            "crs-student__trend-icon": true,
            "crs-student__trend-icon__positive": 1 === t,
            "crs-student__trend-icon__neutral": 0 === t,
            "crs-student__trend-icon__negative": -1 === t
          } )
          const n = null !== t && void 0 !== t
          return Object( s[ "a" ] )( "div", {
            className: "crs-student-range__item"
          }, void 0, Object( s[ "a" ] )( "img", {
            src: e,
            className: "crs-student__avatar",
            onClick: this.selectStudent
          } ), Object( s[ "a" ] )( "button", {
            className: "crs-student__name crs-link-button",
            onClick: this.selectStudent,
            "aria-label": q.t( "Select student %{name}", {
              name: this.props.student.user.name
            } )
          }, void 0, this.props.student.user.name ), n && Object( s[ "a" ] )( "span", {
            className: a
          } ) )
        }
      }
      l.a.object, l.a.func
      class H extends i.a.Component {
        render() {
          this.props.range.students
          return Object( s[ "a" ] )( "div", {
            className: "crs-student-range"
          }, void 0, this.props.range.students.map( ( e, t ) => Object( s[ "a" ] )( F, {
            student: e,
            studentIndex: t,
            selectStudent: this.props.onStudentSelect
          }, e.user.id ) ) )
        }
      }
      l.a.array, l.a.func, l.a.object
      class Q extends i.a.Component {
        constructor( e ) {
          super()
          this.handleToggle = e => {
            this.setState( {
              selectedRange: e
            } )
          }
          this.state = {
            selectedRange: e.selectedPath.range
          }
        }
        renderTabs() {
          return this.props.ranges.map( ( e, t ) => {
            const a = this.state.selectedRange === t
            const n = Object( g[ "b" ] )( e.scoring_range.lower_bound, this.props.assignment, false )
            const d = Object( g[ "b" ] )( e.scoring_range.upper_bound, this.props.assignment, true )
            const i = `> ${n} - ${d}`
            return Object( s[ "a" ] )( A[ "a" ], {
              as: "div",
              padding: "xxx-small"
            }, void 0, Object( s[ "a" ] )( x[ "a" ], {
              variant: "filled",
              expanded: a,
              summary: i,
              onToggle: () => this.handleToggle( t ),
              size: "large",
              iconExpanded: B[ "a" ],
              icon: D[ "a" ]
            }, t, Object( s[ "a" ] )( H, {
              range: e,
              onStudentSelect: this.props.selectStudent
            } ) ) )
          } )
        }
        render() {
          const e = !!this.props.student
          const t = E()( {
            "crs-ranges-view": true,
            "crs-ranges-view__hidden": e
          } )
          return Object( s[ "a" ] )( "div", {
            className: t
          }, void 0, Object( s[ "a" ] )( "header", {
            className: "crs-ranges-view__header"
          }, void 0, Object( s[ "a" ] )( "h4", {}, void 0, N.t( "Mastery Paths Breakdown" ) ) ), this.renderTabs() )
        }
      }
      Object( f[ "a" ] )( JSON.parse( '{"ar":{"back_2900f52a":"عودة","loading_bde52856":"يتم الآن التحميل...","loading_data_ecd89ba":"جاري تحميل البيانات..","not_submitted_7d05fdb4":"لم يتم إرسالها","send_message_6ccc90e8":"إرسال رسالة","submitted_submitdate_bdd3bf09":"تم الإرسال: %{submitDate}","view_next_student_9fc72fef":"عرض الطالب التالي","view_previous_student_90000459":"عرض الطالب السابق","view_submission_ff3da5d":"عرض الإرسال"},"ca":{"back_2900f52a":"Enrere","loading_bde52856":"S\'està carregant","loading_data_ecd89ba":"S\'estan carregant les dades...","not_submitted_7d05fdb4":"No entregat","send_message_6ccc90e8":"Envia un missatge","submitted_submitdate_bdd3bf09":"Entregat: %{submitDate}","view_next_student_9fc72fef":"visualitza l\'estudiant següent","view_previous_student_90000459":"visualitza l\'estudiant anterior","view_submission_ff3da5d":"Visualitza l\'entrega"},"cy":{"back_2900f52a":"Yn ôl","loading_bde52856":"Wrthi’n llwytho","loading_data_ecd89ba":"Wrthi’n llwytho data...","not_submitted_7d05fdb4":"Heb Gyflwyno","send_message_6ccc90e8":"Anfon Neges","submitted_submitdate_bdd3bf09":"Wedi cyflwyno: %{submitDate}","view_next_student_9fc72fef":"gweld y myfyriwr nesaf","view_previous_student_90000459":"gweld y myfyriwr blaenorol","view_submission_ff3da5d":"Gweld Cyflwyniad"},"da":{"back_2900f52a":"Tilbage","loading_bde52856":"Indlæser","loading_data_ecd89ba":"Indlæsning af data ...","not_submitted_7d05fdb4":"Ikke indsendt","send_message_6ccc90e8":"Send besked","submitted_submitdate_bdd3bf09":"Afleveret: %{submitDate}","view_next_student_9fc72fef":"se næste studerende","view_previous_student_90000459":"se tidligere studerende","view_submission_ff3da5d":"Vis aflevering"},"da-x-k12":{"back_2900f52a":"Tilbage","loading_bde52856":"Indlæser","loading_data_ecd89ba":"Indlæsning af data ...","not_submitted_7d05fdb4":"Ikke indsendt","send_message_6ccc90e8":"Send besked","submitted_submitdate_bdd3bf09":"Afleveret: %{submitDate}","view_next_student_9fc72fef":"se næste elev","view_previous_student_90000459":"se tidligere elev","view_submission_ff3da5d":"Vis aflevering"},"de":{"back_2900f52a":"Zurück","loading_bde52856":"Wird geladen","loading_data_ecd89ba":"Daten werden geladen ...","not_submitted_7d05fdb4":"Nicht abgegeben","send_message_6ccc90e8":"Nachricht senden","submitted_submitdate_bdd3bf09":"Abgegeben am: %{submitDate}","view_next_student_9fc72fef":"Nächsten Studenten anzeigen","view_previous_student_90000459":"Vorherigen Studenten anzeigen","view_submission_ff3da5d":"Abgabe anzeigen"},"el":{"back_2900f52a":"Πίσω","loading_bde52856":"Φόρτωση"},"en-AU":{"back_2900f52a":"Back","loading_bde52856":"Loading","loading_data_ecd89ba":"Loading Data","not_submitted_7d05fdb4":"Not Submitted","send_message_6ccc90e8":"Send Message","submitted_submitdate_bdd3bf09":"Submitted: %{submitDate}","view_next_student_9fc72fef":"view next student","view_previous_student_90000459":"view previous student","view_submission_ff3da5d":"View Submission"},"en-AU-x-unimelb":{"back_2900f52a":"Back","loading_bde52856":"Loading","loading_data_ecd89ba":"Loading Data","not_submitted_7d05fdb4":"Not Submitted","send_message_6ccc90e8":"Send Message","submitted_submitdate_bdd3bf09":"Submitted: %{submitDate}","view_next_student_9fc72fef":"view next student","view_previous_student_90000459":"view previous student","view_submission_ff3da5d":"View Submission"},"en-CA":{"back_2900f52a":"Back","loading_bde52856":"Loading","loading_data_ecd89ba":"Loading Data..","not_submitted_7d05fdb4":"Not Submitted","send_message_6ccc90e8":"Send Message","submitted_submitdate_bdd3bf09":"Submitted: %{submitDate}","view_next_student_9fc72fef":"view next student","view_previous_student_90000459":"view previous student","view_submission_ff3da5d":"View Submission"},"en-GB":{"back_2900f52a":"Back","loading_bde52856":"Loading","loading_data_ecd89ba":"Loading Data…","not_submitted_7d05fdb4":"Not submitted","send_message_6ccc90e8":"Send message","submitted_submitdate_bdd3bf09":"Submitted: %{submitDate}","view_next_student_9fc72fef":"View next student","view_previous_student_90000459":"View previous student","view_submission_ff3da5d":"View submission"},"en-GB-x-lbs":{"back_2900f52a":"Back","loading_bde52856":"Loading","loading_data_ecd89ba":"Loading Data…","not_submitted_7d05fdb4":"Not submitted","send_message_6ccc90e8":"Send message","submitted_submitdate_bdd3bf09":"Submitted: %{submitDate}","view_next_student_9fc72fef":"View next student","view_previous_student_90000459":"View previous student","view_submission_ff3da5d":"View submission"},"en-GB-x-ukhe":{"back_2900f52a":"Back","loading_bde52856":"Loading","loading_data_ecd89ba":"Loading Data…","not_submitted_7d05fdb4":"Not submitted","send_message_6ccc90e8":"Send message","submitted_submitdate_bdd3bf09":"Submitted: %{submitDate}","view_next_student_9fc72fef":"View next student","view_previous_student_90000459":"View previous student","view_submission_ff3da5d":"View submission"},"es":{"back_2900f52a":"Volver","loading_bde52856":"Cargando","loading_data_ecd89ba":"Cargando datos...","not_submitted_7d05fdb4":"No entregado","send_message_6ccc90e8":"Enviar mensaje","submitted_submitdate_bdd3bf09":"Entregado: %{submitDate}","view_next_student_9fc72fef":"ver siguiente estudiante","view_previous_student_90000459":"ver estudiante anterior","view_submission_ff3da5d":"Ver entrega"},"fa":{"back_2900f52a":"بازگشت","loading_bde52856":"در حال بارگذاری","loading_data_ecd89ba":"در حال بارگذاری داده ها ...","not_submitted_7d05fdb4":"ارسال نشده است","send_message_6ccc90e8":"ارسال پیام","submitted_submitdate_bdd3bf09":"ارسال شده: %{submitDate}","view_next_student_9fc72fef":"مشاهده دانشجوی بعدی","view_previous_student_90000459":"مشاهده دانشجوی قبلی","view_submission_ff3da5d":"مشاهده مورد ارسالی"},"fi":{"back_2900f52a":"Takaisin","loading_bde52856":"Ladataan","loading_data_ecd89ba":"Ladataan tietoja...","not_submitted_7d05fdb4":"Ei lähetetty","send_message_6ccc90e8":"Lähetä viesti","submitted_submitdate_bdd3bf09":"Lähetetty: %{submitDate}","view_next_student_9fc72fef":"tarkastele seuraavaa opiskelija","view_previous_student_90000459":"tarkastele edellistä opiskelijaa","view_submission_ff3da5d":"Näytä tehtäväpalautus"},"fr":{"back_2900f52a":"Retour","loading_bde52856":"En cours de chargement","loading_data_ecd89ba":"Chargement des données...","not_submitted_7d05fdb4":"Non soumis","send_message_6ccc90e8":"Envoyer message","submitted_submitdate_bdd3bf09":"Soumis : %{submitDate}","view_next_student_9fc72fef":"voir l\'élève suivant","view_previous_student_90000459":"voir l\'élève précédent","view_submission_ff3da5d":"Voir la soumission"},"fr-CA":{"back_2900f52a":"Retour","loading_bde52856":"Chargement","loading_data_ecd89ba":"Chargement des données...","not_submitted_7d05fdb4":"Non soumis","send_message_6ccc90e8":"Envoyer un message","submitted_submitdate_bdd3bf09":"Soumis : %{submitDate}","view_next_student_9fc72fef":"voir l\'étudiant suivant","view_previous_student_90000459":"voir l\'étudiant précédent","view_submission_ff3da5d":"Voir l’envoi"},"he":{"back_2900f52a":"חזרה","loading_bde52856":"טוען","loading_data_ecd89ba":"טוען נתונים...","not_submitted_7d05fdb4":"לא הוגש","send_message_6ccc90e8":"שליחת הודעה","submitted_submitdate_bdd3bf09":"הוגש: %{submitDate}","view_next_student_9fc72fef":"הצגת התלמיד הבא","view_previous_student_90000459":"הצגת התלמיד הקודם","view_submission_ff3da5d":"הצגת הגשה"},"ht":{"back_2900f52a":"Retounen","loading_bde52856":"Chajman","loading_data_ecd89ba":"Chajman Done...","not_submitted_7d05fdb4":"Pa Soumèt","send_message_6ccc90e8":"Voye Mesaj","submitted_submitdate_bdd3bf09":"Soumèt: %{submitDate}","view_next_student_9fc72fef":"afichaj pwochen elèv","view_previous_student_90000459":"afichaj elèv pase","view_submission_ff3da5d":"Afichaj Soumisyon"},"hu":{"back_2900f52a":"Vissza","loading_bde52856":"Töltődik","loading_data_ecd89ba":"Adatok betöltése...","not_submitted_7d05fdb4":"Nincs beküldve","send_message_6ccc90e8":"Üzenetküldés","view_next_student_9fc72fef":"következő hallgató megtekintése","view_previous_student_90000459":"előző hallgató megtekintése","view_submission_ff3da5d":"Beadandó megtekintése"},"hy":{"back_2900f52a":"Վերադառնալ","loading_bde52856":"Բեռնում է"},"is":{"back_2900f52a":"Til baka","loading_bde52856":"Sæki","loading_data_ecd89ba":"Sæki gögn...","not_submitted_7d05fdb4":"Ekki skilað","send_message_6ccc90e8":"Senda skilaboð","submitted_submitdate_bdd3bf09":"Skilað: %{submitDate}","view_next_student_9fc72fef":"skoða næsta nemanda","view_previous_student_90000459":"skoða fyrri nemanda","view_submission_ff3da5d":"Skoða skil"},"it":{"back_2900f52a":"Indietro","loading_bde52856":"Caricamento in corso","loading_data_ecd89ba":"Caricamento dei dati in corso...","not_submitted_7d05fdb4":"Non inviato","send_message_6ccc90e8":"Invia messaggio","submitted_submitdate_bdd3bf09":"Inviato: %{submitDate}","view_next_student_9fc72fef":"visualizza studente successivo","view_previous_student_90000459":"visualizza studente precedente","view_submission_ff3da5d":"Visualizza consegna"},"ja":{"back_2900f52a":"戻る","loading_bde52856":"読み込み中","loading_data_ecd89ba":"データをロード中...","not_submitted_7d05fdb4":"未提出","send_message_6ccc90e8":"メッセージを送信","submitted_submitdate_bdd3bf09":"提出しました：%{submitDate}","view_next_student_9fc72fef":"次の受講生を見る","view_previous_student_90000459":"前の受講生を見る","view_submission_ff3da5d":"提出を見る"},"mi":{"back_2900f52a":"Hoki ki muri","loading_bde52856":"E tukuake ana","loading_data_ecd89ba":"Te utanga raraunga","not_submitted_7d05fdb4":"E Kore E Tukua","send_message_6ccc90e8":"Tukua Karere","submitted_submitdate_bdd3bf09":"Kua tukuna %{submitDate}","view_next_student_9fc72fef":"Tiro ākonga i muri mai","view_previous_student_90000459":"Tiro ākonga o mua","view_submission_ff3da5d":"Tiro Tāpaetanga"},"nb":{"back_2900f52a":"Tilbake","loading_bde52856":"Laster","loading_data_ecd89ba":"Laster data...","not_submitted_7d05fdb4":"Ikke levert","send_message_6ccc90e8":"Send melding","submitted_submitdate_bdd3bf09":"Levert: %{submitDate}","view_next_student_9fc72fef":"vis neste student","view_previous_student_90000459":"vis forrige student","view_submission_ff3da5d":"Vis innlevering"},"nb-x-k12":{"back_2900f52a":"Tilbake","loading_bde52856":"Laster","loading_data_ecd89ba":"Laster data...","not_submitted_7d05fdb4":"Ikke levert","send_message_6ccc90e8":"Send melding","submitted_submitdate_bdd3bf09":"Levert: %{submitDate}","view_next_student_9fc72fef":"vis neste elev","view_previous_student_90000459":"vis forrige elev","view_submission_ff3da5d":"Vis innlevering"},"nl":{"back_2900f52a":"Terug","loading_bde52856":"Bezig met laden...","loading_data_ecd89ba":"Gegevens laden..","not_submitted_7d05fdb4":"Niet ingediend","send_message_6ccc90e8":"Bericht versturen","submitted_submitdate_bdd3bf09":"Ingeleverd: %{submitDate}","view_next_student_9fc72fef":"volgende cursist weergeven","view_previous_student_90000459":"vorige cursist weergeven","view_submission_ff3da5d":"Inlevering weergeven"},"nn":{"back_2900f52a":"Tilbake","loading_bde52856":"Lastar","loading_data_ecd89ba":"Lastar data..","not_submitted_7d05fdb4":"Ikkje levert","send_message_6ccc90e8":"Send melding","submitted_submitdate_bdd3bf09":"Innlevert %{submitDate}","view_next_student_9fc72fef":"vis neste student","view_previous_student_90000459":"vis førre student","view_submission_ff3da5d":"Vis innlevering"},"pl":{"back_2900f52a":"Wstecz","loading_bde52856":"Trwa ładowanie","loading_data_ecd89ba":"Wczytywanie danych...","not_submitted_7d05fdb4":"Nie wysłano","send_message_6ccc90e8":"Wyślij wiadomość","submitted_submitdate_bdd3bf09":"Wysłano: %{submitDate}","view_next_student_9fc72fef":"Wyświetl kolejnego uczestnika","view_previous_student_90000459":"Wyświetl poprzedniego uczestnika","view_submission_ff3da5d":"Wyświetl wysłane materiały"},"pt":{"back_2900f52a":"Voltar","loading_bde52856":"Carregando","loading_data_ecd89ba":"A carregar dados...","not_submitted_7d05fdb4":"Não Entregue","send_message_6ccc90e8":"Enviar Mensagem","submitted_submitdate_bdd3bf09":"Submetido: %{submitDate}","view_next_student_9fc72fef":"ver próximo aluno","view_previous_student_90000459":"ver aluno anterior","view_submission_ff3da5d":"Ver Submissão"},"pt-BR":{"back_2900f52a":"Voltar","loading_bde52856":"Carregando","loading_data_ecd89ba":"Carregando dados...","not_submitted_7d05fdb4":"Não Enviado","send_message_6ccc90e8":"Enviar mensagem","submitted_submitdate_bdd3bf09":"Enviado: %{submitDate}","view_next_student_9fc72fef":"exibir próximo aluno","view_previous_student_90000459":"exibir aluno anterior","view_submission_ff3da5d":"Visualizar envio"},"ru":{"back_2900f52a":"Назад","loading_bde52856":"Загрузка","loading_data_ecd89ba":"Загрузка данных...","not_submitted_7d05fdb4":"Не отправлено","send_message_6ccc90e8":"Отправить сообщение","submitted_submitdate_bdd3bf09":"Отправлено: %{submitDate}","view_next_student_9fc72fef":"просмотреть следующего учащегося","view_previous_student_90000459":"просмотреть предыдущего учащегося","view_submission_ff3da5d":"Просмотреть отправленные материалы"},"sl":{"back_2900f52a":"Nazaj","loading_bde52856":"Nalaganje","loading_data_ecd89ba":"Nalaganje podatkov ...","not_submitted_7d05fdb4":"Ni oddano.","send_message_6ccc90e8":"Pošlji sporočilo","submitted_submitdate_bdd3bf09":"Poslano: %{submitDate}","view_next_student_9fc72fef":"ogled naslednjega študenta","view_previous_student_90000459":"ogled prejšnjega študenta","view_submission_ff3da5d":"Ogled oddaje"},"sv":{"back_2900f52a":"Tillbaka","loading_bde52856":"Laddar","loading_data_ecd89ba":"Läser in data ...","not_submitted_7d05fdb4":"Inte inlämnad","send_message_6ccc90e8":"Skicka meddelande","submitted_submitdate_bdd3bf09":"Inlämnad: %{submitDate}","view_next_student_9fc72fef":"visa nästa student","view_previous_student_90000459":"visa föregående student","view_submission_ff3da5d":"Visa inlämning"},"sv-x-k12":{"back_2900f52a":"Tillbaka","loading_bde52856":"Laddar","loading_data_ecd89ba":"Läser in data ...","not_submitted_7d05fdb4":"Inte inlämnad","send_message_6ccc90e8":"Skicka meddelande","submitted_submitdate_bdd3bf09":"Inlämnad: %{submitDate}","view_next_student_9fc72fef":"visa nästa elev","view_previous_student_90000459":"visa föregående elev","view_submission_ff3da5d":"Visa inlämning"},"tr":{"back_2900f52a":"Geri","loading_bde52856":"Yükleniyor","send_message_6ccc90e8":"Mesaj Gönder"},"uk":{"back_2900f52a":"Назад","loading_bde52856":"Завантаження","loading_data_ecd89ba":"Завантаження даних...","not_submitted_7d05fdb4":"Не відправлено","send_message_6ccc90e8":"Відправити повідомлення","submitted_submitdate_bdd3bf09":"Відправлено: %{submitDate}","view_next_student_9fc72fef":"переглянути наступного студента","view_previous_student_90000459":"переглянути попереднього студента","view_submission_ff3da5d":"Переглянути відправлення"},"zh-Hans":{"back_2900f52a":"后退","loading_bde52856":"加载","loading_data_ecd89ba":"正在加载数据……","not_submitted_7d05fdb4":"未提交","send_message_6ccc90e8":"发送消息","submitted_submitdate_bdd3bf09":"已提交%{submitDate}","view_next_student_9fc72fef":"查看下一个学生","view_previous_student_90000459":"查看上一个学生","view_submission_ff3da5d":"查看提交的作业"},"zh-Hant":{"back_2900f52a":"返回","loading_bde52856":"正在載入","loading_data_ecd89ba":"載入資料中..","not_submitted_7d05fdb4":"未提交","send_message_6ccc90e8":"傳送訊息","submitted_submitdate_bdd3bf09":"已提交：%{submitDate}","view_next_student_9fc72fef":"查看下一個學生","view_previous_student_90000459":"查看上一個學生","view_submission_ff3da5d":"檢視提交項目"}}' ) )
      var K = b[ "default" ].scoped( "cyoe_assignment_sidebar_student_details_view" )
      var $ = a( "Pm+R" )
      l.a.object, l.a.number
      class X extends i.a.Component {
        render() {
          const e = this.props.trend
          const t = E()( {
            "crs-student__trend-icon": true,
            "crs-student__trend-icon__positive": 1 === e,
            "crs-student__trend-icon__neutral": 0 === e,
            "crs-student__trend-icon__negative": -1 === e
          } )
          const a = null !== e && void 0 !== e
          const n = $[ "a" ].getCategory( this.props.assignment ).id
          return Object( s[ "a" ] )( "div", {
            className: "crs-student-details__assignment"
          }, void 0, Object( s[ "a" ] )( "i", {
            className: `icon-${n} crs-student-details__assignment-icon crs-icon-${n}`
          } ), Object( s[ "a" ] )( "div", {
            className: "crs-student-details__assignment-name"
          }, void 0, this.props.assignment.name ), Object( s[ "a" ] )( "div", {
            className: "crs-student-details__assignment-score"
          }, void 0, Object( s[ "a" ] )( "div", {}, void 0, Object( g[ "b" ] )( this.props.assignment.score, this.props.assignment, true ) ), a && Object( s[ "a" ] )( "span", {
            className: t
          } ) ) )
        }
      }
      var Z, Y, ee, te
      l.a.shape, l.a.string, l.a.number, l.a.arrayOf, l.a.func, l.a.bool
      class ae extends i.a.Component {
        componentDidUpdate( e ) {
          this.props.student && !e.student && setTimeout( () => this.backButton.focus(), 100 )
        }
        renderHeader() {
          if ( !this.props.student ) return null
          return Object( s[ "a" ] )( "header", {
            className: "crs-student-details__header"
          }, void 0, i.a.createElement( "button", {
            className: "crs-breakdown__link crs-back-button",
            ref: e => {
              this.backButton = e
            },
            onClick: this.props.unselectStudent
          }, Z || ( Z = Object( s[ "a" ] )( "i", {
            "aria-hidden": true,
            className: "icon-arrow-open-left"
          } ) ), K.t( "Back" ) ) )
        }
        renderStudentProfile() {
          const e = this.props,
            t = e.student,
            a = e.triggerAssignment
          const n = a.assignment
          const d = t.avatar_image_url || "/images/messages/avatar-50.png"
          const i = `/conversations?context_id=course_${n.course_id}&user_id=${t.id}&user_name=${t.name}`
          return Object( s[ "a" ] )( "section", {
            className: "crs-student-details__profile-content"
          }, void 0, Object( s[ "a" ] )( "button", {
            className: "Button Button--icon-action student-details__prev-student",
            "aria-label": K.t( "view previous student" ),
            onClick: this.props.selectPrevStudent,
            type: "button"
          }, void 0, Y || ( Y = Object( s[ "a" ] )( "i", {
            "aria-hidden": true,
            className: "icon-arrow-open-left"
          } ) ) ), Object( s[ "a" ] )( "div", {
            className: "crs-student-details__profile-inner-content"
          }, void 0, Object( s[ "a" ] )( "img", {
            src: d,
            "aria-hidden": true,
            className: "crs-student-details__profile-image"
          } ), Object( s[ "a" ] )( "h3", {
            className: "crs-student-details__name"
          }, void 0, t.name ), Object( s[ "a" ] )( "a", {
            target: "_blank",
            rel: "noopener noreferrer",
            href: i,
            className: "crs-breakdown__link"
          }, void 0, ee || ( ee = Object( s[ "a" ] )( "i", {
            "aria-hidden": true,
            className: "icon-email crs-icon-email"
          } ) ), K.t( "Send Message" ) ) ), Object( s[ "a" ] )( "button", {
            className: "Button Button--icon-action student-details__next-student",
            "aria-label": K.t( "view next student" ),
            onClick: this.props.selectNextStudent,
            type: "button"
          }, void 0, te || ( te = Object( s[ "a" ] )( "i", {
            "aria-hidden": true,
            className: "icon-arrow-open-right"
          } ) ) ) )
        }
        renderTriggerAssignment() {
          const e = this.props,
            t = e.student,
            a = e.triggerAssignment
          const n = a || {},
            d = n.assignment,
            i = n.submission
          const r = `/courses/${d.course_id}/assignments/${d.id}/submissions/${t.id}`
          let o = null
          o = i ? i.submitted_at ? K.l( "date.formats.long", new Date( i.submitted_at ) ) : null : K.t( "Not Submitted" )
          return Object( s[ "a" ] )( "section", {
            className: "crs-student-details__score-content"
          }, void 0, Object( s[ "a" ] )( "h3", {
            className: "crs-student-details__score-number"
          }, void 0, Object( g[ "a" ] )( i.grade, d ) ), Object( s[ "a" ] )( "div", {
            className: "crs-student-details__score-title"
          }, void 0, d.name ), o ? Object( s[ "a" ] )( "div", {
            className: "crs-student-details__score-date"
          }, void 0, K.t( "Submitted: %{submitDate}", {
            submitDate: o
          } ) ) : null, Object( s[ "a" ] )( "a", {
            target: "_blank",
            rel: "noopener noreferrer",
            href: r,
            className: "crs-breakdown__link"
          }, void 0, K.t( "View Submission" ) ) )
        }
        renderFollowOnAssignments() {
          const e = this.props.followOnAssignments || []
          return Object( s[ "a" ] )( "section", {}, void 0, e.map( ( e, t ) => Object( s[ "a" ] )( X, {
            assignment: e.assignment,
            score: e.score,
            trend: e.trend
          }, t ) ) )
        }
        renderContent() {
          if ( this.props.isLoading ) return Object( s[ "a" ] )( "div", {
            className: "crs-student-details__loading"
          }, void 0, Object( s[ "a" ] )( u[ "a" ], {
            renderTitle: K.t( "Loading" ),
            size: "small"
          } ), Object( s[ "a" ] )( "p", {}, void 0, K.t( "Loading Data.." ) ) )
          if ( this.props.student ) return Object( s[ "a" ] )( "div", {}, void 0, this.renderStudentProfile(), this.renderTriggerAssignment(), this.renderFollowOnAssignments() )
          return null
        }
        render() {
          const e = !this.props.student
          const t = E()( {
            "crs-student-details": true,
            "crs-student-details__hidden": e
          } )
          return Object( s[ "a" ] )( "div", {
            className: t
          }, void 0, this.renderHeader(), this.renderContent() )
        }
      }
      l.a.array, l.a.object, l.a.func, l.a.bool
      class ne extends i.a.Component {
        constructor( ...e ) {
          super( ...e )
          this.unselectStudent = () => {
            this.props.selectStudent( null )
          }
          this.selectPrevStudent = () => {
            let e = this.props.selectedPath.student
            const t = this.props.ranges[ this.props.selectedPath.range ]
            e > 0 ? e -= 1 : e = t.size - 1
            this.props.selectStudent( e )
          }
          this.selectNextStudent = () => {
            let e = this.props.selectedPath.student
            const t = this.props.ranges[ this.props.selectedPath.range ]
            e < t.size - 1 ? e += 1 : e = 0
            this.props.selectStudent( e )
          }
        }
        render() {
          const e = this.props,
            t = e.selectedPath,
            a = e.ranges,
            n = e.students
          const d = null !== t.student ? a[ t.range ].students[ t.student ].user : null
          const r = null !== t.student && d ? n[ d.id ] : null
          return Object( s[ "a" ] )( j[ "a" ], {
            open: this.props.showDetails,
            placement: "end",
            shouldContainFocus: true,
            defaultFocusElement: () => this.closeButton
          }, void 0, Object( s[ "a" ] )( "div", {
            className: "crs-breakdown-details"
          }, void 0, Object( s[ "a" ] )( "div", {
            className: "crs-breakdown-details__content"
          }, void 0, Object( s[ "a" ] )( "span", {
            className: "crs-breakdown-details__closeButton"
          }, void 0, i.a.createElement( S[ "a" ], {
            variant: "icon",
            ref: e => {
              this.closeButton = e
            },
            onClick: this.props.closeSidebar
          }, Object( s[ "a" ] )( "span", {
            className: "crs-breakdown-details__closeButtonIcon"
          }, void 0, Object( s[ "a" ] )( z[ "a" ], {
            title: O.t( "Close details sidebar" )
          } ) ) ) ), Object( s[ "a" ] )( Q, {
            assignment: this.props.assignment,
            ranges: a,
            selectedPath: t,
            selectStudent: this.props.selectStudent,
            student: d
          } ), Object( s[ "a" ] )( ae, {
            isLoading: this.props.isStudentDetailsLoading,
            student: d,
            triggerAssignment: r && r.triggerAssignment,
            followOnAssignments: r && r.followOnAssignments,
            selectPrevStudent: this.selectPrevStudent,
            selectNextStudent: this.selectNextStudent,
            unselectStudent: this.unselectStudent
          } ) ) ) )
        }
      }
      const se = Object( _[ "connect" ] )( e => ( {
        assignment: e.assignment,
        ranges: e.ranges,
        enrolled: e.enrolled,
        isLoading: e.isInitialDataLoading
      } ) )( y )
      const de = Object( _[ "connect" ] )( e => ( {
        isStudentDetailsLoading: e.isStudentDetailsLoading,
        selectedPath: e.selectedPath,
        assignment: e.assignment,
        ranges: e.ranges,
        students: e.studentCache,
        showDetails: e.showDetails
      } ) )( ne )
      class ie {
        constructor( e, t ) {
          this.store = e
          this.actions = t
        }
        renderGraphs( e ) {
          const t = {
            openSidebar: this.actions.openSidebar,
            selectRange: this.actions.selectRange
          }
          o.a.render( Object( s[ "a" ] )( _[ "Provider" ], {
            store: this.store
          }, void 0, i.a.createElement( se, t ) ), e )
        }
        renderDetails( e ) {
          const t = {
            selectRange: this.actions.selectRange,
            selectStudent: this.actions.selectStudent,
            closeSidebar: this.actions.closeSidebar
          }
          o.a.render( Object( s[ "a" ] )( _[ "Provider" ], {
            store: this.store
          }, void 0, i.a.createElement( de, t ) ), e )
        }
      }
      var re = a( "sINF" )
      var oe = a( "VTBJ" )
      var _e = a( "GLiE" )
      var ce = a.n( _e )
      const le = ( e, t ) => ( a, n ) => {
        a = void 0 === a ? t : a
        if ( e[ n.type ] ) {
          let t = a
          ce.a.isObject( a ) ? t = Object( oe[ "a" ] )( {}, a ) : Array.isArray( a ) && ( t = a.slice() )
          return e[ n.type ]( t, n )
        }
        return a
      }
      const ue = ( e, t ) => t.payload
      const be = ( e = "" ) => ( t, a ) => void 0 === t ? e : t
      var fe = a( "x1Tw" )
      const pe = {
        call: ( {
          apiUrl: e,
          jwt: t
        }, a ) => Object( fe[ "a" ] )( {
          url: e + a,
          dataType: "json",
          headers: {
            Authorization: "Bearer " + t
          }
        } ).then( e => e.data ),
        loadInitialData( e ) {
          const t = "/students_per_range?trigger_assignment=" + e.assignment.id
          return pe.call( e, t )
        },
        loadStudent( e, t ) {
          const a = `/student_details?trigger_assignment=${e.assignment.id}&student_id=${t}`
          return pe.call( e, a )
        }
      }
      var ge = pe

      function me( e ) {
        const t = e.split( "_" )
        return t.map( ( e, t ) => 0 !== t && e.length ? e.charAt( 0 ).toUpperCase() + e.slice( 1 ).toLowerCase() : e.toLowerCase() ).join( "" )
      }

      function ve( e ) {
        const t = t => ( {
          type: e,
          payload: t
        } )
        t.type = e
        t.toString = () => e
        return t
      }

      function he( e ) {
        const t = {}
        const a = {}
        e.forEach( e => {
          const n = ve( e )
          const s = me( n.type )
          a[ s ] = n
          t[ n.type ] = n.type
        } )
        return {
          actionTypes: t,
          actions: a
        }
      }
      const we = [ "SET_INITIAL_DATA", "SET_SCORING_RANGES", "SET_RULE", "SET_ENROLLED", "SET_ASSIGNMENT", "SET_ERRORS", "SET_STUDENT_DETAILS", "SELECT_RANGE", "ADD_STUDENT_TO_CACHE", "SELECT_STUDENT", "OPEN_SIDEBAR", "CLOSE_SIDEBAR", "LOAD_INITIAL_DATA_START", "LOAD_INITIAL_DATA_END", "LOAD_STUDENT_DETAILS_START", "LOAD_STUDENT_DETAILS_END" ]
      const ke = he( we ),
        ye = ke.actions,
        Se = ke.actionTypes
      ye.closeSidebarFrd = ye.closeSidebar
      ye.closeSidebar = () => ( e, t ) => {
        const a = t().sidebarTrigger
        e( ye.closeSidebarFrd() )
        a.focus()
      }
      ye.loadInitialData = e => ( e, t ) => {
        e( ye.loadInitialDataStart() )
        ge.loadInitialData( t() ).then( t => {
          e( ye.setInitialData( t ) )
          e( ye.loadInitialDataEnd() )
        } ).catch( t => {
          e( ye.setErrors( t ) )
          e( ye.loadInitialDataEnd() )
        } )
      }
      ye.loadStudent = e => ( t, a ) => {
        t( ye.loadStudentDetailsStart() )
        ge.loadStudent( a(), e ).then( a => {
          t( ye.addStudentToCache( {
            studentId: e,
            data: a
          } ) )
          t( ye.loadStudentDetailsEnd() )
        } ).catch( e => {
          t( ye.loadStudentDetailsEnd() )
          t( ye.setErrors( e ) )
        } )
      }
      ye.selectStudent = e => ( t, a ) => {
        t( {
          type: Se.SELECT_STUDENT,
          payload: e
        } )
        const n = a(),
          s = n.studentCache,
          d = n.ranges,
          i = n.selectedPath
        const r = d[ i.range ].students[ e ]
        r && !s[ r.user.id.toString() ] && t( ye.loadStudent( r.user.id.toString() ) )
      }
      const je = le( {
        [ Se.ADD_STUDENT_TO_CACHE ]: ( e, t ) => {
          const a = t.payload,
            n = a.studentId,
            s = a.data
          e[ n ] = {
            followOnAssignments: s.follow_on_assignments,
            triggerAssignment: s.trigger_assignment
          }
          return e
        }
      }, {} )
      const ze = le( {
        [ Se.LOAD_INITIAL_DATA_START ]: () => true,
        [ Se.LOAD_INITIAL_DATA_END ]: () => false
      }, false )
      const Oe = le( {
        [ Se.LOAD_STUDENT_DETAILS_START ]: () => true,
        [ Se.LOAD_STUDENT_DETAILS_END ]: () => false
      }, false )
      const xe = le( {
        [ Se.SET_ERRORS ]: ( e, t ) => [ ...Array.from( t.payload ), ...Array.from( e ) ]
      }, [] )
      const Ae = le( {
        [ Se.SET_INITIAL_DATA ]: ( e, t ) => t.payload.ranges,
        [ Se.SET_SCORING_RANGES ]: ue
      }, [] )
      const Be = le( {
        [ Se.SET_ASSIGNMENT ]: ue
      }, {} )
      const De = le( {
        [ Se.SET_INITIAL_DATA ]: ( e, t ) => t.payload.rule,
        [ Se.SET_RULE ]: ue
      }, {
        course_id: "",
        trigger_assignment: ""
      } )
      const Te = le( {
        [ Se.SET_INITIAL_DATA ]: ( e, t ) => t.payload.enrolled,
        [ Se.SET_ENROLLED ]: ue
      }, 0 )
      const Ee = le( {
        [ Se.OPEN_SIDEBAR ]: ( e, t ) => t.payload,
        [ Se.CLOSE_SIDEBAR ]: () => null
      }, null )
      const Ne = le( {
        [ Se.OPEN_SIDEBAR ]: () => true,
        [ Se.CLOSE_SIDEBAR ]: () => false,
        [ Se.SELECT_RANGE ]: ( e, t ) => null !== t.payload
      }, false )
      const Ce = le( {
        [ Se.SELECT_RANGE ]: ( e, t ) => {
          e.range = t.payload
          return e
        },
        [ Se.SELECT_STUDENT ]: ( e, t ) => {
          e.student = t.payload
          return e
        },
        [ Se.CLOSE_SIDEBAR ]: e => {
          e.student = null
          return e
        }
      }, {
        range: 0,
        student: null
      } )
      var Me = Object( n[ "combineReducers" ] )( {
        apiUrl: be(),
        jwt: be(),
        studentCache: je,
        isInitialDataLoading: ze,
        isStudentDetailsLoading: Oe,
        errors: xe,
        ranges: Ae,
        assignment: Be,
        rule: De,
        enrolled: Te,
        sidebarTrigger: Ee,
        showDetails: Ne,
        selectedPath: Ce
      } )
      const Le = Object( n[ "applyMiddleware" ] )( re[ "default" ] )( n[ "createStore" ] )

      function Ie( e ) {
        return Le( Me, e )
      }
      var Pe = Ie
      const Je = {
        init: ( e, t ) => {
          const a = window.ENV
          if ( null != e && a.CONDITIONAL_RELEASE_SERVICE_ENABLED && null != a.CONDITIONAL_RELEASE_ENV.rule ) {
            const s = a.CONDITIONAL_RELEASE_ENV,
              d = s.assignment,
              i = s.stats_url
            const r = document.createElement( "div" )
            r.setAttribute( "id", "crs-details" )
            t.appendChild( r )
            d.submission_types = Array.isArray( d.submission_types ) ? d.submission_types : [ d.submission_types ]
            const o = {
              assignment: d,
              apiUrl: i
            }
            const _ = Pe( o )
            const c = Object( n[ "bindActionCreators" ] )( ye, _.dispatch )
            const l = new ie( _, c )
            l.renderGraphs( e )
            l.renderDetails( r )
            c.loadInitialData()
            return l
          }
        }
      }
      t[ "default" ] = Je
    },
    HsON: function ( e, t, a ) {
      "use strict"
      a.d( t, "a", ( function () {
        return u
      } ) )
      var n = a( "VTBJ" )
      var s = a( "1OyB" )
      var d = a( "vuIU" )
      var i = a( "Ji7U" )
      var r = a( "LK+K" )
      var o = a( "q1tI" )
      var _ = a.n( o )
      var c = a( "CSQ8" )
      var l = _.a.createElement( "path", {
        d: "M925.966182,1226.25955 C944.762449,1253.5558 975.234883,1253.55919 994.033486,1226.25955 L1345.1073,716.424242 C1363.90357,689.127987 1352.28747,667 1319.14817,667 L600.851498,667 C567.718398,667 556.093763,689.124596 574.892365,716.424242 L925.966182,1226.25955 Z",
        fillRule: "evenodd",
        stroke: "none",
        strokeWidth: "1",
        transform: "matrix(0 1 1 0 -.278 .278)"
      } )
      var u = function ( e ) {
        Object( i[ "a" ] )( a, e )
        var t = Object( r[ "a" ] )( a )

        function a() {
          Object( s[ "a" ] )( this, a )
          return t.apply( this, arguments )
        }
        Object( d[ "a" ] )( a, [ {
          key: "render",
          value: function () {
            return _.a.createElement( c[ "a" ], Object.assign( {}, this.props, {
              name: "IconMiniArrowEnd",
              viewBox: "0 0 1920 1920",
              bidirectional: true
            } ), l )
          }
        } ] )
        a.displayName = "IconMiniArrowEndSolid"
        return a
      }( o[ "Component" ] )
      u.glyphName = "mini-arrow-end"
      u.variant = "Solid"
      u.propTypes = Object( n[ "a" ] )( {}, c[ "a" ].propTypes )
    },
    IRk9: function ( e, t, a ) {
      "use strict"
      a.d( t, "a", ( function () {
        return u
      } ) )
      var n = a( "VTBJ" )
      var s = a( "1OyB" )
      var d = a( "vuIU" )
      var i = a( "Ji7U" )
      var r = a( "LK+K" )
      var o = a( "q1tI" )
      var _ = a.n( o )
      var c = a( "CSQ8" )
      var l = _.a.createElement( "path", {
        d: "M797.319865 985.881673L344.771525 1438.43001 533.333333 1626.99182 985.881673 1174.44348 1438.43001 1626.99182 1626.99182 1438.43001 1174.44348 985.881673 1626.99182 533.333333 1438.43001 344.771525 985.881673 797.319865 533.333333 344.771525 344.771525 533.333333z",
        fillRule: "nonzero",
        stroke: "none",
        strokeWidth: "1"
      } )
      var u = function ( e ) {
        Object( i[ "a" ] )( a, e )
        var t = Object( r[ "a" ] )( a )

        function a() {
          Object( s[ "a" ] )( this, a )
          return t.apply( this, arguments )
        }
        Object( d[ "a" ] )( a, [ {
          key: "render",
          value: function () {
            return _.a.createElement( c[ "a" ], Object.assign( {}, this.props, {
              name: "IconX",
              viewBox: "0 0 1920 1920"
            } ), l )
          }
        } ] )
        a.displayName = "IconXSolid"
        return a
      }( o[ "Component" ] )
      u.glyphName = "x"
      u.variant = "Solid"
      u.propTypes = Object( n[ "a" ] )( {}, c[ "a" ].propTypes )
    },
    KIj7: function ( e, t, a ) {
      "use strict"
      a.d( t, "a", ( function () {
        return T
      } ) )
      var n = a( "rePB" )
      var s = a( "VTBJ" )
      var d = a( "1OyB" )
      var i = a( "vuIU" )
      var r = a( "Ji7U" )
      var o = a( "LK+K" )
      var _ = a( "q1tI" )
      var c = a.n( _ )
      var l = a( "17x9" )
      var u = a.n( l )
      var b = a( "TSYQ" )
      var f = a.n( b )
      var p = a( "Xx/m" )
      var g = a( "f9Fg" )
      var m = a( "xI9L" )
      var v = a( "5nFh" )
      var h = a( "J2CL" )
      var w = a( "cClk" )
      var k = a( "jtGx" )
      var y = a( "/UXv" )
      var S = a( "oXx0" )

      function j( e ) {
        var t = e.colors,
          a = e.spacing,
          n = e.borders,
          s = e.typography
        return {
          fontFamily: s.fontFamily,
          fontWeight: s.fontWeightNormal,
          lineHeight: s.lineHeight,
          textColor: t.textDarkest,
          fontSizeSmall: s.fontSizeSmall,
          fontSizeMedium: s.fontSizeMedium,
          fontSizeLarge: s.fontSizeLarge,
          smallIconSize: "0.5rem",
          mediumIconSize: "0.75rem",
          largeIconSize: "1rem",
          iconMargin: a.xxSmall,
          iconColor: t.textDarkest,
          togglePadding: a.xxSmall,
          toggleBorderRadius: n.radiusMedium,
          toggleBorderWidth: n.widthMedium,
          toggleBorderStyle: n.style,
          toggleFocusBorderColor: t.borderBrand,
          filledBackgroundColor: t.backgroundLight,
          filledBorderWidth: n.widthSmall,
          filledBorderStyle: n.style,
          filledBorderColor: t.borderMedium,
          filledBorderRadius: n.radiusMedium,
          filledPadding: a.small
        }
      }
      j[ "canvas" ] = function ( e ) {
        return {
          toggleFocusBorderColor: e[ "ic-brand-primary" ],
          iconColor: e[ "ic-brand-font-color-dark" ],
          textColor: e[ "ic-brand-font-color-dark" ]
        }
      }
      var z, O, x, A, B
      var D = {
        componentId: "MlJlv",
        template: function ( e ) {
          return "\n\n.MlJlv_bGBk{font-family:".concat( e.fontFamily || "inherit", ";font-weight:" ).concat( e.fontWeight || "inherit", ";line-height:" ).concat( e.lineHeight || "inherit", "}\n\n.MlJlv_doqw .MlJlv_ebWM,.MlJlv_doqw .MlJlv_cjSw{font-size:" ).concat( e.fontSizeSmall || "inherit", "}\n\n.MlJlv_doqw .MlJlv_dnnz{font-size:" ).concat( e.smallIconSize || "inherit", "}\n\n.MlJlv_doqw .MlJlv_dUEG{-webkit-padding-end:0;-webkit-padding-start:calc(" ).concat( e.smallIconSize || "inherit", " + " ).concat( e.togglePadding || "inherit", ");padding-inline-end:0;padding-inline-start:calc(" ).concat( e.smallIconSize || "inherit", " + " ).concat( e.togglePadding || "inherit", ")}\n\n[dir=ltr] .MlJlv_doqw .MlJlv_dUEG{padding-left:calc(" ).concat( e.smallIconSize || "inherit", " + " ).concat( e.togglePadding || "inherit", ");padding-right:0}\n\n[dir=rtl] .MlJlv_doqw .MlJlv_dUEG{padding-left:0;padding-right:calc(" ).concat( e.smallIconSize || "inherit", " + " ).concat( e.togglePadding || "inherit", ")}\n\n.MlJlv_ycrn .MlJlv_ebWM,.MlJlv_ycrn .MlJlv_cjSw{font-size:" ).concat( e.fontSizeMedium || "inherit", "}\n\n.MlJlv_ycrn .MlJlv_dnnz{font-size:" ).concat( e.mediumIconSize || "inherit", "}\n\n.MlJlv_ycrn .MlJlv_dUEG{-webkit-padding-end:0;-webkit-padding-start:calc(" ).concat( e.mediumIconSize || "inherit", " + " ).concat( e.togglePadding || "inherit", ");padding-inline-end:0;padding-inline-start:calc(" ).concat( e.mediumIconSize || "inherit", " + " ).concat( e.togglePadding || "inherit", ")}\n\n[dir=ltr] .MlJlv_ycrn .MlJlv_dUEG{padding-left:calc(" ).concat( e.mediumIconSize || "inherit", " + " ).concat( e.togglePadding || "inherit", ");padding-right:0}\n\n[dir=rtl] .MlJlv_ycrn .MlJlv_dUEG{padding-left:0;padding-right:calc(" ).concat( e.mediumIconSize || "inherit", " + " ).concat( e.togglePadding || "inherit", ")}\n\n.MlJlv_cMDj .MlJlv_ebWM,.MlJlv_cMDj .MlJlv_cjSw{font-size:" ).concat( e.fontSizeLarge || "inherit", "}\n\n.MlJlv_cMDj .MlJlv_dnnz{font-size:" ).concat( e.largeIconSize || "inherit", "}\n\n.MlJlv_cMDj .MlJlv_dUEG{-webkit-padding-end:0;-webkit-padding-start:calc(" ).concat( e.largeIconSize || "inherit", " + " ).concat( e.togglePadding || "inherit", ");padding-inline-end:0;padding-inline-start:calc(" ).concat( e.largeIconSize || "inherit", " + " ).concat( e.togglePadding || "inherit", ")}\n\n[dir=ltr] .MlJlv_cMDj .MlJlv_dUEG{padding-left:calc(" ).concat( e.largeIconSize || "inherit", " + " ).concat( e.togglePadding || "inherit", ");padding-right:0}\n\n[dir=rtl] .MlJlv_cMDj .MlJlv_dUEG{padding-left:0;padding-right:calc(" ).concat( e.largeIconSize || "inherit", " + " ).concat( e.togglePadding || "inherit", ")}\n\n.MlJlv_cjSw{-moz-appearance:none;-ms-user-select:none;-webkit-appearance:none;-webkit-user-select:none;appearance:none;background:transparent;border:none;box-sizing:border-box;color:" ).concat( e.textColor || "inherit", ";cursor:pointer;font-family:" ).concat( e.fontFamily || "inherit", ";margin:0;outline:none;overflow:visible;padding:0;position:relative;text-decoration:none;touch-action:manipulation;user-select:none}\n\n.MlJlv_cjSw::-moz-focus-inner{margin:0;padding:0}\n\n.MlJlv_cjSw:before{border:" ).concat( e.toggleBorderWidth || "inherit", " " ).concat( e.toggleBorderStyle || "inherit", " " ).concat( e.toggleFocusBorderColor || "inherit", ";border-radius:calc(" ).concat( e.toggleBorderRadius || "inherit", '*1.5);bottom:-0.375rem;content:"";left:-0.375rem;opacity:0;pointer-events:none;position:absolute;right:-0.375rem;top:-0.375rem}\n\n.MlJlv_cjSw:focus:before{opacity:1}\n\n.MlJlv_cjSw:active,.MlJlv_cjSw:focus,.MlJlv_cjSw:hover{color:' ).concat( e.textColor || "inherit", ";text-decoration:none}\n\n.MlJlv_cvfe{display:block;width:100%}\n\n.MlJlv_doNn{align-items:center;box-sizing:border-box;display:flex;position:relative;text-align:start}\n\n[dir=ltr] .MlJlv_doNn{text-align:left}\n\n[dir=rtl] .MlJlv_doNn{text-align:right}\n\n.MlJlv_dnnz{color:" ).concat( e.iconColor || "inherit", "}\n\n.MlJlv_dnnz>svg{display:block}\n\n.MlJlv_fuNk{-webkit-margin-end:" ).concat( e.iconMargin || "inherit", ";-webkit-margin-start:0;margin-inline-end:" ).concat( e.iconMargin || "inherit", ";margin-inline-start:0}\n\n[dir=ltr] .MlJlv_fuNk{margin-left:0;margin-right:" ).concat( e.iconMargin || "inherit", "}\n\n[dir=rtl] .MlJlv_fuNk{margin-left:" ).concat( e.iconMargin || "inherit", ";margin-right:0}\n\n.MlJlv_fhZl{-webkit-margin-end:0;-webkit-margin-start:" ).concat( e.iconMargin || "inherit", ";margin-inline-end:0;margin-inline-start:" ).concat( e.iconMargin || "inherit", "}\n\n[dir=ltr] .MlJlv_fhZl{margin-left:" ).concat( e.iconMargin || "inherit", ";margin-right:0}\n\n[dir=rtl] .MlJlv_fhZl{margin-left:0;margin-right:" ).concat( e.iconMargin || "inherit", "}\n\n.MlJlv_btWg{flex-grow:1;min-width:0.0625rem}\n\n.MlJlv_fFWz .MlJlv_btWg{flex:1}\n\n.MlJlv_ebWM{box-sizing:border-box;color:" ).concat( e.textColor || "inherit", ";padding-top:" ).concat( e.togglePadding || "inherit", "}\n\n.MlJlv_eFWP{display:none}\n\n.MlJlv_cMGi{display:block}\n\n@keyframes MlJlv_dFUU{to{opacity:1}}\n\n.MlJlv_caGd{animation-duration:0.3s;animation-fill-mode:forwards;animation-name:MlJlv_dFUU;opacity:0.01}" )
        },
        root: "MlJlv_bGBk",
        small: "MlJlv_doqw",
        details: "MlJlv_ebWM",
        toggle: "MlJlv_cjSw",
        icon: "MlJlv_dnnz",
        indentDetails: "MlJlv_dUEG",
        medium: "MlJlv_ycrn",
        large: "MlJlv_cMDj",
        fluidWidth: "MlJlv_cvfe",
        summary: "MlJlv_doNn",
        iconStart: "MlJlv_fuNk",
        iconEnd: "MlJlv_fhZl",
        summaryText: "MlJlv_btWg",
        positionIconAtEnd: "MlJlv_fFWz",
        hiddenDetails: "MlJlv_eFWP",
        expandedDetails: "MlJlv_cMGi",
        content: "MlJlv_caGd",
        contentAnimation: "MlJlv_dFUU"
      }
      var T = ( z = Object( S[ "a" ] )(), O = Object( h[ "j" ] )( j, D ), z( x = O( x = ( B = A = function ( e ) {
        Object( r[ "a" ] )( a, e )
        var t = Object( o[ "a" ] )( a )

        function a() {
          var e
          Object( d[ "a" ] )( this, a )
          for ( var n = arguments.length, s = new Array( n ), i = 0; i < n; i++ ) s[ i ] = arguments[ i ]
          e = t.call.apply( t, [ this ].concat( s ) )
          e.shouldAnimateContent = false
          e.getButtonRef = function ( t ) {
            return e._button = t
          }
          return e
        }
        Object( i[ "a" ] )( a, [ {
          key: "focus",
          value: function () {
            this._button.focus()
          }
        }, {
          key: "componentDidMount",
          value: function () {
            this.shouldAnimateContent = true
          }
        }, {
          key: "renderSummary",
          value: function ( e ) {
            var t = this.props,
              a = t.summary,
              n = t.iconPosition
            return c.a.createElement( "span", {
              className: D.summary
            }, "start" === n && this.renderIcon( e ), c.a.createElement( "span", {
              className: D.summaryText
            }, a ), "end" === n && this.renderIcon( e ) )
          }
        }, {
          key: "renderToggle",
          value: function ( e, t ) {
            var d = this.props,
              i = d.variant,
              r = d.fluidWidth
            var o = Object( s[ "a" ] )( {}, Object( k[ "a" ] )( this.props, a.propTypes ), {}, e, {
              children: this.renderSummary()
            } )
            var _ = this.renderSummary( t )
            return "filled" === i ? c.a.createElement( p[ "a" ], Object.assign( {}, o, {
              display: "block",
              textAlign: "start",
              elementRef: this.getButtonRef
            } ), _ ) : o.href ? c.a.createElement( "a", Object.assign( {}, o, {
              className: f()( D.toggle, D[ i ], Object( n[ "a" ] )( {}, D.fluidWidth, r ) ),
              ref: this.getButtonRef
            } ), _ ) : c.a.createElement( "button", Object.assign( {}, o, {
              type: "button",
              className: f()( D.toggle, D[ i ], Object( n[ "a" ] )( {}, D.fluidWidth, r ) ),
              ref: this.getButtonRef
            } ), _ )
          }
        }, {
          key: "renderIcon",
          value: function ( e ) {
            var t
            var a = this.props.iconPosition
            var s = e ? this.props.iconExpanded : this.props.icon
            return this.props.children ? c.a.createElement( "span", {
              className: f()( D.icon, ( t = {}, Object( n[ "a" ] )( t, D.iconStart, "start" === a ), Object( n[ "a" ] )( t, D.iconEnd, "end" === a ), t ) )
            }, c.a.createElement( s, null ) ) : null
          }
        }, {
          key: "renderDetails",
          value: function ( e, t ) {
            var a
            var s = this.props,
              d = s.children,
              i = s.size,
              r = s.iconPosition,
              o = s.fluidWidth
            return c.a.createElement( "div", Object.assign( {}, t, {
              className: f()( D.details, ( a = {}, Object( n[ "a" ] )( a, D[ i ], i ), Object( n[ "a" ] )( a, D.hiddenDetails, !e ), Object( n[ "a" ] )( a, D.expandedDetails, e ), Object( n[ "a" ] )( a, D.indentDetails, "start" === r && !o ), a ) )
            } ), d && e && this.renderContent() )
          }
        }, {
          key: "renderContent",
          value: function () {
            return c.a.createElement( "div", {
              className: f()( Object( n[ "a" ] )( {}, D.content, this.shouldAnimateContent ) )
            }, this.props.children )
          }
        }, {
          key: "render",
          value: function () {
            var e, t = this
            var a = this.props,
              s = a.variant,
              d = a.iconPosition,
              i = a.fluidWidth
            var r = "end" === d && ( "filled" === s || i )
            var o = ( e = {}, Object( n[ "a" ] )( e, D.root, true ), Object( n[ "a" ] )( e, D[ this.props.size ], true ), Object( n[ "a" ] )( e, D.positionIconAtEnd, r ), e )
            return c.a.createElement( v[ "a" ], Object( k[ "c" ] )( this.props, v[ "a" ].propTypes ), ( function ( e ) {
              var a = e.expanded,
                n = e.getToggleProps,
                s = e.getDetailsProps
              return c.a.createElement( "div", {
                className: f()( o )
              }, t.renderToggle( n(), a ), t.renderDetails( a, s() ) )
            } ) )
          }
        }, {
          key: "focused",
          get: function () {
            return Object( y[ "a" ] )( this._button )
          }
        } ] )
        a.displayName = "ToggleDetails"
        return a
      }( _[ "Component" ] ), A.propTypes = {
        variant: u.a.oneOf( [ "default", "filled" ] ),
        summary: u.a.node.isRequired,
        expanded: Object( w[ "a" ] )( u.a.bool, "onToggle", "defaultExpanded" ),
        defaultExpanded: u.a.bool,
        onToggle: u.a.func,
        icon: u.a.func,
        iconExpanded: u.a.func,
        iconPosition: u.a.oneOf( [ "start", "end" ] ),
        fluidWidth: u.a.bool,
        children: u.a.node,
        size: u.a.oneOf( [ "small", "medium", "large" ] )
      }, A.defaultProps = {
        variant: "default",
        size: "medium",
        fluidWidth: false,
        icon: g[ "a" ],
        iconExpanded: m[ "a" ],
        iconPosition: "start",
        defaultExpanded: false,
        onToggle: function ( e, t ) {},
        children: null,
        expanded: void 0
      }, B ) ) || x ) || x )
    },
    MdYG: function ( e, t, a ) {
      "use strict"
      a.d( t, "b", ( function () {
        return f
      } ) )
      a.d( t, "a", ( function () {
        return h
      } ) )
      var n = a( "pQTu" )
      var s = a( "m0r6" )
      Object( s[ "a" ] )( JSON.parse( '{"ar":{"gpa_scale_6710e2ee":"مقياس المعدل التراكمي","letter_grade_f00fedc4":"الدرجة بالأحرف","other_ddacb37d":"آخر","percent_448ea947":"النسبة المئوية","points_bceb5005":"النقاط"},"ca":{"gpa_scale_6710e2ee":"escala GPA","letter_grade_f00fedc4":"qualificació amb lletra","other_ddacb37d":"altres","percent_448ea947":"percentatge","points_bceb5005":"punts"},"cy":{"gpa_scale_6710e2ee":"Graddfa GPA","letter_grade_f00fedc4":"gradd llythyren","other_ddacb37d":"arall","percent_448ea947":"canran","points_bceb5005":"pwynt"},"da":{"gpa_scale_6710e2ee":"GPA-skala","letter_grade_f00fedc4":"bogstavkarakter","other_ddacb37d":"andet","percent_448ea947":"procent","points_bceb5005":"point"},"da-x-k12":{"gpa_scale_6710e2ee":"GPA-skala","letter_grade_f00fedc4":"bogstavvurdering","other_ddacb37d":"andet","percent_448ea947":"procent","points_bceb5005":"point"},"de":{"gpa_scale_6710e2ee":"GPA-Skala","letter_grade_f00fedc4":"Buchstabennote","other_ddacb37d":"sonstige","percent_448ea947":"prozentual","points_bceb5005":"Punkte"},"el":{"letter_grade_f00fedc4":"Βαθμολόγηση με Γράμματα","percent_448ea947":"ποσοστό","points_bceb5005":"Μόρια"},"en-AU":{"gpa_scale_6710e2ee":"GPA scale","letter_grade_f00fedc4":"letter grade","other_ddacb37d":"other","percent_448ea947":"percent","points_bceb5005":"points"},"en-AU-x-unimelb":{"gpa_scale_6710e2ee":"GPA scale","letter_grade_f00fedc4":"letter grade","other_ddacb37d":"other","percent_448ea947":"percent","points_bceb5005":"points"},"en-CA":{"gpa_scale_6710e2ee":"GPA scale","letter_grade_f00fedc4":"letter grade","other_ddacb37d":"other","percent_448ea947":"percent","points_bceb5005":"points"},"en-GB":{"gpa_scale_6710e2ee":"GPA scale","letter_grade_f00fedc4":"letter mark","other_ddacb37d":"other","percent_448ea947":"per cent","points_bceb5005":"points"},"en-GB-x-lbs":{"gpa_scale_6710e2ee":"GPA scale","letter_grade_f00fedc4":"letter grade","other_ddacb37d":"other","percent_448ea947":"per cent","points_bceb5005":"points"},"en-GB-x-ukhe":{"gpa_scale_6710e2ee":"GPA scale","letter_grade_f00fedc4":"letter mark","other_ddacb37d":"other","percent_448ea947":"per cent","points_bceb5005":"points"},"es":{"gpa_scale_6710e2ee":"Escala de GPA","letter_grade_f00fedc4":"letra de calificación","other_ddacb37d":"otro","percent_448ea947":"porcentaje","points_bceb5005":"puntos"},"fa":{"gpa_scale_6710e2ee":"مقایس معدل","letter_grade_f00fedc4":"نمره با حروف الفبا","other_ddacb37d":"سایر","percent_448ea947":"درصد","points_bceb5005":"امتیازها"},"fi":{"gpa_scale_6710e2ee":"GPA-asteikko","letter_grade_f00fedc4":"kirjainarvosana","other_ddacb37d":"muu","percent_448ea947":"prosenttia","points_bceb5005":"pistettä"},"fr":{"gpa_scale_6710e2ee":"Échelle de la moyenne pondérée cumulative","letter_grade_f00fedc4":"note à lettre","other_ddacb37d":"autre","percent_448ea947":"pour cent","points_bceb5005":"points"},"fr-CA":{"gpa_scale_6710e2ee":"Échelle MPC","letter_grade_f00fedc4":"notation par lettre","other_ddacb37d":"autre","percent_448ea947":"pour cent","points_bceb5005":"points"},"he":{"gpa_scale_6710e2ee":"סולם ההערכה GPA","letter_grade_f00fedc4":"הערכה מילולית","other_ddacb37d":"אחר","percent_448ea947":"אחוז","points_bceb5005":"נקודות"},"ht":{"gpa_scale_6710e2ee":"Echèl GPA","letter_grade_f00fedc4":"kategori lèt","other_ddacb37d":"lòt","percent_448ea947":"pousantaj","points_bceb5005":"pwen"},"hu":{"gpa_scale_6710e2ee":"GPA skála","letter_grade_f00fedc4":"Betű alapú érdemjegy ","other_ddacb37d":"Egyéb","percent_448ea947":"százalék","points_bceb5005":"pontszám"},"is":{"gpa_scale_6710e2ee":"Meðaleinkunnakvarði","letter_grade_f00fedc4":"bókstafseinkunn","other_ddacb37d":"annar","percent_448ea947":"hlutfall","points_bceb5005":"punktar"},"it":{"gpa_scale_6710e2ee":"Scala GPA","letter_grade_f00fedc4":"voto in lettere","other_ddacb37d":"altro","percent_448ea947":"percentuale","points_bceb5005":"punti"},"ja":{"gpa_scale_6710e2ee":"GPA スケール","letter_grade_f00fedc4":"文字による成績","other_ddacb37d":"その他","percent_448ea947":"パーセント","points_bceb5005":"ポイント"},"mi":{"gpa_scale_6710e2ee":"tauine GPA","letter_grade_f00fedc4":"kōeke reta","other_ddacb37d":"te tahi atu","percent_448ea947":"ōrau","points_bceb5005":"ngā koinga"},"nb":{"gpa_scale_6710e2ee":"Tallkarakter (GPA)-skala","letter_grade_f00fedc4":"Bokstavkarakter","other_ddacb37d":"annen","percent_448ea947":"prosent","points_bceb5005":"poeng"},"nb-x-k12":{"gpa_scale_6710e2ee":"Tallvurderingsskala","letter_grade_f00fedc4":"Bokstavvurdering","other_ddacb37d":"annen","percent_448ea947":"prosent","points_bceb5005":"poeng"},"nl":{"gpa_scale_6710e2ee":"Gemiddeld eindcijfer","letter_grade_f00fedc4":"beoordeling in lettervorm","other_ddacb37d":"overige","percent_448ea947":"percentage","points_bceb5005":"punten"},"nn":{"gpa_scale_6710e2ee":"GPA-skala","letter_grade_f00fedc4":"bokstavkarakter","other_ddacb37d":"anna","percent_448ea947":"prosent","points_bceb5005":"poeng"},"pl":{"gpa_scale_6710e2ee":"Skala GPA","letter_grade_f00fedc4":"ocena literowa","other_ddacb37d":"inne","percent_448ea947":"procent","points_bceb5005":"punkty"},"pt":{"gpa_scale_6710e2ee":"Escala GPA","letter_grade_f00fedc4":"classificar letra","other_ddacb37d":"outro","percent_448ea947":"porcento","points_bceb5005":"pontos"},"pt-BR":{"gpa_scale_6710e2ee":"escala GPA","letter_grade_f00fedc4":"nota por conceito","other_ddacb37d":"outro","percent_448ea947":"porcentagem","points_bceb5005":"pontos"},"ru":{"gpa_scale_6710e2ee":"Шкала GPA","letter_grade_f00fedc4":"оценка по буквенной системе","other_ddacb37d":"другое","percent_448ea947":"процент","points_bceb5005":"баллы"},"sl":{"gpa_scale_6710e2ee":"Lestvica GPA","letter_grade_f00fedc4":"črkovna ocena","other_ddacb37d":"drugo","percent_448ea947":"odstotek","points_bceb5005":"točk"},"sv":{"gpa_scale_6710e2ee":"GPA Skala","letter_grade_f00fedc4":"bokstavsomdöme","other_ddacb37d":"övriga","percent_448ea947":"procent","points_bceb5005":"poäng"},"sv-x-k12":{"gpa_scale_6710e2ee":"Skala för genomsnittsbetyg","letter_grade_f00fedc4":"bokstavsbedömning","other_ddacb37d":"övriga","percent_448ea947":"procent","points_bceb5005":"poäng"},"tr":{"gpa_scale_6710e2ee":"GNO ölçeği","other_ddacb37d":"diğer","percent_448ea947":"yüzde"},"uk":{"gpa_scale_6710e2ee":"GPA масштаб","letter_grade_f00fedc4":"оцінка у вигляді літери","other_ddacb37d":"інше","percent_448ea947":"відсоток","points_bceb5005":"бали"},"zh-Hans":{"gpa_scale_6710e2ee":"绩点","letter_grade_f00fedc4":"字母评分","other_ddacb37d":"其他","percent_448ea947":"百分比","points_bceb5005":"分值"},"zh-Hant":{"gpa_scale_6710e2ee":"GPA 比例","letter_grade_f00fedc4":"字母分級","other_ddacb37d":"其他","percent_448ea947":"百分比","points_bceb5005":"分數"}}' ) )
      a( "jQeR" )
      a( "0sPK" )
      var d = n[ "default" ].scoped( "cyoe_assignment_sidebar_grading_types" )
      const i = {
        points: {
          get label() {
            return d.t( "points" )
          },
          key: "points"
        },
        percent: {
          get label() {
            return d.t( "percent" )
          },
          key: "percent"
        },
        letter_grade: {
          get label() {
            return d.t( "letter grade" )
          },
          key: "letter_grade"
        },
        gpa_scale: {
          get label() {
            return d.t( "GPA scale" )
          },
          key: "gpa_scale"
        },
        other: {
          get label() {
            return d.t( "other" )
          },
          key: "other"
        }
      }
      var r = i
      Object( s[ "a" ] )( JSON.parse( '{"ar":{"score_pts_adcb1af3":"%{score} نقاط"},"ca":{"score_pts_adcb1af3":"%{score} punts"},"cy":{"score_pts_adcb1af3":"%{score} pwynt"},"da":{"score_pts_adcb1af3":"%{score} point"},"da-x-k12":{"score_pts_adcb1af3":"%{score} point"},"de":{"score_pts_adcb1af3":"%{score} Pkte."},"en-AU":{"score_pts_adcb1af3":"%{score} pts"},"en-AU-x-unimelb":{"score_pts_adcb1af3":"%{score} pts"},"en-CA":{"score_pts_adcb1af3":"%{score} pts"},"en-GB":{"score_pts_adcb1af3":"%{score} pts"},"en-GB-x-lbs":{"score_pts_adcb1af3":"%{score} pts"},"en-GB-x-ukhe":{"score_pts_adcb1af3":"%{score} pts"},"es":{"score_pts_adcb1af3":"%{score} ptos."},"fa":{"score_pts_adcb1af3":"%{score} امتیاز"},"fi":{"score_pts_adcb1af3":"%{score} pistettä"},"fr":{"score_pts_adcb1af3":"%{score} pts"},"fr-CA":{"score_pts_adcb1af3":"%{score} pts"},"he":{"score_pts_adcb1af3":"%{score} נקודות"},"ht":{"score_pts_adcb1af3":"%{score} pwen"},"hu":{"score_pts_adcb1af3":"%{score} pont"},"is":{"score_pts_adcb1af3":"%{score} punktar"},"it":{"score_pts_adcb1af3":"%{score} pt."},"ja":{"score_pts_adcb1af3":"%{score} 点"},"mi":{"score_pts_adcb1af3":"%{score} ngā koinga"},"nb":{"score_pts_adcb1af3":"%{score} poeng"},"nb-x-k12":{"score_pts_adcb1af3":"%{score} poeng"},"nl":{"score_pts_adcb1af3":"%{score} punten"},"nn":{"score_pts_adcb1af3":"%{score} poeng"},"pl":{"score_pts_adcb1af3":"%{score} pkt"},"pt":{"score_pts_adcb1af3":"%{score} pts"},"pt-BR":{"score_pts_adcb1af3":"%{score} pts"},"ru":{"score_pts_adcb1af3":"%{score} баллов"},"sl":{"score_pts_adcb1af3":"%{score} točk"},"sv":{"score_pts_adcb1af3":"%{score} poäng"},"sv-x-k12":{"score_pts_adcb1af3":"%{score} poäng"},"tr":{"score_pts_adcb1af3":"%{score} puan"},"uk":{"score_pts_adcb1af3":"%{score}балів"},"zh-Hans":{"score_pts_adcb1af3":"%{score} 分"},"zh-Hant":{"score_pts_adcb1af3":"%{score} 分"}}' ) )
      var o = n[ "default" ].scoped( "cyoe_assignment_sidebar_score" )
      var _ = a( "HbFp" )
      const c = e => {
        const t = _[ "a" ].parse( e )
        return !isNaN( t ) && isFinite( t )
      }
      const l = e => !!e && !!e.grading_scheme
      const u = e => {
        const t = e ? e.grading_type : r.percent.key
        if ( ( t === r.letter_grade.key || t === r.gpa_scale.key ) && !l( e ) ) return r.percent.key
        return t
      }
      const b = ( e, t ) => {
        const a = u( t )
        return a === r.points.key ? g( e, t ) : a === r.letter_grade.key || a === r.gpa_scale.key ? m( e, t ) : v( e )
      }
      const f = ( e, t, a ) => {
        e || ( e = a ? "1" : "0" )
        return p( b( e, t ), t )
      }
      const p = ( e, t ) => {
        const a = u( t )
        return a === r.points.key ? o.t( "%{score} pts", {
          score: o.n( e, {
            precision: 2,
            strip_insignificant_zeros: true
          } )
        } ) : a === r.letter_grade.key || a === r.gpa_scale.key ? e : o.n( e, {
          precision: 2,
          percentage: true,
          strip_insignificant_zeros: true
        } )
      }
      const g = ( e, t ) => {
        if ( !c( e ) ) return e
        if ( 0 === e ) return "0"
        const a = _[ "a" ].parse( e )
        const n = Number( t.points_possible ) || 100
        return parseFloat( ( a * n ).toFixed( 2 ) )
      }
      const m = ( e, t ) => {
        if ( "" === e ) return ""
        const a = _[ "a" ].parse( e )
        const n = {
          letter: null,
          score: -Infinity
        }
        for ( const e in t.grading_scheme ) {
          const s = _[ "a" ].parse( t.grading_scheme[ e ] )
          if ( s <= a && s > n.score || 0 === s && s > a ) {
            n.score = s
            n.letter = e
          }
        }
        return n.letter ? n.letter : a
      }
      const v = e => {
        if ( !c( e ) ) return e
        return Math.floor( 100 * e )
      }
      const h = ( e, t ) => {
        if ( "string" === typeof e && t.grading_type !== r.letter_grade.key && t.grading_type !== r.gpa_scale.key ) {
          const a = _[ "a" ].parse( e.replace( /%$/, "" ) )
          if ( !isNaN( a ) ) return p( a, t )
        }
        return e
      }
    },
    "Pm+R": function ( e, t, a ) {
      "use strict"
      var n = a( "GLiE" )
      var s = a.n( n )
      var d = a( "pQTu" )
      var i = a( "m0r6" )
      Object( i[ "a" ] )( JSON.parse( '{"ar":{"assignments_1e02582c":"المهام","discussions_a5f96392":"مناقشات","other_1c6d9c79":"أخرى","quizzes_7e598f57":"الاختبارات الموجزة","wiki_6603e81b":"Wiki"},"ca":{"assignments_1e02582c":"Tasques","discussions_a5f96392":"Debats","other_1c6d9c79":"Altres","quizzes_7e598f57":"Qüestionaris","wiki_6603e81b":"Wiki"},"cy":{"assignments_1e02582c":"Aseiniadau","discussions_a5f96392":"Trafodaethau","other_1c6d9c79":"Arall","quizzes_7e598f57":"Cwisiau","wiki_6603e81b":"Wici"},"da":{"assignments_1e02582c":"Opgaver","discussions_a5f96392":"Diskussioner","other_1c6d9c79":"Anden","quizzes_7e598f57":"Test","wiki_6603e81b":"Wiki"},"da-x-k12":{"assignments_1e02582c":"Opgaver","discussions_a5f96392":"Diskussioner","other_1c6d9c79":"Anden","quizzes_7e598f57":"Quizzer","wiki_6603e81b":"Wiki"},"de":{"assignments_1e02582c":"Aufgaben","discussions_a5f96392":"Diskussionen","other_1c6d9c79":"Sonstige","quizzes_7e598f57":"Quizze","wiki_6603e81b":"Wiki"},"el":{"assignments_1e02582c":"Εργασίες","discussions_a5f96392":"Συζητήσεις","quizzes_7e598f57":"Κουίζ"},"en-AU":{"assignments_1e02582c":"Assignments","discussions_a5f96392":"Discussions","other_1c6d9c79":"Other","quizzes_7e598f57":"Quizzes","wiki_6603e81b":"Wiki"},"en-AU-x-unimelb":{"assignments_1e02582c":"Assignments","discussions_a5f96392":"Discussions","other_1c6d9c79":"Other","quizzes_7e598f57":"Quizzes","wiki_6603e81b":"Wiki"},"en-CA":{"assignments_1e02582c":"Assignments","discussions_a5f96392":"Discussions","other_1c6d9c79":"Other","quizzes_7e598f57":"Quizzes","wiki_6603e81b":"Wiki"},"en-GB":{"assignments_1e02582c":"Assignments","discussions_a5f96392":"Discussions","other_1c6d9c79":"Other","quizzes_7e598f57":"Quizzes","wiki_6603e81b":"Wiki"},"en-GB-x-lbs":{"assignments_1e02582c":"Tasks","discussions_a5f96392":"Discussions","other_1c6d9c79":"Other","quizzes_7e598f57":"Surveys","wiki_6603e81b":"Wiki"},"en-GB-x-ukhe":{"assignments_1e02582c":"Assignments","discussions_a5f96392":"Discussions","other_1c6d9c79":"Other","quizzes_7e598f57":"Quizzes","wiki_6603e81b":"Wiki"},"es":{"assignments_1e02582c":"Tareas","discussions_a5f96392":"Foros de discusión","other_1c6d9c79":"Otro","quizzes_7e598f57":"Evaluaciones","wiki_6603e81b":"Wiki"},"fa":{"assignments_1e02582c":"تکلیف ها","discussions_a5f96392":"بحث ها","other_1c6d9c79":"سایر","quizzes_7e598f57":"آزمون‌ها","wiki_6603e81b":"ویکی"},"fi":{"assignments_1e02582c":"Tehtävät","discussions_a5f96392":"Keskustelut","other_1c6d9c79":"Muu","quizzes_7e598f57":"Testit","wiki_6603e81b":"Wiki"},"fr":{"assignments_1e02582c":"Travaux","discussions_a5f96392":"Discussions","other_1c6d9c79":"Autres","quizzes_7e598f57":"Questionnaires","wiki_6603e81b":"Wiki"},"fr-CA":{"assignments_1e02582c":"Tâches","discussions_a5f96392":"Discussions","other_1c6d9c79":"Autre","quizzes_7e598f57":"Questionnaires","wiki_6603e81b":"Wiki"},"he":{"assignments_1e02582c":"משימות","discussions_a5f96392":"דיונים","other_1c6d9c79":"אחר","quizzes_7e598f57":"בחנים","wiki_6603e81b":"וויקי"},"ht":{"assignments_1e02582c":"Sesyon","discussions_a5f96392":"Diskisyon","other_1c6d9c79":"Lòt","quizzes_7e598f57":"Quiz","wiki_6603e81b":"Wiki"},"hu":{"assignments_1e02582c":"Feladatok","discussions_a5f96392":"Fórumok","other_1c6d9c79":"Egyéb","quizzes_7e598f57":"Kvízek","wiki_6603e81b":"Wiki"},"hy":{"assignments_1e02582c":"Հանձնարարություններ","discussions_a5f96392":"Քննարկումներ","quizzes_7e598f57":"Թեստեր"},"is":{"assignments_1e02582c":"Verkefni","discussions_a5f96392":"Umræður","other_1c6d9c79":"Annað","quizzes_7e598f57":"Próf","wiki_6603e81b":"Wiki"},"it":{"assignments_1e02582c":"Compiti","discussions_a5f96392":"Discussioni","other_1c6d9c79":"Altro","quizzes_7e598f57":"Quiz","wiki_6603e81b":"Wiki"},"ja":{"assignments_1e02582c":"課題","discussions_a5f96392":"ディスカッション","other_1c6d9c79":"その他","quizzes_7e598f57":"クイズ","wiki_6603e81b":"ウィキ"},"ko":{"assignments_1e02582c":"과제","discussions_a5f96392":"토론","quizzes_7e598f57":"퀴즈"},"mi":{"assignments_1e02582c":"Ngā Whakataunga","discussions_a5f96392":"Ngā Kōrerorero","other_1c6d9c79":"Ētahi atu","quizzes_7e598f57":"Ngā Quizzes","wiki_6603e81b":"Wiki"},"nb":{"assignments_1e02582c":"Oppgaver","discussions_a5f96392":"Diskusjoner","other_1c6d9c79":"Annen","quizzes_7e598f57":"Tester","wiki_6603e81b":"Wiki"},"nb-x-k12":{"assignments_1e02582c":"Oppgaver","discussions_a5f96392":"Diskusjoner","other_1c6d9c79":"Annen","quizzes_7e598f57":"Tester","wiki_6603e81b":"Wiki"},"nl":{"assignments_1e02582c":"Opdrachten","discussions_a5f96392":"Discussies","other_1c6d9c79":"Overige","quizzes_7e598f57":"Toetsen","wiki_6603e81b":"Wiki"},"nn":{"assignments_1e02582c":"Oppgåver","discussions_a5f96392":"Diskusjonar","other_1c6d9c79":"Anna","quizzes_7e598f57":"Quizar","wiki_6603e81b":"Wiki"},"pl":{"assignments_1e02582c":"Zadania","discussions_a5f96392":"Dyskusje","other_1c6d9c79":"Inne","quizzes_7e598f57":"Testy","wiki_6603e81b":"Wiki"},"pt":{"assignments_1e02582c":"Tarefas","discussions_a5f96392":"Discussões","other_1c6d9c79":"Outro","quizzes_7e598f57":"Testes","wiki_6603e81b":"Wiki"},"pt-BR":{"assignments_1e02582c":"Tarefas","discussions_a5f96392":"Fóruns","other_1c6d9c79":"Outro","quizzes_7e598f57":"Testes","wiki_6603e81b":"Wiki"},"ru":{"assignments_1e02582c":"Задания","discussions_a5f96392":"Дискуссии","other_1c6d9c79":"Другое","quizzes_7e598f57":"Тесты","wiki_6603e81b":"Wiki"},"sl":{"assignments_1e02582c":"Naloge:","discussions_a5f96392":"Razprave","other_1c6d9c79":"Drugo","quizzes_7e598f57":"Kvizi","wiki_6603e81b":"Wiki"},"sv":{"assignments_1e02582c":"Uppgifter","discussions_a5f96392":"Diskussioner","other_1c6d9c79":"Annat","quizzes_7e598f57":"Quiz","wiki_6603e81b":"Wiki"},"sv-x-k12":{"assignments_1e02582c":"Uppgifter","discussions_a5f96392":"Diskussioner","other_1c6d9c79":"Annat","quizzes_7e598f57":"Quiz","wiki_6603e81b":"Wiki"},"tr":{"assignments_1e02582c":"Ödevler","discussions_a5f96392":"Tartışmalar","other_1c6d9c79":"Diğer","quizzes_7e598f57":"Kısa sınavlar","wiki_6603e81b":"Wiki"},"uk":{"assignments_1e02582c":"Завдання","discussions_a5f96392":"Обговорення","other_1c6d9c79":"Інше","quizzes_7e598f57":"Контрольні роботи","wiki_6603e81b":"Вікі"},"zh-Hans":{"assignments_1e02582c":"作业","discussions_a5f96392":"讨论","other_1c6d9c79":"其他","quizzes_7e598f57":"测验","wiki_6603e81b":"维基"},"zh-Hant":{"assignments_1e02582c":"作業列表","discussions_a5f96392":"討論","other_1c6d9c79":"其他","quizzes_7e598f57":"測驗","wiki_6603e81b":"維基"}}' ) )
      a( "jQeR" )
      a( "0sPK" )
      var r = d[ "default" ].scoped( "assignment_categories" )
      const o = {
        label: r.t( "Other" ),
        id: "other",
        submissionTypes: [ "" ]
      }
      const _ = {
        list: [ {
          label: r.t( "Assignments" ),
          id: "assignment",
          contentTypeClass: "assignment",
          submissionTypes: [ "online_upload", "online_text_entry", "online_url", "on_paper", "external_tool", "not_graded", "media_recording", "none" ]
        }, {
          label: r.t( "Quizzes" ),
          id: "quiz",
          contentTypeClass: "quiz",
          submissionTypes: [ "online_quiz" ]
        }, {
          label: r.t( "Discussions" ),
          id: "discussion",
          contentTypeClass: "discussion_topic",
          submissionTypes: [ "discussion_topic" ]
        }, {
          label: r.t( "Wiki" ),
          id: "document",
          contentTypeClass: "wiki_page",
          submissionTypes: [ "wiki_page" ]
        }, o ]
      }
      _.getCategory = e => {
        const t = s.a.find( _.list, t => e.submission_types.length && s.a.find( e.submission_types, e => -1 !== t.submissionTypes.indexOf( e ) ) )
        return t || o
      }
      t[ "a" ] = _
    },
    SLVX: function ( e, t, a ) {
      "use strict"
      a.d( t, "a", ( function () {
        return n
      } ) )

      function n( e ) {
        var t
        var a = e.Symbol
        if ( "function" === typeof a )
          if ( a.observable ) t = a.observable
        else {
          t = a( "observable" )
          a.observable = t
        } else t = "@@observable"
        return t
      }
    },
    bCCX: function ( e, t, a ) {
      "use strict"
      a.r( t );
      ( function ( e, n ) {
        var s = a( "SLVX" )
        var d
        if ( "undefined" !== typeof self ) d = self
        else if ( "undefined" !== typeof window ) d = window
        else if ( "undefined" !== typeof e ) d = e
        else {
          d = n
        }
        var i = Object( s[ "a" ] )( d )
        t[ "default" ] = i
      } ).call( this, a( "yLpj" ), a( "3UD+" )( e ) )
    },
    f9Fg: function ( e, t, a ) {
      "use strict"
      a.d( t, "a", ( function () {
        return u
      } ) )
      var n = a( "VTBJ" )
      var s = a( "1OyB" )
      var d = a( "vuIU" )
      var i = a( "Ji7U" )
      var r = a( "LK+K" )
      var o = a( "q1tI" )
      var _ = a.n( o )
      var c = a( "hPGw" )
      var l = _.a.createElement( "path", {
        d: "M568.129648 0.0124561278L392 176.142104 1175.86412 960.130789 392 1743.87035 568.129648 1920 1528.24798 960.130789z",
        fillRule: "evenodd",
        stroke: "none",
        strokeWidth: "1"
      } )
      var u = function ( e ) {
        Object( i[ "a" ] )( a, e )
        var t = Object( r[ "a" ] )( a )

        function a() {
          Object( s[ "a" ] )( this, a )
          return t.apply( this, arguments )
        }
        Object( d[ "a" ] )( a, [ {
          key: "render",
          value: function () {
            return _.a.createElement( c[ "a" ], Object.assign( {}, this.props, {
              name: "IconArrowOpenEnd",
              viewBox: "0 0 1920 1920",
              bidirectional: true
            } ), l )
          }
        } ] )
        a.displayName = "IconArrowOpenEndSolid"
        return a
      }( o[ "Component" ] )
      u.glyphName = "arrow-open-end"
      u.variant = "Solid"
      u.propTypes = Object( n[ "a" ] )( {}, c[ "a" ].propTypes )
    },
    xI9L: function ( e, t, a ) {
      "use strict"
      a.d( t, "a", ( function () {
        return u
      } ) )
      var n = a( "VTBJ" )
      var s = a( "1OyB" )
      var d = a( "vuIU" )
      var i = a( "Ji7U" )
      var r = a( "LK+K" )
      var o = a( "q1tI" )
      var _ = a.n( o )
      var c = a( "hPGw" )
      var l = _.a.createElement( "path", {
        d: "M568.129648 0.0124561278L392 176.142104 1175.86412 960.130789 392 1743.87035 568.129648 1920 1528.24798 960.130789z",
        fillRule: "evenodd",
        stroke: "none",
        strokeWidth: "1",
        transform: "matrix(0 1 1 0 .067 -.067)"
      } )
      var u = function ( e ) {
        Object( i[ "a" ] )( a, e )
        var t = Object( r[ "a" ] )( a )

        function a() {
          Object( s[ "a" ] )( this, a )
          return t.apply( this, arguments )
        }
        Object( d[ "a" ] )( a, [ {
          key: "render",
          value: function () {
            return _.a.createElement( c[ "a" ], Object.assign( {}, this.props, {
              name: "IconArrowOpenDown",
              viewBox: "0 0 1920 1920"
            } ), l )
          }
        } ] )
        a.displayName = "IconArrowOpenDownSolid"
        return a
      }( o[ "Component" ] )
      u.glyphName = "arrow-open-down"
      u.variant = "Solid"
      u.propTypes = Object( n[ "a" ] )( {}, c[ "a" ].propTypes )
    }
  }
] )

//# sourceMappingURL=106-c-da1017b40f.js.map

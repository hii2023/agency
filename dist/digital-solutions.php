<? include("template.php");
    function main() {
?>

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Mulish:wght@400;600;700;800;900&display=swap">
<style>
.ax-ds{
  
  --indigo: #0795fe;        
  --indigo-600: #0678cc;
  --indigo-50: #e9f5ff;
  --navy: #092a49;          
  --navy-700: #0d3a63;
  --green: #0795fe;         
  --green-600: #0678cc;

  --ink: #2a3464;      
  --body: #4a5468;     
  --muted: #6b7488;    
  --line: #e3e8ef;     
  --bg: #ffffff;
  --bg-soft: #f6f9fc;
  --bg-indigo: #eef6ff;

  --radius: 6px;
  --radius-sm: 5px;
  --shadow: 0 1px 2px rgba(16,24,40,.04), 0 8px 24px rgba(16,24,40,.05);
  --shadow-lift: 0 12px 32px rgba(7,149,254,.14);
  --maxw: 1120px;
  --ease: cubic-bezier(.2,.7,.2,1);
}.ax-ds *{ box-sizing: border-box; }.ax-ds{ scroll-behavior: smooth; }.ax-ds{
  margin: 0;
  font-family: 'Poppins', system-ui, sans-serif;
  color: var(--body);
  background: var(--bg);
  line-height: 1.7;
  font-size: .97rem;
  -webkit-font-smoothing: antialiased;
}.ax-ds img{ max-width: 100%; display: block; }.ax-ds a{ color: inherit; text-decoration: none; }.ax-ds h1, .ax-ds h2, .ax-ds h3, .ax-ds h4{ font-family: 'Mulish', system-ui, sans-serif; color: var(--ink); line-height: 1.2; margin: 0; font-weight: 800; letter-spacing: -.01em; }.ax-ds h1{ font-size: clamp(2rem, 4.6vw, 3rem); font-weight: 900; letter-spacing: -.02em; }.ax-ds h2{ font-size: clamp(1.55rem, 3.2vw, 2.2rem); }.ax-ds h3{ font-size: 1.15rem; font-weight: 800; }.ax-ds p{ margin: 0; }.ax-ds .wrap{ max-width: var(--maxw); margin: 0 auto; padding: 0 24px; }.ax-ds .section{ padding: 84px 0; }.ax-ds .section-sm{ padding: 56px 0; }.ax-ds .center{ text-align: center; }.ax-ds .lead{ font-size: 1.15rem; color: var(--muted); max-width: 60ch; }.ax-ds .center .lead{ margin-left: auto; margin-right: auto; }.ax-ds .eyebrow{
  font-family: 'Poppins', sans-serif;
  font-size: .76rem; font-weight: 600;
  letter-spacing: .14em; text-transform: uppercase;
  color: var(--indigo);
  display: inline-block; margin-bottom: 14px;
}.ax-ds .btn{
  display: inline-flex; align-items: center; gap: 8px;
  font: inherit; font-weight: 500; font-size: .95rem;
  padding: 13px 26px; border-radius: 5px; border: 1px solid transparent;
  cursor: pointer; transition: background .2s var(--ease), border-color .2s var(--ease), color .2s var(--ease), transform .2s var(--ease);
  white-space: nowrap;
}.ax-ds .btn:active{ transform: translateY(1px); }.ax-ds .btn-primary{ background: var(--navy); color: #fff; }.ax-ds .btn-primary:hover{ background: var(--navy-700); }.ax-ds .btn-indigo{ background: var(--indigo); color: #fff; }.ax-ds .btn-indigo:hover{ background: var(--indigo-600); }.ax-ds .btn-ghost{ background: transparent; color: var(--ink); border-color: var(--line); }.ax-ds .btn-ghost:hover{ border-color: var(--indigo); color: var(--indigo); }.ax-ds .btn svg{ width: 18px; height: 18px; }.ax-ds .topbar{ background: var(--indigo); color: #fff; font-size: .84rem; }.ax-ds .topbar .wrap{ display: flex; align-items: center; justify-content: space-between; height: 40px; gap: 20px; }.ax-ds .topbar-left{ display: flex; align-items: center; gap: 18px; }.ax-ds .topbar a{ color: #fff; display: inline-flex; align-items: center; gap: 7px; transition: opacity .2s; }.ax-ds .topbar a:hover{ opacity: .82; }.ax-ds .topbar svg{ width: 14px; height: 14px; }.ax-ds .topbar .sep{ opacity: .5; }.ax-ds .nav{
  position: sticky; top: 0; z-index: 50;
  background: #fff;
  border-bottom: 1px solid var(--line);
  box-shadow: 0 1px 8px rgba(9,42,73,.05);
}.ax-ds .nav .wrap{ display: flex; align-items: center; justify-content: space-between; height: 74px; }.ax-ds .brand{ display: flex; align-items: center; gap: 10px; font-family: 'Mulish', sans-serif; font-weight: 900; color: var(--ink); font-size: 1.32rem; letter-spacing: -.02em; }.ax-ds .brand .mark{ width: auto; height: auto; max-width: 200px; max-height: 40px; }.ax-ds .brand-invert .mark{ filter: brightness(0) invert(1); opacity: .95; }.ax-ds .nav-links{ display: flex; align-items: center; gap: 26px; }.ax-ds .nav-links a{
  color: var(--ink); font-size: .95rem; font-weight: 500; transition: color .2s;
  padding: 8px 0; position: relative;
}.ax-ds .nav-links a:hover{ color: var(--indigo); }.ax-ds .nav-links a.active{ color: #fff; background: var(--indigo); padding: 8px 20px; border-radius: 30px; }.ax-ds .has-drop{ position: relative; }.ax-ds .has-drop > a{ display: inline-flex; align-items: center; gap: 6px; cursor: pointer; }.ax-ds .has-drop > a .caret{ width: 12px; height: 12px; transition: transform .2s; }.ax-ds .has-drop:hover > a .caret{ transform: rotate(180deg); }.ax-ds .drop{
  position: absolute; top: 100%; left: -18px; min-width: 268px;
  background: #fff; border: 1px solid var(--line); border-top: 2px solid var(--indigo);
  border-radius: 0 0 5px 5px; box-shadow: 0 14px 34px rgba(9,42,73,.12);
  padding: 8px 0; opacity: 0; visibility: hidden; transform: translateY(8px);
  transition: opacity .2s var(--ease), transform .2s var(--ease), visibility .2s;
}.ax-ds .has-drop:hover .drop, .ax-ds .has-drop:focus-within .drop{ opacity: 1; visibility: visible; transform: translateY(0); }.ax-ds .drop a{
  display: flex; align-items: center; gap: 9px; padding: 10px 18px;
  font-size: .9rem; color: var(--body); font-weight: 400; border-radius: 0;
}.ax-ds .drop a:hover{ background: var(--bg-indigo); color: var(--indigo); }.ax-ds .drop a .ar{ color: var(--indigo); font-size: .8rem; }.ax-ds .nav-cta{ display: flex; align-items: center; gap: 12px; }.ax-ds .nav-toggle{ display: none; background: none; border: 0; cursor: pointer; padding: 6px; }.ax-ds .nav-toggle svg{ width: 26px; height: 26px; color: var(--ink); }.ax-ds .hero{ background: linear-gradient(180deg, var(--bg-indigo), #fff); border-bottom: 1px solid var(--line); }.ax-ds .hero .wrap{ padding-top: 76px; padding-bottom: 76px; }.ax-ds .hero-grid{ display: grid; grid-template-columns: 1.05fr .95fr; gap: 56px; align-items: center; }.ax-ds .hero h1{ margin-bottom: 18px; }.ax-ds .hero .lead{ margin-bottom: 30px; font-size: 1.22rem; }.ax-ds .hero-actions{ display: flex; gap: 14px; flex-wrap: wrap; }.ax-ds .hero-note{ margin-top: 18px; font-size: .88rem; color: var(--muted); display: flex; align-items: center; gap: 8px; }.ax-ds .hero-note svg{ width: 16px; height: 16px; color: var(--green); }.ax-ds .panel{
  background: #fff; border: 1px solid var(--line); border-radius: var(--radius);
  box-shadow: var(--shadow); padding: 22px;
}.ax-ds .panel-row{ display: flex; align-items: center; gap: 12px; padding: 12px 0; border-bottom: 1px solid var(--line); }.ax-ds .panel-row:last-child{ border-bottom: 0; }.ax-ds .panel-row .ic{ width: 38px; height: 38px; border-radius: 9px; background: var(--indigo-50); color: var(--indigo); display: grid; place-items: center; flex: 0 0 auto; }.ax-ds .panel-row .ic svg{ width: 20px; height: 20px; }.ax-ds .panel-row b{ color: var(--ink); font-weight: 600; display: block; font-size: .96rem; }.ax-ds .panel-row span{ font-size: .85rem; color: var(--muted); }.ax-ds .panel-row .tag{ margin-left: auto; font-size: .72rem; font-weight: 600; color: var(--green); background: #e9f5ff; padding: 4px 9px; border-radius: 20px; }.ax-ds .journey{ position: relative; display: grid; gap: 0; max-width: 420px; margin-left: auto; }.ax-ds .j-step{ display: grid; gap: 8px; }.ax-ds .j-cap{
  font-family: 'Poppins', sans-serif; font-size: .7rem; font-weight: 500;
  letter-spacing: .12em; text-transform: uppercase; color: var(--muted);
}.ax-ds .j-card{ background: #fff; border: 1px solid var(--line); border-radius: var(--radius-sm); box-shadow: var(--shadow); }.ax-ds .j-line{ width: 2px; height: 22px; margin: 6px 0 6px 21px; background: linear-gradient(180deg, var(--line), #9fd2ff); border-radius: 2px; }.ax-ds .j-search{ display: flex; align-items: center; gap: 12px; padding: 14px 16px; color: var(--ink); font-size: .95rem; }.ax-ds .j-search svg{ width: 18px; height: 18px; color: var(--indigo); flex: 0 0 auto; }.ax-ds .j-site{ overflow: hidden; }.ax-ds .j-site-bar{ display: flex; align-items: center; gap: 6px; padding: 9px 12px; background: var(--bg-soft); border-bottom: 1px solid var(--line); }.ax-ds .j-site-bar span{ width: 8px; height: 8px; border-radius: 50%; background: var(--line); }.ax-ds .j-site-bar em{ font-style: normal; font-size: .78rem; color: var(--muted); margin-left: 8px; font-family: 'Poppins', sans-serif; }.ax-ds .j-site-body{ padding: 16px; display: grid; gap: 12px; }.ax-ds .j-site-body b{ color: var(--ink); font-size: .98rem; font-weight: 600; }.ax-ds .j-btn{
  display: inline-block; justify-self: start; background: var(--green); color: #fff;
  font-size: .82rem; font-weight: 600; padding: 8px 14px; border-radius: 8px;
}.ax-ds .j-chat{ padding: 14px 16px; display: grid; gap: 9px; background: #f4f9ff; }.ax-ds .j-bubble{ max-width: 85%; padding: 9px 13px; border-radius: 12px; font-size: .88rem; line-height: 1.45; }.ax-ds .j-bubble.in{ background: #fff; border: 1px solid var(--line); color: var(--ink); justify-self: start; border-bottom-left-radius: 4px; }.ax-ds .j-bubble.out{ background: #dff0ff; color: #08355c; justify-self: end; border-bottom-right-radius: 4px; }.ax-ds .j-badge{
  position: absolute; right: -14px; bottom: -18px;
  display: flex; align-items: center; gap: 8px;
  background: var(--ink); color: #fff; font-size: .78rem; font-weight: 500;
  padding: 10px 14px; border-radius: 10px; box-shadow: var(--shadow-lift);
}.ax-ds .j-badge svg{ width: 15px; height: 15px; color: #5ab9ff; }.ax-ds .journey-stage{ position: relative; min-height: 430px; transition: opacity .22s var(--ease); }.ax-ds .journey-stage.fading{ opacity: 0; }.ax-ds .j-dots{ display: flex; gap: 8px; justify-content: center; margin-top: 30px; }.ax-ds .j-dot{
  width: 8px; height: 8px; padding: 0; border-radius: 50%;
  border: 0; background: #cbd9e6; cursor: pointer;
  transition: background .2s var(--ease), width .2s var(--ease);
}.ax-ds .j-dot:hover{ background: #9fc4dd; }.ax-ds .j-dot.on{ background: var(--indigo); width: 22px; border-radius: 5px; }.ax-ds .j-dot:focus-visible{ outline: 2px solid var(--indigo); outline-offset: 3px; }.ax-ds @media (max-width: 900px){
  .journey { max-width: 100%; margin: 0; }
  .j-badge { position: static; justify-self: start; margin-top: 14px; }
  .journey-stage { min-height: 0; }
}.ax-ds .grid{ display: grid; gap: 22px; }.ax-ds .grid-3{ grid-template-columns: repeat(3, 1fr); }.ax-ds .grid-2{ grid-template-columns: repeat(2, 1fr); }.ax-ds .card{
  background: #fff; border: 1px solid var(--line); border-radius: var(--radius);
  padding: 26px; transition: border-color .2s var(--ease), box-shadow .2s var(--ease), transform .2s var(--ease);
}.ax-ds a.card{ cursor: pointer; }.ax-ds a.card:hover{ border-color: #9fd2ff; box-shadow: var(--shadow-lift); transform: translateY(-3px); }.ax-ds .card .ic{ width: 46px; height: 46px; border-radius: 11px; background: var(--indigo-50); color: var(--indigo); display: grid; place-items: center; margin-bottom: 18px; }.ax-ds .card .ic svg{ width: 24px; height: 24px; }.ax-ds .card h3{ margin-bottom: 8px; }.ax-ds .card p{ font-size: .96rem; }.ax-ds .card .more{ margin-top: 16px; color: var(--indigo); font-weight: 600; font-size: .9rem; display: inline-flex; align-items: center; gap: 6px; }.ax-ds .card .more svg{ width: 15px; height: 15px; transition: transform .2s; }.ax-ds a.card:hover .more svg{ transform: translateX(3px); }.ax-ds .usecase{
  display: grid; grid-template-columns: 44px 1fr; gap: 18px;
  padding: 24px; border: 1px solid var(--line); border-radius: var(--radius); background: #fff;
}.ax-ds .usecase .num{ width: 44px; height: 44px; border-radius: 11px; background: var(--ink); color: #fff; display: grid; place-items: center; font-weight: 600; font-family: 'Poppins', sans-serif; }.ax-ds .usecase h3{ margin-bottom: 6px; }.ax-ds .usecase p{ font-size: .97rem; }.ax-ds .impact{
  margin-top: 14px; display: flex; gap: 12px; align-items: flex-start;
  background: #e9f5ff; border: 1px solid #b8ddff; border-radius: var(--radius-sm);
  padding: 13px 15px;
}.ax-ds .impact svg{ width: 20px; height: 20px; color: var(--green); flex: 0 0 auto; margin-top: 2px; }.ax-ds .impact b{ display: block; color: var(--green-600); font-size: .78rem; letter-spacing: .1em; text-transform: uppercase; margin-bottom: 2px; }.ax-ds .impact span{ color: var(--ink); font-size: .95rem; font-weight: 500; line-height: 1.5; }.ax-ds .steps{ counter-reset: step; display: grid; gap: 20px; }.ax-ds .step{ display: grid; grid-template-columns: 40px 1fr; gap: 16px; align-items: start; }.ax-ds .step .dot{ width: 40px; height: 40px; border-radius: 50%; border: 1px solid var(--line); display: grid; place-items: center; color: var(--indigo); font-weight: 600; background: var(--bg-indigo); }.ax-ds .step h4{ font-size: 1.05rem; margin-bottom: 4px; }.ax-ds .step p{ font-size: .95rem; }.ax-ds .checks{ list-style: none; padding: 0; margin: 0; display: grid; gap: 12px; }.ax-ds .checks li{ display: flex; gap: 12px; align-items: flex-start; font-size: 1rem; color: var(--body); }.ax-ds .checks li svg{ width: 22px; height: 22px; color: var(--green); flex: 0 0 auto; margin-top: 1px; }.ax-ds .stats{ display: grid; grid-template-columns: repeat(4,1fr); gap: 20px; }.ax-ds .stat{ text-align: center; padding: 20px; }.ax-ds .stat b{ display: block; font-size: 2.2rem; color: var(--indigo); font-weight: 700; letter-spacing: -.02em; }.ax-ds .stat span{ font-size: .9rem; color: var(--muted); }.ax-ds .soft{ background: var(--bg-soft); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }.ax-ds .cta-band{ background: linear-gradient(135deg, var(--navy), #0e4a7d); border-radius: 6px; padding: 52px; color: #fff; text-align: center; }.ax-ds .cta-band h2{ color: #fff; margin-bottom: 12px; }.ax-ds .cta-band p{ color: #e0e7ff; max-width: 52ch; margin: 0 auto 26px; font-size: 1.1rem; }.ax-ds .sh{ margin-bottom: 44px; }.ax-ds .sh h2{ margin-bottom: 12px; }.ax-ds .form{ display: grid; gap: 18px; }.ax-ds .field{ display: grid; gap: 7px; }.ax-ds .field label{ font-size: .9rem; font-weight: 600; color: var(--ink); }.ax-ds .field .req{ color: var(--green); }.ax-ds .field input, .ax-ds .field select, .ax-ds .field textarea{
  font: inherit; padding: 12px 14px; border: 1px solid var(--line); border-radius: 10px;
  background: #fff; color: var(--ink); transition: border-color .2s, box-shadow .2s;
}.ax-ds .field input:focus, .ax-ds .field select:focus, .ax-ds .field textarea:focus{
  outline: none; border-color: var(--indigo); box-shadow: 0 0 0 3px var(--indigo-50);
}.ax-ds .field textarea{ resize: vertical; min-height: 120px; }.ax-ds .field-row{ display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }.ax-ds .chips{ display: flex; flex-wrap: wrap; gap: 10px; }.ax-ds .chip{ position: relative; }.ax-ds .chip input{ position: absolute; opacity: 0; }.ax-ds .chip label{
  display: block; padding: 9px 15px; border: 1px solid var(--line); border-radius: 20px;
  font-size: .9rem; font-weight: 500; cursor: pointer; transition: all .2s; color: var(--body);
}.ax-ds .chip input:checked + label{ background: var(--indigo-50); border-color: var(--indigo); color: var(--indigo-600); }.ax-ds .tiers{ align-items: stretch; }.ax-ds .tier{ display: flex; flex-direction: column; background: #fff; border: 1px solid var(--line); border-radius: var(--radius); padding: 30px 26px; position: relative; transition: box-shadow .2s var(--ease), transform .2s var(--ease); }.ax-ds .tier:hover{ box-shadow: var(--shadow-lift); transform: translateY(-3px); }.ax-ds .tier-featured{ border-color: var(--indigo); box-shadow: 0 12px 34px rgba(79,70,229,.14); }.ax-ds .tier-badge{ position: absolute; top: -12px; left: 26px; background: var(--indigo); color: #fff; font-size: .72rem; font-weight: 600; padding: 5px 12px; border-radius: 20px; letter-spacing: .03em; }.ax-ds .tier h3{ font-size: 1.3rem; margin-bottom: 4px; }.ax-ds .tier-tag{ color: var(--muted); font-size: .92rem; margin-bottom: 18px; }.ax-ds .tier-price{ font-size: 2.2rem; font-weight: 700; color: var(--ink); letter-spacing: -.02em; margin-bottom: 22px; }.ax-ds .tier-feats{ margin-bottom: 26px; }.ax-ds .tier-feats li{ font-size: .94rem; }.ax-ds .tier .btn{ margin-top: auto; }.ax-ds .quote{ background: #fff; border: 1px solid var(--line); border-radius: var(--radius); padding: 26px; box-shadow: var(--shadow); }.ax-ds .quote .stars{ display: flex; gap: 2px; color: #f59e0b; margin-bottom: 14px; }.ax-ds .quote .stars svg{ width: 17px; height: 17px; fill: #f59e0b; }.ax-ds .quote p{ color: var(--ink); font-size: 1.02rem; line-height: 1.55; margin-bottom: 18px; }.ax-ds .quote .who b{ color: var(--ink); display: block; font-size: .95rem; }.ax-ds .quote .who span{ color: var(--muted); font-size: .85rem; }.ax-ds .faqs{ display: grid; gap: 12px; }.ax-ds .faq{ border: 1px solid var(--line); border-radius: var(--radius-sm); background: #fff; overflow: hidden; }.ax-ds .faq-q{ width: 100%; display: flex; align-items: center; justify-content: space-between; gap: 12px; background: none; border: 0; padding: 18px 20px; font: inherit; font-weight: 600; color: var(--ink); font-size: 1.02rem; cursor: pointer; text-align: left; }.ax-ds .faq-ic{ transition: transform .25s var(--ease); color: var(--indigo); transform: rotate(90deg); }.ax-ds .faq.open .faq-ic{ transform: rotate(-90deg); }.ax-ds .faq-a{ max-height: 0; overflow: hidden; transition: max-height .3s var(--ease); }.ax-ds .faq.open .faq-a{ max-height: 240px; }.ax-ds .faq-a p{ padding: 0 20px 18px; color: var(--body); font-size: .96rem; }.ax-ds .footer{ background: #092a49; color: #c3d6e6; padding: 56px 0 30px; }.ax-ds .footer .brand{ color: #fff; }.ax-ds .footer-grid{ display: grid; grid-template-columns: 1.4fr 1fr 1fr 1fr; gap: 32px; margin-bottom: 40px; }.ax-ds .footer h5{ color: #fff; font-size: .85rem; letter-spacing: .06em; text-transform: uppercase; margin: 0 0 14px; font-weight: 600; }.ax-ds .footer a, .ax-ds .footer p{ color: #a9c2d6; font-size: .92rem; display: block; margin-bottom: 9px; transition: color .2s; }.ax-ds .footer a:hover{ color: #fff; }.ax-ds .footer-bottom{ border-top: 1px solid #164e7d; padding-top: 22px; display: flex; justify-content: space-between; flex-wrap: wrap; gap: 12px; font-size: .85rem; color: #8aa7bf; }.ax-ds .wa-float{
  position: fixed; right: 22px; bottom: 22px; z-index: 60;
  width: 56px; height: 56px; border-radius: 50%; background: #25d366;
  display: grid; place-items: center; box-shadow: 0 8px 24px rgba(37,211,102,.4);
  transition: transform .2s;
}.ax-ds .wa-float:hover{ transform: scale(1.06); }.ax-ds .wa-float svg{ width: 30px; height: 30px; color: #fff; }.ax-ds .toast{
  position: fixed; left: 50%; bottom: 30px; transform: translateX(-50%) translateY(20px);
  background: var(--ink); color: #fff; padding: 13px 20px; border-radius: 10px;
  font-size: .92rem; opacity: 0; pointer-events: none; transition: all .3s var(--ease); z-index: 100;
}.ax-ds .toast.show{ opacity: 1; transform: translateX(-50%) translateY(0); }.ax-ds .reveal{ opacity: 0; transform: translateY(16px); transition: opacity .6s var(--ease), transform .6s var(--ease); }.ax-ds .reveal.in{ opacity: 1; transform: none; }.ax-ds @media (prefers-reduced-motion: reduce){
  * { scroll-behavior: auto !important; }
  .reveal { opacity: 1 !important; transform: none !important; transition: none; }
}.ax-ds @media (max-width: 900px){
  .hero-grid { grid-template-columns: 1fr; gap: 36px; }
  .grid-3 { grid-template-columns: 1fr 1fr; }
  .stats { grid-template-columns: 1fr 1fr; }
  .footer-grid { grid-template-columns: 1fr 1fr; }
  .nav-links { display: none; }
  .nav-toggle { display: block; }
  .nav.open .nav-links {
    display: flex; position: absolute; top: 66px; left: 0; right: 0; flex-direction: column;
    background: #fff; border-bottom: 1px solid var(--line); padding: 18px 24px; gap: 16px; align-items: flex-start;
  }
}.ax-ds @media (max-width: 560px){
  .section { padding: 60px 0; }
  .grid-3, .grid-2, .stats, .field-row { grid-template-columns: 1fr; }
  .cta-band { padding: 36px 22px; }
  .hero-actions { flex-direction: column; }
  .hero-actions .btn { justify-content: center; }
  .nav-cta .btn-ghost, .nav-cta .btn-indigo { display: none; }
}
.ax-ds { font-family: 'Poppins', system-ui, sans-serif; color: #4a5468; line-height: 1.7; }
.ax-ds img { max-width: 100%; }
</style>

<div class="ax-ds" id="app"></div>

<script>
/* ---------- content ---------- */
/* Axiotrix | content model (single source of truth)
   The website renders from this object. The Control Panel (admin.html)
   edits it and saves overrides to localStorage. Swap this layer for
   Supabase later without touching the pages. */

const DEFAULT_CONTENT = {
  global: {
    brand: "Axiotrix",
    tagline: "Solutions Simplified",
    whatsapp: "18664220499",
    email: "info@axiotrix.com",
    phone: "+1 866-422-0499",
    footerBlurb: "Axiotrix helps businesses get found online, capture more enquiries, and cut the manual work out of the working day."
  },

  home: {
    heroEyebrow: "Digital Solutions",
    heroTitle: "Your customers are searching. We make sure they find you.",
    heroText: "Alongside our existing services, Axiotrix now builds the digital side of your business: the website that brings enquiries in, and the tools and automations that handle them for you.",
    heroCtaPrimary: "Request a free consultation",
    heroCtaSecondary: "See how it works",
    heroNote: "Free 15-minute consultation. No cost, no obligation.",
    servicesEyebrow: "How we help",
    servicesTitle: "Five things we can set up for your business",
    servicesText: "Start with the one you need most. Each one fixes a real, everyday problem.",
    whyEyebrow: "Why it matters",
    whyTitle: "Your team should be serving customers, not doing repetitive admin",
    whyText: "Most teams lose hours every day answering the same questions, chasing paperwork and re-keying information between systems. We set up simple systems that do this work for you, so your team's time goes where it earns."
  },

  services: [
    {
      slug: "website-creation",
      nav: "Websites",
      icon: "globe",
      eyebrow: "Get found online",
      title: "When customers search, they should find you",
      text: "People search online before they choose who to buy from. We build a fast, clear site that shows up in that search, reads as credible, and makes it one click to enquire, book or buy. If you sell products, we can set up a webstore that fits the way you already take orders.",
      heroNote: "Ready in days. Enquiries and orders route straight to your team.",
      impact: "People who never knew about you start calling, enquiring and ordering.",
      problem: "Right now, someone is searching for exactly what you offer. If you are hard to find, they buy from the business that was easier to find, and you never know it happened.",
      usecases: [
        { t: "The business customers cannot find", d: "A local business relying on word of mouth gets a fast, clear site with services, pricing guidance and a contact button, so a search turns into a real enquiry.",
          i: "New customers start finding you directly, instead of ending up with the competitor down the road." },
        { t: "The business ready to sell online", d: "We set up a webstore for your products that follows your existing process: your pricing rules, your delivery areas, your payment methods and your stock, so orders arrive the way your team already handles them.",
          i: "You open a second sales channel without changing how the business runs behind the counter." },
        { t: "The company losing enquiries", d: "A firm whose leads arrive through phone tag and scattered emails gets a site with a clear offer and an enquiry form that routes straight to the right person.",
          i: "Every enquiry is captured and answered, so more of the same traffic turns into signed customers." },
        { t: "The established business with a dated site", d: "A business whose site was built years ago gets a rebuild that loads fast, reads well on a phone, and looks as credible as the work they actually do.",
          i: "Trust is set in the first five seconds, so prospects arrive at the call already taking you seriously." }
      ],
      deliverables: [
        "Mobile-first design tuned to your brand",
        "Copywriting built around one clear action",
        "Contact and enquiry forms routed to the right inbox",
        "Webstore setup with payments, delivery and stock, if you sell products",
        "Google-ready structure, speed and basic SEO",
        "You own the code and can update it yourself"
      ],
      steps: [
        { t: "Discovery", d: "A short call to understand your business, your ideal client, and the one thing the site must do." },
        { t: "Design draft", d: "We send a working draft in days. You react, we refine." },
        { t: "Build and launch", d: "We connect your domain, forms and analytics, then go live." },
        { t: "Handover", d: "You get the keys, a walkthrough, and a simple way to edit content." }
      ]
    },
    {
      slug: "tool-development",
      nav: "Tools",
      icon: "wrench",
      eyebrow: "Custom tools",
      title: "Stop doing the same work again and again",
      text: "Estimates, customer records, status tracking: if your team does it by hand every day, we can build a simple tool that does it for them. Where it genuinely helps, we add AI to the tool, so it reads, sorts and drafts the repetitive parts instead of your team doing it.",
      heroNote: "Saves hours every week, from the first day.",
      impact: "Work that used to fill an afternoon now takes minutes, and nothing gets missed.",
      problem: "Hours disappear into spreadsheets, re-typing and chasing status. That is time your team could spend on customers. A small tool built around your exact workflow takes it off their plate.",
      usecases: [
        { t: "The instant quote or estimate tool", d: "A service business lets customers pick what they need and see an accurate price right away, then emails the estimate as a branded PDF, with no back-and-forth.",
          i: "Estimates go out in minutes instead of days, so customers decide while their interest is still high." },
        { t: "The internal tracker that replaces the spreadsheet", d: "Your team tracks jobs, follow-ups and outstanding balances in one shared screen instead of a spreadsheet only one person understands.",
          i: "Outstanding balances actually get chased and nothing depends on one person's memory or their laptop." },
        { t: "The AI assistant built into your workflow", d: "AI handles the reading and typing nobody enjoys: sorting incoming enquiries, pulling details out of documents, drafting replies and summarising long threads. It sits inside the tool your team already opens, so there is nothing new to learn.",
          i: "Your team adopts it without training, because it fits the process they already follow instead of replacing it." },
        { t: "The customer-facing portal", d: "Customers get a simple screen to check status, upload what you need or update their details, instead of emailing your team for every small thing.",
          i: "Routine status calls and document chasing drop sharply, without adding headcount." }
      ],
      deliverables: [
        "A tool scoped to your exact workflow",
        "AI built in where it earns its keep, not for the sake of it",
        "Works on phone and desktop",
        "Connects to the systems you already use",
        "Clean, simple interface anyone can use",
        "Yours to keep and grow over time"
      ],
      steps: [
        { t: "Map the workflow", d: "We watch how you do it today and find the slow, repetitive parts." },
        { t: "Pick the right approach", d: "We decide where plain automation is enough and where AI genuinely pays for itself, so you are not buying technology you do not need." },
        { t: "Prototype", d: "A clickable version so you feel it before we build the full thing." },
        { t: "Build and test", d: "We build it, load your real data, and fix what feels off." },
        { t: "Roll out", d: "We train your team and stay on hand for the first weeks." }
      ]
    },
    {
      slug: "reports",
      nav: "Reports",
      icon: "chart",
      eyebrow: "Know your numbers",
      title: "Know exactly how the business is doing, today",
      text: "Revenue, orders, outstanding payments, where your best customers come from: one simple screen, updated automatically. No spreadsheet wrangling, no month-end surprises.",
      heroNote: "Open one link, see everything.",
      impact: "You catch problems the same week they start, not at month end when it is too late.",
      problem: "The real numbers only surface at month end, once nothing can be changed. Your revenue moves every day, so you should be able to see it every day.",
      usecases: [
        { t: "The daily business snapshot", d: "An owner opens one link each morning and sees yesterday's sales, new enquiries, cancellations and unpaid invoices, without waiting for a report to be built.",
          i: "A bad week is spotted while it can still be fixed, not at month end when the damage is done." },
        { t: "The lender or partner report", d: "A business preparing for a loan, an audit or a partner review gets a clean, credible summary of performance, generated on demand.",
          i: "The conversation moves faster because the numbers look professional and hold up to questions." },
        { t: "The marketing scorecard", d: "You see which channel actually produced paying customers, not just clicks, so the next dollar goes where it works.",
          i: "Spend shifts to what converts, and the quiet budget leak stops." }
      ],
      deliverables: [
        "One live dashboard, always up to date",
        "Pulls from your sheets, database and tools",
        "The three or four numbers that actually matter",
        "Auto-generated PDF reports on a schedule",
        "Shareable link for your team or investors"
      ],
      steps: [
        { t: "Pick the metrics", d: "We agree on the handful of numbers that drive your decisions." },
        { t: "Connect sources", d: "We plug in your data wherever it already lives." },
        { t: "Design the view", d: "A clean layout that answers your questions at a glance." },
        { t: "Automate delivery", d: "Reports refresh and arrive on schedule, no manual work." }
      ]
    },
    {
      slug: "automation",
      nav: "Automation",
      icon: "bolt",
      eyebrow: "Automatic follow-ups",
      title: "Never forget a follow-up again",
      text: "Acknowledgements, payment reminders, appointment and renewal alerts: set them once, and they go out at the right time to the right person. Nobody has to remember.",
      heroNote: "Works day and night, even on holidays.",
      impact: "Customers stop slipping away just because the team had a busy week.",
      problem: "Someone meant to follow up, but the day got busy and it slipped. It happens every week, and every time it does, you lose business you had already earned.",
      usecases: [
        { t: "The follow-up that never gets forgotten", d: "A new enquiry automatically gets an acknowledgement, a reminder after two days, and a further nudge after a week, until they respond.",
          i: "Most business comes from the second or third touch nobody was making; those touches now happen on their own." },
        { t: "The appointment and renewal reminder", d: "Customers are reminded before a booking, a renewal or a payment date, without anyone working through a list by hand.",
          i: "No-shows and lapsed renewals drop, and it costs nothing extra each month to keep it that way." },
        { t: "The behind-the-scenes hand-off", d: "A new enquiry form automatically creates the record, alerts the right team member, and confirms receipt with the customer, all in the same moment.",
          i: "Nothing waits in someone's inbox, and no step depends on a person remembering to pass it along." }
      ],
      deliverables: [
        "Trigger-based flows mapped to your business",
        "Runs over email, SMS or WhatsApp",
        "Smart timing and stop rules, no spam",
        "Connects your forms, tools and sheets",
        "A dashboard to watch it working"
      ],
      steps: [
        { t: "Find the leaks", d: "We spot where enquiries, renewals and tasks slip through today." },
        { t: "Design the flow", d: "We map each trigger, message and timing rule with you." },
        { t: "Build and connect", d: "We wire it to your tools and test with real cases." },
        { t: "Watch and tune", d: "We monitor the first runs and tighten what needs it." }
      ]
    },
    {
      slug: "whatsapp-integration",
      nav: "WhatsApp",
      icon: "chat",
      eyebrow: "Messaging and WhatsApp",
      title: "Answer every message, without anyone sitting on the phone",
      text: "Customers text and message more than they call. We set up WhatsApp and SMS properly: one-tap contact buttons, instant replies to common questions, and every conversation logged where your team can see it.",
      heroNote: "Meet clients on the channel they already use.",
      impact: "Reaching you takes one tap, and no message goes unanswered, even after hours.",
      problem: "Messages arrive across text, WhatsApp and voicemail, and live on whoever's phone received them. Then one gets buried, a customer feels ignored, and nobody can tell what was promised.",
      usecases: [
        { t: "The one-tap contact button", d: "Every page and ad has a button that opens a message with the details already filled in, so reaching you takes one tap and no typing.",
          i: "More enquiries actually get sent, because there is no form to fill and no phone queue to sit through." },
        { t: "The instant auto-reply", d: "After hours or when the team is busy, an automatic reply answers common questions and captures the enquiry so none go cold.",
          i: "No enquiry dies overnight; every one gets an answer in seconds, even when the office is closed." },
        { t: "The message-to-record link", d: "A confirmed enquiry or booking drops straight into your system, so nothing lives only in one person's chat thread.",
          i: "Every conversation has a record outside the phone, so missed requests and he-said-she-said disputes fall away." }
      ],
      deliverables: [
        "Click-to-message buttons with pre-filled text",
        "Auto-replies and quick-reply menus",
        "Reminders and updates that follow messaging rules",
        "Enquiries logged automatically to your system",
        "Setup on the right platform for your size"
      ],
      steps: [
        { t: "Map the conversation", d: "We list the messages customers actually send you today." },
        { t: "Choose the setup", d: "Simple click-to-message, or full Business API where you need scale." },
        { t: "Build the flows", d: "Buttons, auto-replies and logging, wired into your systems." },
        { t: "Launch and refine", d: "We go live and tune the replies using real conversations." }
      ]
    }
  ],

  about: {
    eyebrow: "About Axiotrix",
    title: "The same Axiotrix approach, applied to your digital front door",
    text: "Axiotrix already simplifies the operations running behind the scenes. This service extends that to the front: the site that brings enquiries in, and the tools and reminders that make sure none are dropped. Built once, then kept working.",
    values: [
      { t: "We start with your problem", d: "First we understand what is costing you customers or time. Then we build only what fixes it, nothing extra." },
      { t: "Simple enough to use daily", d: "If your team can use email, they can use what we build. No training programme, no technical knowledge needed." },
      { t: "You own everything", d: "The website, the data and the accounts stay in your name. No lock-in, and no monthly fee just to keep hold of your own assets." }
    ]
  },

  testimonials: [
    { quote: "Enquiries used to sit in three different inboxes. Now every one is logged and answered the same day.", name: "Operations Manager", role: "Multi-location service business" },
    { quote: "The estimate tool paid for itself in a month. Customers get a number right away and we stopped rebuilding quotes by hand.", name: "Managing Partner", role: "Professional services firm" },
    { quote: "One dashboard, opened every morning. We finally know which channels actually bring paying customers.", name: "Founder", role: "Retail and wholesale company" }
  ],

  faq: [
    { q: "How long does it take?", a: "You see a working first draft within 48 hours for most projects. Full delivery depends on scope, from a few days for a site to a couple of weeks for a full automation system." },
    { q: "Do we own the website and data?", a: "Yes, completely. Code, content, accounts and data are yours. There is no lock-in and you can move or edit anything at any time." },
    { q: "Can we start with just one service?", a: "Absolutely. Most clients start with the website or the messaging setup, then add tools, reports and automation once they see the value." },
    { q: "How do payments work?", a: "A fixed scope with a clear price, agreed before we start. Usually part upfront and the rest on delivery. No surprise invoices." },
    { q: "What if we are not sure what we need?", a: "That is normal. Describe the problem in plain words and we will come back with a recommendation, a plan and a price. No pressure." },
    { q: "Do we actually need AI in this?", a: "Only where it pays for itself. We look at your process first, then use AI for the parts that involve reading, sorting or drafting at volume. Everywhere else, plain automation is cheaper and more reliable. Either way it goes inside the tool your team already uses, so adoption does not depend on anyone changing how they work." },
    { q: "How does this fit with the rest of Axiotrix?", a: "It is the same team and the same account. If Axiotrix already supports your operations, this simply extends that to your website, customer messaging and reporting." }
  ],

  submit: {
    eyebrow: "Tell us what you need",
    title: "Tell us about your business. We will tell you what helps.",
    text: "Write it in your own words. Within one working day we come back with a clear recommendation, a timeline and a price.",
    successTitle: "Got it. We will be in touch shortly.",
    successText: "We will reach out by email or phone within one working day with a simple plan for your business.",
    services: ["Website / get found online", "Webstore / sell products online", "A tool for our daily work", "AI in our existing process", "Reports and dashboards", "Automatic follow-ups", "Messaging and WhatsApp", "Not sure yet"],
    budgets: ["Under $2,500", "$2,500 to $7,500", "$7,500 to $20,000", "Above $20,000", "Let us discuss"]
  }
};

/* --- content loader: merge saved overrides over defaults --- */
const AX_KEY = "axiotrix_content_v1";
function loadContent() {
  try {
    const saved = JSON.parse(localStorage.getItem(AX_KEY) || "null");
    if (!saved) return structuredClone(DEFAULT_CONTENT);
    return deepMerge(structuredClone(DEFAULT_CONTENT), saved);
  } catch (e) { return structuredClone(DEFAULT_CONTENT); }
}
function saveContent(obj) { localStorage.setItem(AX_KEY, JSON.stringify(obj)); }
function resetContent() { localStorage.removeItem(AX_KEY); }
function deepMerge(base, over) {
  for (const k in over) {
    if (over[k] && typeof over[k] === "object" && !Array.isArray(over[k])) {
      base[k] = deepMerge(base[k] || {}, over[k]);
    } else { base[k] = over[k]; }
  }
  return base;
}

/* leads store (sample). Swap for Supabase insert later. */
const AX_LEADS = "axiotrix_leads_v1";
function loadLeads() { try { return JSON.parse(localStorage.getItem(AX_LEADS) || "[]"); } catch { return []; } }
function addLead(lead) { const l = loadLeads(); l.unshift(lead); localStorage.setItem(AX_LEADS, JSON.stringify(l)); }

if (typeof window !== "undefined") window.AX = { loadContent, saveContent, resetContent, DEFAULT_CONTENT, loadLeads, addLead };


/* ---------- rendering engine ---------- */
/* Axiotrix | site rendering engine (shared by all pages) */
(function () {
  const C = window.AX.loadContent();

  /* --- SVG icon set (Lucide-style, no emojis) --- */
  const ICONS = {
    globe: '<path d="M12 2a10 10 0 100 20 10 10 0 000-20zM2 12h20M12 2a15 15 0 010 20 15 15 0 010-20z"/>',
    wrench: '<path d="M14.7 6.3a4 4 0 01-5.4 5.4L4 17v3h3l5.3-5.3a4 4 0 015.4-5.4l-2.6 2.6-2-2 2.6-2.6z"/>',
    chart: '<path d="M3 3v18h18"/><path d="M7 15l3-3 3 2 5-6"/>',
    bolt: '<path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"/>',
    chat: '<path d="M21 11.5a8.5 8.5 0 01-12.5 7.5L3 21l2-5.5A8.5 8.5 0 1121 11.5z"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    check: '<path d="M20 6L9 17l-5-5"/>',
    checkc: '<circle cx="12" cy="12" r="10"/><path d="M8 12l3 3 5-6"/>',
    spark: '<path d="M12 3v18M3 12h18M6 6l12 12M18 6L6 18"/>',
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    mail: '<path d="M4 5h16v14H4z"/><path d="M4 7l8 6 8-6"/>',
    phone: '<path d="M4 4h4l2 5-2.5 1.5a11 11 0 006 6L15 14l5 2v4a2 2 0 01-2 2A16 16 0 012 6a2 2 0 012-2z"/>',
    wa: '<path d="M12 2a10 10 0 00-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1012 2zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7a11.5 11.5 0 01-4.7-4.2c-.3-.5-1-1.4-1-2.7 0-1.3.7-1.9 1-2.2.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 1.9c.1.2.1.4 0 .6l-.4.6c-.2.2-.3.4-.1.7.5.8 1 1.4 1.7 1.9.5.4 1 .6 1.3.8.2.1.4.1.6-.1l.7-.9c.2-.2.4-.2.6-.1l1.8.9c.3.1.4.2.5.3.1.3.1.9-.1 1.4z"/>',
    star: '<path d="M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-6z"/>',
    shield: '<path d="M12 2l8 3v7c0 5-3.5 8-8 9-4.5-1-8-4-8-9V5l8-3z"/><path d="M9 12l2 2 4-4"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'
  };
  function icon(name, cls) {
    const p = ICONS[name] || ICONS.spark;
    return `<svg class="${cls||''}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${p}</svg>`;
  }
  window.axIcon = icon;

  /* Real Axiotrix Global logo, served from the live site so it always
     matches. LOGO_SRC can be a root-relative path once this page is
     hosted on axiotrix.com. */
  const LOGO_SRC = "https://www.axiotrix.com/images/logo.png";
  const mark = `<img class="mark" src="${LOGO_SRC}" alt="Axiotrix Global, Solutions Simplified">`;
  const caret = `<svg class="caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>`;

  /* --- Header (topbar + nav, matching axiotrix.com) --- */
  function header(active) {
    const isSvc = C.services.some(s => s.slug === active);
    const cls = (k) => (active === k || (k === 'services' && isSvc)) ? ' class="active"' : '';
    const drop = C.services.map(s =>
      `<a href="service.html?s=${s.slug}"><span class="ar">&#10230;</span>${s.eyebrow}</a>`).join("");
    return `<div class="topbar"><div class="wrap">
      <div class="topbar-left">
        <a href="tel:${C.global.phone}">${icon('phone')}${C.global.phone}</a>
        <span class="sep">|</span>
        <a href="mailto:${C.global.email}">${icon('mail')}${C.global.email}</a>
      </div>
      <a href="submit.html">Request For Demo</a>
    </div></div>
    <header class="nav"><div class="wrap">
      <a class="brand" href="index.html">${mark}</a>
      <nav class="nav-links">
        <a href="https://www.axiotrix.com/">Home</a>
        <a href="https://www.axiotrix.com/">Healthcare</a>
        <a href="https://www.axiotrix.com/">Financial</a>
        <div class="has-drop">
          <a href="index.html"${cls('services')}>Digital Solutions ${caret}</a>
          <div class="drop">${drop}</div>
        </div>
        <a href="about.html"${cls('about')}>About Us</a>
        <a href="submit.html"${cls('submit')}>Contact Us</a>
      </nav>
      <div class="nav-cta">
        <a class="btn btn-primary" href="submit.html">Request a Plan</a>
        <button class="nav-toggle" aria-label="Menu" onclick="document.querySelector('.nav').classList.toggle('open')">${icon('menu')}</button>
      </div>
    </div></header>`;
  }

  /* --- Footer --- */
  function footer() {
    const svc = C.services.map(s => `<a href="service.html?s=${s.slug}">${s.eyebrow}</a>`).join("");
    const wa = `https://wa.me/${C.global.whatsapp}`;
    return `<footer class="footer"><div class="wrap">
      <div class="footer-grid">
        <div>
          <a class="brand brand-invert" href="index.html" style="margin-bottom:14px">${mark}</a>
          <p style="max-width:34ch">${C.global.footerBlurb}</p>
        </div>
        <div><h5>Services</h5>${svc}</div>
        <div><h5>Company</h5>
          <a href="about.html">About</a><a href="submit.html">Contact us</a>
        </div>
        <div><h5>Talk to us</h5>
          <a href="mailto:${C.global.email}">${C.global.email}</a>
          <a href="tel:${C.global.phone}">${C.global.phone}</a>
          <a href="${wa}" target="_blank" rel="noopener">WhatsApp us</a>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© ${new Date().getFullYear()} ${C.global.brand}. ${C.global.tagline}</span>
        <span>Solutions Simplified.</span>
      </div>
    </div></footer>
    <a class="wa-float" href="${wa}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">${icon('wa')}</a>`;
  }
  window.axHeader = header; window.axFooter = footer; window.axContent = C;

  /* --- CTA band (shared) --- */
  window.axCta = function () {
    return `<section class="section"><div class="wrap"><div class="cta-band reveal">
      <h2>Not sure where to start?</h2>
      <p>Tell us the problem in plain words. We come back with a plan, a timeline and a price within one working day.</p>
      <a class="btn btn-primary" href="submit.html">Request a consultation ${icon('arrow')}</a>
    </div></div></section>`;
  };

  /* --- Service page renderer --- */
  window.axRenderService = function (slug) {
    const s = C.services.find(x => x.slug === slug) || C.services[0];
    const wa = `https://wa.me/${C.global.whatsapp}?text=${encodeURIComponent("Hello Axiotrix, I am interested in " + s.eyebrow)}`;
    document.title = `${s.eyebrow} | ${C.global.brand}`;

    const usecases = s.usecases.map((u,i) => `
      <div class="usecase reveal">
        <div class="num">${String(i+1).padStart(2,'0')}</div>
        <div><h3>${u.t}</h3><p>${u.d}</p>
          ${u.i ? `<div class="impact">${icon('bolt')}<div><b>Impact</b><span>${u.i}</span></div></div>` : ''}
        </div>
      </div>`).join("");

    const deliverables = s.deliverables.map(d =>
      `<li>${icon('checkc')}<span>${d}</span></li>`).join("");

    const steps = s.steps.map((st,i) => `
      <div class="step reveal"><div class="dot">${i+1}</div>
        <div><h4>${st.t}</h4><p>${st.d}</p></div></div>`).join("");

    return `${header(slug)}
    <section class="hero"><div class="wrap"><div class="hero-grid">
      <div class="reveal">
        <span class="eyebrow">${s.eyebrow}</span>
        <h1>${s.title}</h1>
        <p class="lead">${s.text}</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="submit.html">Get my plan ${icon('arrow')}</a>
          <a class="btn btn-ghost" href="${wa}" target="_blank" rel="noopener">Ask on WhatsApp</a>
        </div>
        <div class="hero-note">${icon('checkc')} ${s.heroNote}</div>
      </div>
      <div class="reveal">
        <div class="panel">
          <div class="panel-row"><div class="ic">${icon(s.icon)}</div><div><b>The problem</b><span>What we're solving</span></div></div>
          <div style="padding:16px 0;color:var(--body);font-size:.98rem;border-bottom:1px solid var(--line)">${s.problem}</div>
          <div class="panel-row" style="border-bottom:0"><div class="ic" style="background:#f0fdf4;color:var(--green)">${icon('bolt')}</div><div><b>The impact</b><span>What changes for you</span></div></div>
          <div style="padding:4px 0 6px;color:var(--ink);font-weight:500;font-size:.98rem">${s.impact || ''}</div>
        </div>
      </div>
    </div></div></section>

    <section class="section"><div class="wrap">
      <div class="sh center"><span class="eyebrow">Use cases</span><h2>Where this makes a real difference</h2>
        <p class="lead">Concrete situations we see every week, and what changes.</p></div>
      <div class="grid" style="gap:18px">${usecases}</div>
    </div></section>

    <section class="section soft"><div class="wrap"><div class="grid grid-2" style="gap:56px;align-items:center">
      <div class="reveal"><span class="eyebrow">What you get</span>
        <h2 style="margin-bottom:22px">Everything, ready to use</h2>
        <ul class="checks">${deliverables}</ul>
      </div>
      <div class="reveal"><span class="eyebrow">How it works</span>
        <h2 style="margin-bottom:26px">Four simple steps</h2>
        <div class="steps">${steps}</div>
      </div>
    </div></div></section>

    ${window.axCta()}
    ${footer()}`;
  };

  /* --- About page renderer --- */
  window.axRenderAbout = function () {
    const A = C.about;
    document.title = `About | ${C.global.brand}`;
    const values = A.values.map(v => `
      <div class="card reveal"><div class="ic">${icon('shield')}</div>
        <h3>${v.t}</h3><p>${v.d}</p></div>`).join("");
    const ts = C.testimonials.map(t => `
      <div class="quote reveal">
        <div class="stars">${icon('star')}${icon('star')}${icon('star')}${icon('star')}${icon('star')}</div>
        <p>"${t.quote}"</p>
        <div class="who"><b>${t.name}</b><span>${t.role}</span></div>
      </div>`).join("");
    const faqs = C.faq.map((f,i) => `
      <div class="faq reveal">
        <button class="faq-q" onclick="this.parentElement.classList.toggle('open')">
          <span>${f.q}</span>${icon('arrow','faq-ic')}</button>
        <div class="faq-a"><p>${f.a}</p></div>
      </div>`).join("");
    return `${header('about')}
    <section class="hero"><div class="wrap center" style="max-width:720px;margin:0 auto">
      <span class="eyebrow">${A.eyebrow}</span>
      <h1 style="margin-bottom:16px">${A.title}</h1>
      <p class="lead">${A.text}</p>
    </div></section>
    <section class="section"><div class="wrap">
      <div class="sh center"><span class="eyebrow">How we work</span><h2>Three things we never compromise</h2></div>
      <div class="grid grid-3">${values}</div>
    </div></section>
    <section class="section soft"><div class="wrap">
      <div class="sh center"><span class="eyebrow">Clients</span><h2>What business owners say</h2></div>
      <div class="grid grid-3">${ts}</div>
    </div></section>
    <section class="section"><div class="wrap" style="max-width:760px">
      <div class="sh center"><span class="eyebrow">FAQ</span><h2>Questions, answered</h2></div>
      <div class="faqs">${faqs}</div>
    </div></section>
    ${window.axCta()}
    ${footer()}`;
  };

  /* --- reveal on scroll --- */
  window.axReveal = function () {
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) { els.forEach(e=>e.classList.add('in')); return; }
    const io = new IntersectionObserver((ents) => {
      ents.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0, rootMargin: '0px 0px -8% 0px' });
    els.forEach(e => io.observe(e));
    // safety net: never leave content invisible
    setTimeout(() => els.forEach(e => e.classList.add('in')), 1400);
  };

  window.axToast = function (msg) {
    let t = document.querySelector('.toast');
    if (!t) { t = document.createElement('div'); t.className = 'toast'; document.body.appendChild(t); }
    t.textContent = msg; t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 2600);
  };

  /* --- Hero carousel: five customer journeys ---
     Edit JOURNEYS to change the examples shown in the hero. */
  const JOURNEYS = [
    { search: "wedding photographer near me", domain: "yourstudio.com",
      name: "Lakeside Photography", btn: "Check my date", cap3: "They enquire",
      ask: "Is 14th June free for a wedding?",
      reply: "It is. Sending you the packages now.",
      badge: "Enquiry logged. Follow-up scheduled." },
    { search: "office cleaning services", domain: "yourcompany.com",
      name: "BrightSpace Cleaning", btn: "Get a free quote", cap3: "They ask for a price",
      ask: "2 floors, 15 desks. What would that cost?",
      reply: "Quote sent to your email just now.",
      badge: "Quote generated. No manual work." },
    { search: "custom furniture maker", domain: "yourworkshop.com",
      name: "Oakline Furniture", btn: "Start my order", cap3: "They order",
      ask: "Want the dining table in walnut, seats 6.",
      reply: "Noted. Deposit link is on its way.",
      badge: "Order saved. Team notified instantly." },
    { search: "driving school in my area", domain: "yourschool.com",
      name: "Greenway Driving School", btn: "Book a lesson", cap3: "They book",
      ask: "Do you have Saturday morning slots?",
      reply: "Yes, booked you for Saturday 9am.",
      badge: "Booking logged. Reminder sends automatically." },
    { search: "same day courier service", domain: "yourbusiness.com",
      name: "Swift Route Couriers", btn: "Request a pickup", cap3: "They request a pickup",
      ask: "Need a parcel collected before 5pm today.",
      reply: "Pickup confirmed for 3:30pm today.",
      badge: "Job created. Driver assigned." }
  ];

  const journeyStage = (j) => `
    <div class="j-step">
      <span class="j-cap">1 &middot; They search</span>
      <div class="j-card j-search">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
        <span>${j.search}</span>
      </div>
    </div>
    <div class="j-line"></div>
    <div class="j-step">
      <span class="j-cap">2 &middot; They find you</span>
      <div class="j-card j-site">
        <div class="j-site-bar"><span></span><span></span><span></span><em>${j.domain}</em></div>
        <div class="j-site-body"><b>${j.name}</b><span class="j-btn">${j.btn}</span></div>
      </div>
    </div>
    <div class="j-line"></div>
    <div class="j-step">
      <span class="j-cap">3 &middot; ${j.cap3}</span>
      <div class="j-card j-chat">
        <div class="j-bubble in">${j.ask}</div>
        <div class="j-bubble out">${j.reply}</div>
      </div>
    </div>
    <div class="j-badge">${icon('bolt')} ${j.badge}</div>`;

  window.axJourneyHtml = function () {
    return `<div class="journey">
      <div class="journey-stage" id="jstage">${journeyStage(JOURNEYS[0])}</div>
      <div class="j-dots">${JOURNEYS.map((_, i) =>
        `<button class="j-dot${i === 0 ? ' on' : ''}" data-i="${i}" aria-label="Example ${i + 1}"></button>`).join("")}</div>
    </div>`;
  };

  /* Rotates every 4.5s, pauses on hover, stops on click,
     respects prefers-reduced-motion. Safe to call on every render. */
  window.axStartCarousel = function () {
    const stage = document.getElementById('jstage');
    if (!stage) return;
    const dots = [...document.querySelectorAll('.j-dot')];
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let i = 0, timer = null;

    if (window._axTimer) clearInterval(window._axTimer);

    function show(n) {
      i = (n + JOURNEYS.length) % JOURNEYS.length;
      stage.classList.add('fading');
      setTimeout(() => {
        stage.innerHTML = journeyStage(JOURNEYS[i]);
        stage.classList.remove('fading');
        dots.forEach((d, k) => d.classList.toggle('on', k === i));
      }, reduced ? 0 : 220);
    }
    function start() { if (!reduced && !timer) { timer = setInterval(() => show(i + 1), 4500); window._axTimer = timer; } }
    function stop() { clearInterval(timer); timer = null; }

    dots.forEach(d => d.addEventListener('click', () => { stop(); show(+d.dataset.i); }));
    const j = document.querySelector('.journey');
    if (j) { j.addEventListener('mouseenter', stop); j.addEventListener('mouseleave', start); }
    document.addEventListener('visibilitychange', () => document.hidden ? stop() : start());
    start();
  };
})();


/* ---------- router ---------- */
(function () {
  const C = window.axContent, I = window.axIcon;
  const app = document.getElementById('app');

  function homeHtml() {
    
    const C = window.axContent, I = window.axIcon;

    const services = C.services.map(s => `
      <a class="card reveal" href="#/service/${s.slug}">
        <div class="ic">${I(s.icon)}</div>
        <h3>${s.eyebrow}</h3>
        <p>${s.text}</p>
        ${s.impact ? `<div class="impact" style="margin-top:16px">${I('bolt')}<div><b>Impact</b><span>${s.impact}</span></div></div>` : ''}
        <span class="more">See the use cases ${I('arrow')}</span>
      </a>`).join("");

    return `
      

      <section class="hero"><div class="wrap"><div class="hero-grid">
        <div class="reveal">
          <span class="eyebrow">${C.home.heroEyebrow}</span>
          <h1>${C.home.heroTitle}</h1>
          <p class="lead">${C.home.heroText}</p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="#/contact">${C.home.heroCtaPrimary} ${I('arrow')}</a>
            <a class="btn btn-ghost" href="#/#services">${C.home.heroCtaSecondary}</a>
          </div>
          <div class="hero-note">${I('checkc')} ${C.home.heroNote}</div>
        </div>
        <div class="reveal">
          ${window.axJourneyHtml()}
        </div>
      </div></div></section>

      <section class="section" id="services"><div class="wrap">
        <div class="sh center"><span class="eyebrow">${C.home.servicesEyebrow}</span>
          <h2>${C.home.servicesTitle}</h2>
          <p class="lead">${C.home.servicesText}</p></div>
        <div class="grid grid-3">${services}</div>
      </div></section>

      <section class="section soft"><div class="wrap"><div class="grid grid-2" style="gap:56px;align-items:center">
        <div class="reveal"><span class="eyebrow">${C.home.whyEyebrow}</span>
          <h2 style="margin-bottom:16px">${C.home.whyTitle}</h2>
          <p class="lead" style="margin-bottom:26px">${C.home.whyText}</p>
          <ul class="checks">
            <li>${I('checkc')}<span>We explain everything in plain words. No technical jargon.</span></li>
            <li>${I('checkc')}<span>Built around what your client needs to do: call, book, or enquire.</span></li>
            <li>${I('checkc')}<span>You own everything. No lock-in, no monthly fee to keep your own website.</span></li>
          </ul>
        </div>
        <div class="reveal"><div class="grid grid-2" style="gap:16px">
          <div class="card" style="padding:20px"><div class="ic" style="margin-bottom:12px">${I('shield')}</div><h3 style="font-size:1.02rem;margin-bottom:4px">Everything in your name</h3><p style="font-size:.88rem">Website, data, accounts</p></div>
          <div class="card" style="padding:20px"><div class="ic" style="margin-bottom:12px">${I('clock')}</div><h3 style="font-size:1.02rem;margin-bottom:4px">See a demo in 48h</h3><p style="font-size:.88rem">Before you pay in full</p></div>
          <div class="card" style="padding:20px"><div class="ic" style="margin-bottom:12px">${I('bolt')}</div><h3 style="font-size:1.02rem;margin-bottom:4px">Works while you rest</h3><p style="font-size:.88rem">Replies and reminders go out on their own</p></div>
          <div class="card" style="padding:20px"><div class="ic" style="margin-bottom:12px">${I('star')}</div><h3 style="font-size:1.02rem;margin-bottom:4px">One team for everything</h3><p style="font-size:.88rem">The same team you already work with</p></div>
        </div></div>
      </div></div></section>

      ${window.axCta()}
      
    `;
    

    
  
  }

  function contactHtml() {
    const S = C.submit;
    const chips = S.services.map((s, i) =>
      '<div class="chip"><input type="checkbox" id="sv' + i + '" name="services" value="' + s + '">' +
      '<label for="sv' + i + '">' + s + '</label></div>').join('');
    const budgets = S.budgets.map(b => '<option>' + b + '</option>').join('');
    return `
    <section class="section"><div class="wrap" style="max-width:760px">
      <div class="sh center reveal">
        <span class="eyebrow">${S.eyebrow}</span>
        <h2>${S.title}</h2>
        <p class="lead">${S.text}</p>
      </div>
      <div class="panel reveal" id="formwrap" style="padding:30px">
        <form class="form" id="reqform">
          <div class="field-row">
            <div class="field"><label for="ax-name">Your name <span class="req">*</span></label>
              <input id="ax-name" name="name" required placeholder="e.g. Jordan Smith"></div>
            <div class="field"><label for="ax-business">Business name</label>
              <input id="ax-business" name="business" placeholder="e.g. Lakeside Photography"></div>
          </div>
          <div class="field-row">
            <div class="field"><label for="ax-phone">Phone number <span class="req">*</span></label>
              <input id="ax-phone" name="phone" required inputmode="tel" placeholder="e.g. (866) 422-0499"></div>
            <div class="field"><label for="ax-email">Email</label>
              <input id="ax-email" name="email" type="email" placeholder="you@yourbusiness.com"></div>
          </div>
          <div class="field"><label>What do you need? <span class="req">*</span></label>
            <div class="chips">${chips}</div></div>
          <div class="field-row">
            <div class="field"><label for="ax-budget">Rough budget</label>
              <select id="ax-budget" name="budget"><option value="">Select...</option>${budgets}</select></div>
            <div class="field"><label for="ax-timeline">How soon?</label>
              <select id="ax-timeline" name="timeline"><option value="">Select...</option>
                <option>This week</option><option>This month</option>
                <option>Next 1-3 months</option><option>Just exploring</option></select></div>
          </div>
          <div class="field"><label for="ax-msg">Describe the problem in your own words <span class="req">*</span></label>
            <textarea id="ax-msg" name="msg" required placeholder="e.g. Customers call and message us but enquiries get lost between the phone and email, and follow-ups do not happen."></textarea></div>
          <button class="btn btn-primary" type="submit" style="justify-content:center">Send my requirement</button>
          <p style="font-size:.82rem;color:var(--muted);text-align:center;margin-top:-4px">One working day to a plan. No spam, ever.</p>
        </form>
      </div>
      <div class="panel reveal" id="success" style="display:none;padding:44px;text-align:center">
        <div style="width:64px;height:64px;border-radius:50%;background:var(--indigo-50);color:var(--indigo);display:grid;place-items:center;margin:0 auto 18px">
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
        </div>
        <h2 style="margin-bottom:10px">${S.successTitle}</h2>
        <p class="lead" style="margin:0 auto 24px">${S.successText}</p>
        <a class="btn btn-indigo" href="mailto:${C.global.email}">Email us directly</a>
      </div>
    </div></section>`;
  }

  function wireForm() {
    const f = document.getElementById('reqform');
    if (!f) return;
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      const picked = [...f.querySelectorAll('input[name="services"]:checked')].map(x => x.value);
      if (!picked.length) { window.axToast('Please pick at least one thing you need.'); return; }
      window.AX.addLead({
        id: Date.now(), at: new Date().toISOString(),
        name: f.name.value.trim(), business: f.business.value.trim(),
        phone: f.phone.value.trim(), email: f.email.value.trim(),
        services: picked, budget: f.budget.value, timeline: f.timeline.value,
        msg: f.msg.value.trim(), status: 'new'
      });
      document.getElementById('formwrap').style.display = 'none';
      document.getElementById('success').style.display = 'block';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  function localise(html) {
    return html
      .replace(/href="index\.html"/g, 'href="#/"')
      .replace(/href="about\.html"/g, 'href="#/about"')
      .replace(/href="submit\.html"/g, 'href="#/contact"')
      .replace(/href="service\.html\?s=([a-z-]+)"/g, 'href="#/service/$1"');
  }

  /* our renderers ship their own header and footer: the site template
     supplies those here, so strip them out */
  function stripChrome(html) {
    return html
      .replace(/<div class="topbar">[\s\S]*?<\/header>/, '')
      .replace(/<footer class="footer">[\s\S]*?<\/footer>/, '')
      .replace(/<a class="wa-float"[\s\S]*?<\/a>/, '');
  }

  function route() {
    const hash = location.hash.replace(/^#\/?/, '');
    let body;
    if (hash.startsWith('service/')) {
      body = stripChrome(window.axRenderService(hash.split('/')[1]));
    } else if (hash.startsWith('about')) {
      body = stripChrome(window.axRenderAbout());
    } else if (hash.startsWith('contact')) {
      body = contactHtml();
      document.title = 'Contact | Axiotrix Global';
    } else {
      body = homeHtml() + stripChrome(window.axCta());
      document.title = 'Digital Solutions | Axiotrix Global';
    }
    app.innerHTML = localise(body);
    wireForm();
    window.axReveal();
    window.axStartCarousel();
    if (!location.hash.includes('#services')) window.scrollTo(0, 0);
  }

  window.addEventListener('hashchange', route);
  route();
})();
</script>

<? } ?>

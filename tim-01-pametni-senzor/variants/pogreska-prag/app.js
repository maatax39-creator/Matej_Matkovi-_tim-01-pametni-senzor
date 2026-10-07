const ALERT_THRESHOLD_C = 35;

function evaluateTemperature(raw, threshold = ALERT_THRESHOLD_C) {
  const cleaned = String(raw).trim().replace(',', '.');
  if (cleaned === '' || !/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)$/.test(cleaned)) {
    return {kind: 'error', text: 'Pogreška: unesite broj od -40 do 85 °C.'};
  }
  const value = Number(cleaned);
  if (!Number.isFinite(value) || value < -40 || value > 85) {
    return {kind: 'error', text: 'Pogreška: unesite broj od -40 do 85 °C.'};
  }
  return value > threshold
    ? {kind: 'alert', text: `Upozorenje: ${value} °C prelazi prag od ${threshold} °C.`}
    : {kind: 'normal', text: `Temperatura ${value} °C je u dopuštenom rasponu.`};
}

if (typeof document !== 'undefined') {
  const input = document.querySelector('#temperature');
  const result = document.querySelector('#result');
  document.querySelector('#check').addEventListener('click', () => {
    const evaluation = evaluateTemperature(input.value);
    result.textContent = evaluation.text;
    result.dataset.status = evaluation.kind;
  });
}
if (typeof module !== 'undefined') module.exports = {evaluateTemperature};

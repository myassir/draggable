export default function getRealTarget(sensorEvent) {
  let target = sensorEvent.target;
  let parent;
  while (target.shadowRoot) {
    target = target.shadowRoot.elementFromPoint(sensorEvent.clientX, sensorEvent.clientY);
    if (target === parent) break;
    parent = target;
  }
  return target;
}

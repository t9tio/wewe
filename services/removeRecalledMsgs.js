/**
 * recall msg type: 11
 * How? find a msg with type 11, same author, same content, remove msg before
 * @param {Array} msgs
 * @example
 *
 */
function removeRecalledMsgs(msgs) {
  const recalledMsgs = msgs.filter(msg => msg.type === 11);

  return msgs.filter((msg) => {
    if (msg.type === 11) return false;
    const foundMsg = recalledMsgs.find(
      recalledMsg => recalledMsg.text === msg.text && recalledMsg.from === msg.from,
    );
    if (foundMsg) return false;
    return true;
  });
}

module.exports = removeRecalledMsgs;

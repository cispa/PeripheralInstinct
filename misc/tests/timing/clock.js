self.onmessage = function (evt) {
    const { view } = evt.data;
    while (1) {
      view.setBigUint64(256, view.getBigUint64(256, true) + 1n, true);
    }
  };  
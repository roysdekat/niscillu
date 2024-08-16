return this.value && !_.modified() ?
    this.value :
    isArray(_.name) ?
        array$5(_.name).map(f => field$1(f)) :
        field$1(_.name, _.as);

type DataDef<Data, Props, V> = Data | ((this: Readonly<Props> & V) => Data);

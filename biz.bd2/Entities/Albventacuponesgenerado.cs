﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;

namespace biz.bd2.Entities
{
    public partial class Albventacuponesgenerado
    {
        public string Numserie { get; set; }
        public int Numalbaran { get; set; }
        public string N { get; set; }
        public int Idpromocion { get; set; }
        public string Eancupon { get; set; }
        public double? Unidades { get; set; }
        public double? Importedto { get; set; }
        public int? PromocionesclienteIdpromocion { get; set; }

        public virtual Albventacab NNavigation { get; set; }
    }
}
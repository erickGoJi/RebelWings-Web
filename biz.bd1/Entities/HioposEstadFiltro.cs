﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;

namespace biz.bd1.Entities
{
    public partial class HioposEstadFiltro
    {
        public int Id { get; set; }
        public string Idfiltro { get; set; }
        public string Valor { get; set; }

        public virtual HioposEstad IdNavigation { get; set; }
    }
}
﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;

namespace biz.bd2.Entities
{
    public partial class HioposEstadMetrica
    {
        public int Id { get; set; }
        public int Metrica { get; set; }

        public virtual HioposEstad IdNavigation { get; set; }
    }
}
﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;

namespace biz.bd1.Entities
{
    public partial class IeGruposMedida
    {
        public IeGruposMedida()
        {
            IeGruposMedidasMetricas = new HashSet<IeGruposMedidasMetrica>();
        }

        public int IdGrupoMedida { get; set; }
        public int IdCubo { get; set; }
        public string Name { get; set; }
        public string IdTitulo { get; set; }
        public int NumRegistros { get; set; }

        public virtual IeCubo IdCuboNavigation { get; set; }
        public virtual ICollection<IeGruposMedidasMetrica> IeGruposMedidasMetricas { get; set; }
    }
}
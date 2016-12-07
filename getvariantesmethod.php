	public function getVariantes(){

				$aRet = array();

				$take = $this->getServer ()->getGet ( 'take' ) ? $this->getServer ()->getGet ( 'take' ) : 10;
				$skip = $this->getServer ()->getGet ( 'skip' ) ? $this->getServer ()->getGet ( 'skip' ) : 0;
				$page = $this->getServer ()->getGet ( 'page' ) ? $this->getServer ()->getGet ( 'page' ) : 1;

				$filter = $this->getServer()->getGet("filter");

				$oProdVariante = new \Produtos();

				$aRet = $oProdVariante->SB2Le($_SESSION["idEA1"], $filter["filters"][0]["value"],0,'', '', '', true, false, true, '', false, false, false, 0, false, '', '', false, $take, 1, 0, 0, 0, true,'', -1, false, 'SSSS', false,$skip);
			    array_shift($aRet);

				$totalRegistro = ($aRet[0]['nReg']);

				if ($aRet[0]['XXX_DescChaveItensVar'] == ''){

					$aRet[0]['XXX_DescChaveItensVar'] = "Padrão";

				}
					$cntArray = count($aRet);
				 if ($cntArray > 1){
					 //retira variante padrão quando existe mais variantes
					$retiraPadrao = array_shift($aRet);
					$resp ['total'] = ($totalRegistro - 1) ;
				}

				   $resp["data"] = $aRet;
				   echo json_encode($resp);
	}

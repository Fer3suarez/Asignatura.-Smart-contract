// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.7.0;

contract Contador {
    
    uint8 public valor = 0;
    
    event Tic(string msg, uint8 out);
        
    function incr() public {
        valor++;
        emit Tic("Actualizado", valor);
    }

    function decr() public {
        valor--;
        emit Tic("Actualizado", valor);
    }

    function reset() public {
        valor = 0;
        emit Tic("Actualizado", valor);
    }
    
    receive() external payable { 
        revert(); 
    }
}

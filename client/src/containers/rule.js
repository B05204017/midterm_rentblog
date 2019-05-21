import React, { Component } from 'react'
import './rule.css'

export default class rule extends Component {
    state={
        readMore: false,
        readMoreStyle:{}
    };
    readMoreOn = ()=>{this.setState({readMore: true})};
    readMoreOff = ()=>{this.setState({readMore: false})};
  render() {
    return (
      <div className="rule_container">
        <div className="rule_text">
            <h2>租借規則</h2>
            <p>社產僅限本社社員借用 (以社費認定)，請於借用前詳細參閱本系各項器材借用使用說明及相關規定，若無仔細閱讀而造成問題，相關責任歸屬於借用者。</p>
            <div className="rule_readMore" onClick={this.readMoreOn}><p>Read More</p></div>
            <div className="rule_rules">
                <ul className="rule_detail">
                    <li>器材使用期間請愛惜並負起保管責任，如借用期間偶遺失或損壞，請依金額賠償</li>
                    <li>執行社外收費專案，社團需收取租用費用。</li>
                    <li>如有同順位之借用登記，依登記時間早者優先。</li>
                    <li>借用電子、機械性器材ex:穩定架、腳架，需具備基本使用能力。</li>
                    <li>執行社外未收費專案需於片尾或者公開傳輸平台說明處表示「器材由DMCC提供」等相關字樣。</li>
                    <li>請於使用前，當場清點儀器、零件並開機測試運作正常，若有問題請聯絡器材部。</li>
                </ul>
            </div>
        </div>
      </div>
    )
  }
}

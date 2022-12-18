// import { ChatGPTAPI, getOpenAIAuth } from 'chatgpt'
//
// export default async function example(text) {
//     const sessionToken = 'eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..xDIL0sN4CVQKv3rO.fC7ZGimLkrB3LSfVC6ODUUO6MJplBdyCJCPeL9KywcdmjXvpF20truWBLcLygOAZOwDLkHrZ5_qonNQyPwDgi1vZ2Tcd_wq81s_CGsK-cw8p9ehRrOC21IvcR7THN_xfED3Chgb6XqCAqqDUC-mKoNwye0I0uH-cbdl5xhq2GVyJDYtiqTIAQfn6G2sEQdKfjV_8SGvk84T20VKFSHMwNA8NgeuiGnUs9ypapXlbFrqhpLZx8n99DwdyY4J564j70lRUFUMILi-BeYYpTVM5pv5gd5Vgm7MpLSbLo5doQd-dqxC833K19wAsPry2ehIWz7rmyA9jrcxj9kIVWIClJvGswSHt97Pe3Wamr9nLEfQs_OnreyWS4FLvI_QVtmWlyIkepzRAu5h4NcN8KWI6aZX4ElFI_LnMK3odEhlt3_Q3nVkYolSbKYUZh1w6fTf3WropR7345SAMPfeMysiqOSsF8pQMp8fakXpaPqcPzmRhkFN51oFpp42Q6OM3uXFwPAaDn-IpctkRM6fJvoGdyaE8gzG5eSO7ec3e10VMy7hkAaaODagVrzHe_CnKe5FboJAPDLTNgNbuY3F0wPh1FaJ7h7Pw93o1bGxDOXwTHQPDPtCKU4MljrupjJ8G1uXC_KtYEnRRKjJcec1QB2bT42zkqZDPRMhgbSK-EZoE3mUxriVhTn0mr2hB1-AdCfoMQNX0V8IiJRzx7u9S28w7ixsGwy_cT_FVb3k1hXCa2MNWgXdRb6s91vbTrVYOS4KdPWb1yeWz2sFvw8SlmehsURnt9ube1QwgkychoUN3dlTz0A6TBKAbeQZAOHWraARo-mLaMZF3wDEnSbZIWOdyOrhW7LQ8z7v9sIR1ulkQnVk5WIyfgULqcVSo4KncuAwbJqAjkHMbDVYvZ9tQl1_c2KFXwnbmYZQ55lgKOFlBUZ9A2x08Xve-k2MO7ZizBJwlBSwA3F8_fSEY32cvt0V_NfCBb-zLAflTcpoM2sJYwknGseoIg2gsHUCnCGxDdWaPPBwx14YVG_8CK7qH3JpF0J52NFAi1Qad7QVpcllFJgSy0Mr2OAKB9wgAxwCl6GiaDUqschPRfgJNlNkOd0grdYm52X8-YpIpGHQfUOD5uSjWWomGmCnNngCAvKdZ3R6uD3WlWU0BfglAXbCxotyRhmu9qVYW70dz8ZC3dy7qxjPnMycqPtxaSmKBZlBKvrqrxObyphWkjISBS-Ut_Tgwd7Ixp8LtijiQZCwBhtZb1Exr-Ez0rkqspVAyG1F6TRtwmGoJ-Ujbiq3r06jCGnNQw1r7nPpY3EXdVxLzcRQXB2T345UmRqc_sP17q97EAEQLLWRSlpi9xM3KS1aq49YVgjNxx2SwP7awCDLGcIoZOC30Dwy6wZ4OgHbbEhh7lS_sMjf2DYtUfYI2b2wKYdEgvrHEH19Ja6K8zUjPxYxSdYInutjtUWSvagrzy-zk3CJ0sekTwjoHIbMLMY3uNxcULKZgHM66yGbe_BQHCoqG0OoI10BD-mZdKnEZc6vO6AqisAPGKSfEvpcxGlKLWwOLWV9VBwgajkv4EInC9auibCFShy1hA32buj7Qv9t2LjvUs41QDjym4_0B1VGNO6r8k93SHezoqpXIDYEcF3t51PjTPknzHwcLibgv9nptob8PEwYIrQ6zxcHRTkv2FPv3OcAwkKa1XnYFuV8ft9hDnZBvSJYkU46l4ESjVBTsT9kr9tlD33kqOdHpx8ffjJYmlKCCOaS2E7f0l0E-NpH9YGv6BCS3jBMa5IN-0R6aoCL4QchsWWSLSVovViqmQ6fDpYo3sGmGottt-xdayrwlCDHYJZ9SJ4fru02vBbe9gXOAuTEFXNyfHbTDwLuEpnmq9uyMPLub6Wp-LgpwfG6JRPYBXWYWYiHkBiHXYn2b6fWzZEWrfaDv_ceWcDG0izZ392NJdtWjf-tWexlRx8hP2m_I6gOkJPAHZpllBNXcu6nwrnxK4b_w2gsulNPGeCsRCYtgWH2A83B_hKqgpP7uL0x0qyf7A9lodncTnG10TERF0sGvES4ZrMMVmctZ7pnQF_peUf-1Zwj31oGpZLZ_45E9SePdMhRWqQZcsz9kp7NiFGTOCuThJ8k2um7ofTTnSKCvyiPgqrlHwrbkTg4ORmRolOSDW7M8_vinSiv42zcWeKC-QzsHZM8vXQ65cZeCv5qSyH-7f98jm7IraNcy1HzhHZbb73Ru5Rq_w84passlfbKIxeKRGNNEBhmLooT1SdbyRDRZH1edi_X9NfsS8k2pXiFkcpQvABd_623Lu47k3U--UNGKyBvgqfUJtg.4acOw1BJk7Zu3F_ny6VbgA'
//     const clearanceToken = 'Mvq.5UQ1f72osBuVSkuvE0iRPmaEVCQURHPs8UD.2Ww-1671347271-0-1-cb4c10fe.d2b3081c.9c4d4f1e-160'
//     const userAgent = 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Mobile Safari/537.36'
//     // use puppeteer to bypass cloudflare (headful because of captchas)
//     const openAIAuth = await getOpenAIAuth({
//         email: 'o.otep@mail.ru',
//         password: 'olakola03'
//     })
//
//     const api = new ChatGPTAPI({ ...openAIAuth, sessionToken, clearanceToken, userAgent, markdown: false })
//     await api.initSession()
//
//     let res = await api.sendMessage('What is OpenAI?')
//     console.log(res.response)
//
//     // send a message and wait for the response
//     const result = await api.sendMessage(text)
//
//     // result.response is a markdown-formatted string
//     console.log('inv.routes,' + await result.response)
//     return result.response
// }

import { ChatGPTAPIBrowser } from 'chatgpt'
import {response} from "express";

export default async function example(text) {
    // use puppeteer to bypass cloudflare (headful because of captchas)
    const api = new ChatGPTAPIBrowser({
        email: 'o.otep@mail.ru',
        password: 'olakola03'
    })

    await api.initSession()

    const result = await api.sendMessage(text)
    console.log(result.response)
    return result.response
}
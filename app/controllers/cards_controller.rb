class CardsController < ApplicationController
  before_action :set_parents

def new
  
end


  # #PAYJPとやり取りするために、payjpをロード
  # require "payjp" 

  # def new
  #   # 後ほど、showアクション(登録クレジットカード詳細表示機能)実装時に追記
  # end

  # def create
  #   # credentials.yml.encに記載したAPI秘密鍵を呼び出す
  #   Payjp.api_key = Rails.application.credentials.dig(:payjp, :PAYJP_SECRET_KEY)

  #   # トークン作成処理にて、完了の有無でフラッシュメッセージを表示させる
  #   if params["payjp_token"].blank?
  #     redirect_to action: "new", alert: "クレジットカードを登録できませんでした。"
  #   else
  #   # 無事トークン作成された場合のアクション(こっちが本命のアクション)
  #   # まずは生成したトークンから、顧客情報と紐付け、PAY.JP管理サイトに登録
  #     customer = Payjp::Customer.create(
  #       email: current_user.email,
  #       card: params["payjp_token"],
  #       metadata: {user_id: current_user.id} #最悪なくてもOK！
  #     )
  #     # 今度はトークン化した情報を自アプリのcardsテーブルに登録！
  #     @card = Card.new(user_id: current_user.id, customer_id: customer.id, card_id: customer.default_card)
  #     # 無事、トークン作成とともにcardsテーブルに登録された場合、createビューが表示されるように条件分岐
  #     if @card.save
  #       #もしcreateビューを作成しない場合はredirect_toなどで表示ビューを指定
  #     else
  #       redirect_to action: "create"
  #     end
  #   end
  # end

end